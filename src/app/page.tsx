import Navbar from '@/components/nav-bar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={"flex flex-col flex-grow justify-center content-center align-middle items-center h-4/5"}>
      <div>
        <h1 className={'text-7xl'}>
          <span style={{color: "#4285F4"}}>R</span>
          <span style={{color: "#EA4335"}}>o</span>
          <span style={{color: "#FBBC05"}}>o</span>
          <span style={{color: "#00A1F1"}}>g</span>
          <span style={{color: "#34A853"}}>l</span>
          <span style={{color: "#F67314"}}>e</span>
        </h1>
      </div>
      <div className="mt-12 w-4/5 md:w-1/2 h-24">
        <form action="/search">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input name="q" type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search things in reddit..." required></input>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
      </div>
    </main>
    </>
  )
}
