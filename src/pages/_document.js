import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <body className='bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
