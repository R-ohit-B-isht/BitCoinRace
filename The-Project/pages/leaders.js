import styles from "@styles/Board.module.css";
import HeartButton from '@components/HeartButton';
import PostContent from '@components/PostContent';
import AuthCheck from '@components/AuthCheck';
import Link from 'next/link';
import { UserContext } from '@lib/context';
import { firestore, getUserWithUsername, postToJSON } from '@lib/firebase';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useContext } from 'react';


export default function Leader(post) {
  const postRef = firestore.doc(`users/${post.post.uid}/posts/${post.post.slug}`);

  const [realtimePost] = useDocumentData(postRef);

  const post2 = realtimePost || post.post;

  const { user: currentUser } = useContext(UserContext);


  return (
    
 <div>
      <div className={styles.alone}>
      


      <img id="crown"
        src="/crown.svg"
        alt="coroa"
        style={{
          width: "3rem",
          height: "3rem",
          border: "unset",
          padding: "unset",
          animation: "crown-animation 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        }}
      />

      <img src="/hacker.png" alt="" />
      <p>{ `Top Post: $${post2.amount}`}</p>

      <span  className={styles.revenue}>{ `@${post2.username}`}</span>
   
      </div>
    
      <PostContent post={post2} />
      <aside className="card" style={{
        display: "flex",
        justifyContent: "space-around"
    }}>
        <p>
          <strong>{post2.heartCount || 0} 🤍</strong>
        </p>

        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
    }}>
        <AuthCheck
          fallback={
            <Link href="/enter">
              <button>💗 Sign Up</button>
            </Link>
          }
        >
          <HeartButton postRef={postRef} />
        </AuthCheck>

        {currentUser?.uid === post2.uid && (
          <Link href={`/admin/${post2.slug}`}>
            <button className="btn-blue">Edit Post</button>
          </Link>
        )}
        </div>
        </aside>
          </div>
        
      
  );
}
