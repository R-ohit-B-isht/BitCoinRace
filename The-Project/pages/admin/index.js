import styles from "@styles/Admin.module.css";
import AuthCheck from "@components/AuthCheck";
import PostFeed from "@components/PostFeed";
import { UserContext } from "@lib/context";
import { firestore, auth, serverTimestamp } from "@lib/firebase";

import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { useCollection } from "react-firebase-hooks/firestore";
import kebabCase from "lodash.kebabcase";
import toast from "react-hot-toast";

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  );
}

function PostList() {
  const ref = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts");
  const query = ref.orderBy("createdAt");
  const [querySnapshot] = useCollection(query);

  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
    <>
      <h1>Manage your Posts</h1>
      <PostFeed posts={posts} admin />
    </>
  );
}

function CreateNewPost() {
  const router = useRouter();
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [pay, setPay] = useState(false);

  // Ensure slug is URL safe
  const slug = encodeURI(kebabCase(title));

  // Validate length
  const isValid = title.length > 3 && title.length < 100 && pay;

  // Create a new post in firestore
  const createPost = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const ref = firestore
      .collection("users")
      .doc(uid)
      .collection("posts")
      .doc(slug);

    // Tip: give all fields a default value here
    const data = {
      title,
      slug,
      uid,
      username,
      published: false,
      content: "# hello world!",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      heartCount: 0,
      amount: amount,
    };

    await ref.set(data);

    toast.success("Post created!");

    // Imperative navigation after doc is set
    router.push(`/admin/${slug}`);
  };

  const [amount, setAmount] = useState(5);
  const [email, setEmail] = useState("");

  // This function calls the Blockonomics Payment Widget,
  // you can call it when you want to trigger Payment Widget
  function payWithBitcoin() {
    Blockonomics.widget({
      msg_area: "bitcoinpay",
      uuid: "4039ffb8b5e24ed2",
      email:email,
      amount: amount,
    });
  }

  function handleAmountInput(e) {
    setAmount(e.target.value);
  }
  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  ///payment blocks

  function httpPostAsync(theUrl, postData, callback) {
    var postOrder = new XMLHttpRequest();
    postOrder.onreadystatechange = function () {
      if (postOrder.readyState === 4) {
        callback(postOrder);
      }
    };
    postOrder.open("POST", theUrl);
    postOrder.responseType = "json";
    postOrder.send(JSON.stringify(postData));
  }

  function loadClientChallenge() {
    var script = document.createElement("script");
    script.src = "https://www.blockonomics.co/js/client-challenge.js";
    document.head.appendChild(script);
  }

  function loadQrious() {
    var script = document.createElement("script");
    script.src = "https://www.blockonomics.co/js/qrious.min.js";
    document.head.appendChild(script);
  }

  function loadRequiredStyles() {
    var styles = `
  @font-face {
  font-family: 'blockonomics-icons';
  src:  url('/fonts/blockonomics-icons.woff?bue15') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
  }

  [class^="blockonomics-icon-"], [class*=" blockonomics-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'blockonomics-icons' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .blockonomics-icon-close:before {
  content: "\\e901";
  }
  .blockonomics-icon-copy:before {
  content: "\\e900";
  }
  `;

    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  const Widget = {
    displayTimer: function (msg_area, remaining) {
      var minutes = Math.floor(remaining / 60);
      var seconds = Math.floor(remaining) % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document
        .getElementById(msg_area)
        .querySelector(".time_remaining").innerHTML = minutes + ":" + seconds;
    },
    displayError: function (msg_area, msg) {
      var self = this;
      var widget_elem = document.getElementById(msg_area);
      widget_elem.style.marginTop = "5px";
      widget_elem.style.padding = "5px";
      widget_elem.style.width = "fit-content";
      widget_elem.style.border = "1px solid lightgray";
      widget_elem.style.borderRadius = "5px";
      widget_elem.style.display = "block";
      widget_elem.innerHTML =
        `<div class='blockonomics_error'>` +
        msg +
        `<div class="blockonomics_close" style="text-align:center;"><a href="#" style="cursor:pointer">Close</a></div></div>`;
      widget_elem.querySelector(".blockonomics_close a").onclick = function (
        evt
      ) {
        evt.preventDefault();
        widget_elem.style.display = "none";
        self.stopTimer();
      };
    },
    displayMessage: function (msg_area, msg) {
      var self = this;
      var widget_elem = document.getElementById(msg_area);
      widget_elem.style.marginTop = "5px";
      widget_elem.style.padding = "5px";
      widget_elem.style.width = "fit-content";
      widget_elem.style.border = "1px solid lightgray";
      widget_elem.style.borderRadius = "5px";
      widget_elem.style.display = "block";
      widget_elem.innerHTML =
        `<div class='blockonomics_message'>` +
        msg +
        `<div class="blockonomics_close" style="text-align:center;"><a href="#" style="cursor:pointer">Close</a></div></div>`;
      widget_elem.querySelector(".blockonomics_close a").onclick = function (
        evt
      ) {
        evt.preventDefault();
        widget_elem.style.display = "none";
        self.stopTimer();
      };
    },
    generateQr: function (address, amount) {
      const data = "bitcoin:" + address + "?amount=" + amount;
      const qr_elem = document.getElementById("blockonomics_qrcode");
      new QRious({
        element: qr_elem,
        value: data,
        size: 135,
      });
    },
    displayCheckout: function (msg_area, satoshi, address, totalTime) {
      var self = this;
      self.displayMessage(
        msg_area,
        `<div style="display:flex; align-items:center; justify-content: center;">
              <div style="max-width: 30%; padding-right:7px;">
                  <a href="bitcoin:` +
          address +
          `?amount=` +
          satoshi / 1e8 +
          `"><canvas id='blockonomics_qrcode' style="max-width:100%"></canvas></a>
              </div>
              <div>
                  <div>To pay, send bitcoin to this address:</div>
                  <input type="text" value="` +
          address +
          `" readonly>
                  <div>Amount of bitcoin (BTC) to send:</div>
                  <input type="text" value="` +
          satoshi / 1e8 +
          `" readonly>
                  <div style="text-align:center"><small class='time_remaining'></small></div>
              </div>
          </div>`
      );
      self.generateQr(address, satoshi / 1e8);

      var ws = new WebSocket(
        "wss://www.blockonomics.co" + "/payment/" + address
      );
      ws.onmessage = function (evt) {
        ws.close();
        if (
          window.blockonomicsPaymentCallback &&
          !window.blockonomicsPaymentCallback.hasRun
        ) {
          window.blockonomicsPaymentCallback(JSON.parse(evt.data));
          window.blockonomicsPaymentCallback.hasRun = true;
        } else {
          self.displayMessage(
            msg_area,
            "Payment received!" //+ JSON.parse(evt.data).txid
          );
          setPay(true);
          toast("✅Payment Recieved")
        }
        self.stopTimer();
      };

      var remaining = totalTime;
      self.displayTimer(msg_area, remaining);
      self.myTimeout = setInterval(function () {
        remaining = remaining - 1;
        self.displayTimer(msg_area, remaining);
        if (remaining <= 0) {
          self.stopTimer();
          self.displayError(msg_area, "Expired");
        }
      }, 1000);
    },
    myTimeout: null,
    stopTimer: function () {
      clearTimeout(this.myTimeout);
    },
  };

  const Blockonomics = {
    widget: function ({
      msg_area,
      uuid,
      email,
      name,
      address,
      amount,
      quantity,
      phone,
      custom_one,
      custom_two,
      timer,
    }) {
      uuid = uuid.trim();
      if (uuid == "") {
        Widget.displayError(msg_area, "Missing uid from configuration.");
        return;
      }
      email = email.trim();
      if (email == "") {
        Widget.displayError(msg_area, "Please enter a valid email.");
        return;
      }

      var url = "https://www.blockonomics.co/api/merchant_order/" + uuid;
      if (amount) {
        url += "?amount=" + amount;
      } else if (quantity) {
        url += "?quantity=" + quantity;
      }

      var postData = {
        client_challenge: run_challenge(),
        emailid: email,
      };
      if (name) {
        postData["name"] = name;
      }
      if (address) {
        postData["address"] = address;
      }
      if (phone) {
        postData["phone"] = phone;
      }
      if (custom_one) {
        postData["Custom Field1"] = custom_one;
      }
      if (custom_two) {
        postData["Custom Field2"] = custom_two;
      }

      if (!url || !postData) return;

      httpPostAsync(url, postData, function (data) {
        if (data.status === 200) {
          var countdown_timer = timer ? timer : 600;
          Widget.displayCheckout(
            msg_area,
            data.response.satoshi,
            data.response.address,
            countdown_timer
          );
        } else {
          try {
            const code = data.response.error_code;
            var message = data.response.message;
            if (message.length > 100) {
              message = message.substring(0, 100);
            }
            Widget.displayError(
              msg_area,
              "Unable to Generate Order. Error Code : " + code + ". " + message
            );
          } catch (err) {
            Widget.displayError(msg_area, "Unable to Generate Order.");
          }
        }
      });
    },
  };

  loadClientChallenge();
  loadRequiredStyles();
  loadQrious();
  if (window.blockonomicsAsyncInit && !window.blockonomicsAsyncInit.hasRun) {
    window.blockonomicsAsyncInit();
    window.blockonomicsAsyncInit.hasRun = true;
  }

  return (
    <form onSubmit={createPost}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="My Awesome Article!"
        className={styles.input}
      />
      <input
        type="email"
        id="email"
        placeholder="Email Address"
        onInput={handleEmailInput}
        style={{marginTop:"10px"}}
      />
      
      <input
          type="number"
          id="other_amount"
          placeholder="$5 minimum"
          onInput={handleAmountInput}
          style={{marginTop:"10px"}}
        />
      
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <div className="App">
        
        <div
        style={{display:"flex"}}
        >

        <button
          id="pay"
          onClick={(e) => {
            e.preventDefault();
            payWithBitcoin();
          }}
          className="btn-blue"
        >
          Pay with Bitcoin
          </button>
          
        <button type="submit" disabled={!isValid} className="btn-green">
        Create New Post
          </button>
          
        </div>
      
        <div id="bitcoinpay"></div>
      </div>
      
    </form>
  );
}
