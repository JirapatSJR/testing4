import React from 'react'

const Information = ({ title=null, desc=null}) => {
    return (
        <div className="h-auto w-full 2xl:py-5 md:py-4 py-2 border-white border-2 flex flex-row items-center">
            <span className="text-white4wd 2xl:font-extrabold md:font-bold font-semibold 2xl:text-xl md:text-sm text-xs w-1/3 text-center inline-block">
                {title}
            </span>
            <span className="text-white4wd  font-normal 2xl:text-lg md:text-sm text-xs w-2/3 pr-4">
                {desc}
            </span>
        </div>
    )
}

export default Information