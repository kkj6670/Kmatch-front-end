import React from 'react';
import Document, { Main, NextScript, Html, Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko-KR'>
        <Head>
          {/* <link rel='icon' href={`${process.env.URL_PATH}/static/images/icon/note.svg`} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
