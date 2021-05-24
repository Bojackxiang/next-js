/**
 * 这个文件实际上会被用作 根路径
 */
import React from 'react'
import Link from 'next/link'
const Home = () => {
  const links = [
    { name: 'about', path: '/about' },
    { name: 'client', path: '/clients/12' },
    { name: 'dynamic client', path: '/clients/12/projects/13' },
  ]
  return (
    <div>
      <ul>
        {
          links.map((link, index) => <li key={index}><Link href={link.path}>{link.name}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Home
