import Navbar from '@/components/nav-bar'
import List from '@/components/list'
import styles from '../page.module.css'

export default function Search() {
  return (
    <div>
      <Navbar useThemedLogo withSearch/>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
      <List/>
    </div>
  )
}
