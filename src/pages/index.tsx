import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import SearchBox from 'components/SearchBox';

const Home: NextPage = function () {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSearchInput = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName],
  );

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (name.replaceAll(' ', '').length === 0) {
        alert('소환사명을 입력 해주세요.');
      } else {
        router.push(`profile/${name}`);
      }
    },
    [router, name],
  );

  return (
    <div className='flex w-screen h-screen'>
      <div
        style={{ backgroundImage: `url(${process.env.URL_PATH}/images/bg-main.jpeg)` }}
        className='blur-sm bg-no-repeat bg-full absolute w-screen h-screen'
      />
      <div className='absolute w-screen h-screen bg-black opacity-60' />
      <div className='m-auto space-y-3 w-128 select-none'>
        <div className='w-full px-6 py-5 mx-auto space-y-1 overflow-hidden transition duration-500 transform rounded-lg '>
          <p className='font-semibold text-white text-center text-7xl mb-5'>K-Match</p>
          <p className='text-white text-center text-3xl'>TFT Match Search</p>
        </div>
        <SearchBox
          value={name}
          placeholder='소환사 검색'
          onInput={handleSearchInput}
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Home;
