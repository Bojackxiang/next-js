/**
 * 这个文件实际上会被用作 根路径
 */
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
const Home = () => {
  const router = useRouter();
  const links = [
    { name: 'about', path: '/about' },
    { name: 'client', path: '/clients/12' },
    { name: 'dynamic client', path: '/clients/12/projects/13' },
  ]

  const redirectToClient = () => {
    // router.push('/clients/12')
    router.push({
      pathname: '/clients/[id]',
      query: {id: 1}
    })
  }
  return (
    <div>
      <ul>
        {
          links.map((link, index) => <li key={index}><Link href={link.path}>{link.name}</Link></li>)
        }
        <li>
          <Link href={{
            pathname: '/clients/[id]',
            query: { id: 1 }
          }}>client</Link>
        </li>

      </ul>
      <button onClick={redirectToClient}>link to client</button>
    </div>
  )
}

export default Home
