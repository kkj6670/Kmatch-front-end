import React, { FormEvent, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface ISearch {
  placeholder: string;
  value: string;
  onInput: (e: React.FormEvent) => void;
  onSearch: (e: React.MouseEvent) => void;
}

const SearchBox = function ({ placeholder, value, onInput, onSearch }: ISearch) {
  return (
    <div className='flex w-full m-auto mx-auto space-x-3'>
      <input
        className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 transition duration-500 transform bg-white border-2 border-blue-500 border-opacity-25 rounded-lg appearance-none hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent motion-reduce:transform-none hover:scale-105'
        placeholder={placeholder}
        type='text'
        value={value}
        onInput={onInput}
      />
      <button
        className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white transition duration-500 transform bg-blue-500 rounded-lg hover:shadow-lg focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 motion-reduce:transform-none hover:scale-105 tramsform'
        type='button'
        onClick={onSearch}
      >
        <FaSearch size='24px' />
      </button>
    </div>
  );
};

export default SearchBox;
