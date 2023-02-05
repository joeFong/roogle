'use client'
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function Search(props: any) {
    const { withSearchButton, q } = props
    const searchParams = useSearchParams();
    const [ search, $search ] = useState(searchParams.get('q'))
    const onValueChange = (e: any) => {
        $search(e.target.value)
    }
    return (
        <form className="w-1/2 h-12">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" value={search} onChange={onValueChange} id="default-search" className="drop-shadow-lg block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500" placeholder="Search things in reddit..." required></input>
                {
                    withSearchButton ? 
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    : <></>
                }
            </div>
        </form>
    );
}