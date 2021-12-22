import type { NextPage } from 'next';

const Home: NextPage = function () {
  return (
    <div className='flex w-screen h-screen'>
      <div className='bg-[url("/images/bg-main-page3.jpeg")] blur-sm bg-no-repeat bg-full absolute w-screen h-screen' />
      <div className='absolute w-screen h-screen bg-black opacity-60' />
      <div className='m-auto space-y-3 w-128'>
        <div className='w-full px-6 py-5 mx-auto space-y-1 overflow-hidden transition duration-500 transform rounded-lg '>
          <p className='font-semibold text-white text-center text-7xl mb-5'>K-Match</p>
          <p className='text-white text-center text-3xl'>TFT Match Search</p>
        </div>
        <div className='flex w-full m-auto mx-auto space-x-3'>
          <input
            className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 transition duration-500 transform bg-white border-2 border-blue-500 border-opacity-25 rounded-lg appearance-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent motion-reduce:transform-none hover:scale-105'
            placeholder='소환사 검색'
            type='text'
          />
          <button
            className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white transition duration-500 transform bg-blue-500 rounded-lg hover:shadow-lg focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 motion-reduce:transform-none hover:scale-105 tramsform'
            type='button'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
