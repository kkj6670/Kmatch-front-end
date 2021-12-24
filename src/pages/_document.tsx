import React from 'react';
import Document, { Main, NextScript, Html, Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko-KR'>
        <Head>
          {/* <link rel='icon' href={`${process.env.URL_PATH}/static/images/icon/note.svg`} /> */}
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`${process.env.URL_PATH}/images/favicon-32x32.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href={`${process.env.URL_PATH}/images/favicon-96x96.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={`${process.env.URL_PATH}/images/favicon-16x16.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
