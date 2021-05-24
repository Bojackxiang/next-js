import React from 'react'
import { useRouter } from 'next/router'

const ProjectPage = () => {
  const route = useRouter()
  const {query} = route;
  console.log(query);
  const {id, projectId} = query;
  
  return (
    <div>
      {id} - {projectId}
    </div>
  )
}

export default ProjectPage
