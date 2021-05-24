/**
 * getting into this page 
 * localhost:3001/profile/1
 */
import React from 'react'
import { useRouter } from 'next/router' // 获取用户输入的参数

const SingleProfilePage = () => {
  const route = useRouter()
  const { query } = route

  return (
    <div>
      the single profile page
    </div>
  )
}

export default SingleProfilePage
