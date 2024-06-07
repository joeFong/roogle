import Navbar from '@/components/nav-bar'
import { headers } from 'next/headers';
import List from '@/components/list'
import qs from "qs";

async function getData(props: any) {
    const headersList = headers();
    const params = qs.stringify({...props});
    const resp = await fetch(`http://${headersList.get('host')}/api/search?${params}`);
    if (!resp.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return resp.json();
    // return { items: [] }
}

export default async function Search({ searchParams, ...rest }: any) {
  const res = await getData({
    ...searchParams
  })

  return (
    <div>
      <Navbar useThemedLogo withSearch {...rest}/>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
      <List data={res} params={searchParams}/>
    </div>
  )
}
