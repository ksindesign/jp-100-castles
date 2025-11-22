'use client';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface DestinationFilterProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DestinationFilter({
  placeholder,
  onChange,
}: DestinationFilterProps) {
  return (
    <div className='relative flex md:max-w-3xl w-[90vw] mx-auto'>
      <label htmlFor='search' className='hidden'>
        Search
      </label>
      <input
        id='search'
        className='block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onChange={onChange}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'
      />
    </div>
  );
}
