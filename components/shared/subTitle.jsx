import React from 'react'

const SubTitle = ({title, color}) => {
  return (
    <div className='mt-8'>
        <h1 className='text-2xl font-bold ml-36'>{title}</h1>
        <div className="border-t-8 border-green4wd mt-8 w-48"></div>
    </div>
  )
}

export default SubTitle