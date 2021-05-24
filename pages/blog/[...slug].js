/**
 * NOTE 全匹配 [...slug].js
 * 会直接捕获所有在 blog 后面的路径·
 * 这种情况下，无论什么 route 名称都能够被成功捕获到
 */
import { useRouter } from 'next/router'
import React from 'react'

const Blog = () => {
  const route = useRouter()
  console.log(route);
  
  return (
    <div>
      
    </div>
  )
}

export default Blog
