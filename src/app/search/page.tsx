import Navbar from '@/components/nav-bar'
import List from '@/components/list'
import styles from '../page.module.css'

import { useSearchParams } from 'next/navigation';
import qs from "qs";

async function getData(props: any) {
    const params = qs.stringify({...props})
    const res = await fetch(`/api/search?${params}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}

export default async function Search() {
  // const searchParams = useSearchParams();
  // const res = await getData({
  //   q: searchParams.get('q')
  // })
  return (
    <div>
      <Navbar useThemedLogo withSearch/>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
      <List/>
    </div>
  )
}
