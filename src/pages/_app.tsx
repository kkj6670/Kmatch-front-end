import '../styles/globals.css';
import type { AppProps } from 'next/app';

import wrapper from 'store';

import AlertBox from '../components/AlertBox';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AlertBox type='2' text='2' time={0} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
