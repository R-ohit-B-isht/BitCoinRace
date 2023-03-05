import Head from 'next/head';

export default function Metatags({
  title = 'Blockonomics Leaderboard',
  description = 'A complete Next.js + Firebase + blockonomics bitcoin Leaderboard',

}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@R-ohit-B-isht" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
 

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

    </Head>
  );
}
