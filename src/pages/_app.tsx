import '../styles/globals.css';
import type { AppProps, AppContext, AppInitialProps } from 'next/app';
import { useSelector } from 'react-redux';
import wrapper from 'store';
import { RootState } from 'store/reducers';
import AlertBox from '../components/AlertBox';

const KmatchApp = function ({ Component, pageProps }: AppProps) {
  const { alertInfo } = useSelector((state) => state.common);

  return (
    <>
      <Component {...pageProps} />
      <AlertBox alertInfo={alertInfo} />
    </>
  );
};

KmatchApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(KmatchApp);
