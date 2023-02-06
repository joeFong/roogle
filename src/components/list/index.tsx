import React from "react";
import qs from "qs";

export default function List(props: any) {
    const { data, params } = props 
    const { searchInformation, items } = data

    var queryParams = {...params}
    const nextPage = params.page ? parseInt(params.page) + 1 : 2
    const prevPage = params.page && (parseInt(params.page) - 1 > 1) ? parseInt(params.page) - 1 : null
    
    const nextParams = {...queryParams, page: nextPage}
    const prevParams = {...queryParams, page: prevPage}

    if(!prevPage) {
        delete prevParams['page']
    }

    return (
        <div className="container mx-auto flex flex-col">
            <p className="px-4 py-5 sm:px-6 font-light text-slate-500">About {searchInformation?.formattedTotalResults} results ({searchInformation?.formattedSearchTime} seconds) </p>
            {
                items.map((item: any) => {
                    return (
                        <div key={item.title} className={"my-4"}>
                            <Card data={item}/>
                        </div>
                    )
                })
            }
            <div className="flex justify-center mt-10 mb-10">
                {
                    params?.page ? 
                    <>
                    <a href={'/search?' + qs.stringify(prevParams) }>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Previous</button>
                    </a>
                    <a href={'/search?' + qs.stringify(nextParams) }>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>
                    </a>
                    </>
                    : (
                        <a href={'/search?' + qs.stringify({...params, page: 2}) }>
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Load More</button>
                        </a>
                    )
                }
            </div>
        </div>
    );
}

function Card(props: any) { 
    const { data } = props
    const { cse_thumbnail } = data.pagemap
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded" src={cse_thumbnail?.[0].src || ("https://ui-avatars.com/api/?name=" + data.title)} alt={data.title}/>
                    <a href={data.link} className="ml-3 text-blue-600 visited:text-purple-600">
                        <div className="text-slate-500 flex flex-col ml-3 text-sm">
                            <p>Reddit</p>
                            <p>{ data.displayLink }</p>
                        </div>
                    </a>
                </div>
                <a href={data.link} className="ml-3 text-blue-600 visited:text-purple-600">
                    <h3 className="text-lg font-medium leading-6" dangerouslySetInnerHTML={{ __html: data.title }}></h3>
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