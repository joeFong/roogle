"use client"
import React, { useEffect, useState } from "react";

export function Card(props: any) { 
    const { data } = props
    const { cse_thumbnail } = data.pagemap
    const [ subReddit, setSubReddit ] = useState('')

    useEffect(() => {
        if(data.link) {
            const parts = data.link.replace('https://', '').split('/')
            setSubReddit(parts[1] + '/' + parts[2])
        }
    }, [data])

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded" src={cse_thumbnail?.[0].src || ("https://ui-avatars.com/api/?name=" + data.title)} alt={data.title}/>
                    <a href={data.link} className="ml-3 text-blue-600 visited:text-purple-600">
                        <div className="text-slate-500 flex flex-col ml-3 text-sm">
                            <p>Reddit · {subReddit}</p>
                            <p>{ data.displayLink }</p>
                        </div>
                    </a>
                </div>
                <a href={data.link} className="ml-3 text-blue-600 visited:text-purple-600">
                    <h3 className="text-lg font-medium leading-6" dangerouslySetInnerHTML={{ __html: data.htmlTitle }}></h3>
                </a>
                <p className="mt-1 max-w-2xl text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: data.htmlSnippet }}></p>
            </div>
            {/* <div className="border-t border-gray-200">
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                </div>
            </div> */}
        </div>
    )
}