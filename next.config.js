const { NODE_ENV } = process.env;
const URL_PATH = '/Kmatch-front-end'; // github pages url

const isProd = NODE_ENV === 'production';

module.exports = {
  productionBrowserSourceMaps: true, // 프로덕션 빌드중 소스맵 생성x, 빌드속도 향상 https://nextjs.org/docs/advanced-features/source-maps
  // images: {
  //   loader: 'imgix',
  //   path: '',
  //   domains: ['lh3.googleusercontent.com'],
  // },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  env: {
    URL_PATH: isProd ? URL_PATH : '',
  },
  basePath: isProd ? URL_PATH : '',
  assetPrefix: isProd ? URL_PATH : '',
  compress: true,
  webpack: (config, { dev, isServer }) => {
    const customConfig = { ...config };

    if (dev) {
      // ip 외부접속 허용
      customConfig.devServer = {
        host: '0.0.0.0',
      };
    } else {
      customConfig.devtool = isServer ? false : 'nosources-source-map'; // https://nextjs.org/docs/messages/improper-devtool
    }

    return {
      ...customConfig,
    };
  },
};
