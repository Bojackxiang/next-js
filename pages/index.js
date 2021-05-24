/**
 * 这个文件实际上会被用作 根路径
 */
import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>、
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
