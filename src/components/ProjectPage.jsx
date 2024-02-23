import React from 'react'

import {ProjectHeader} from './ProjectHeader'
import {TaskDetails} from './TaskDetails'
import { NoProjectPage } from './NoProjectPage'



export const ProjectPage = () => {
  return (
    <div className="items-center gap-4">
        <h1 className='text-xl font-bold text-stone-700 my-4'> Center Page </h1>
    <ProjectHeader/>
    <TaskDetails/>
    </div>
  )
}
