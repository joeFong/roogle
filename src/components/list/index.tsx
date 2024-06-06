import React from "react";
import qs from "qs";
import { Card } from "./card";

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
