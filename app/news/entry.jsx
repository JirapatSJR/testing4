import { DateStrapi } from '@/components/date'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Entry = ({ href, temp }) => {
    return (
        <div><Link href={href}>
            <div className="flex flex-col relative w-full 2xl:h-[600px] md:h-[550px] bg-white md:bg-opacity-30 bg-opacity-100">
                <Image
                    src={temp.attributes.thumbnail.data.attributes.url}
                    width={890}
                    height={300}
                    alt={temp.attributes.title}	sizes="(max-width: 768px) 100vw"
                    style={{objectFit: "cover"}}
                />
                <div className="2xl:p-8 md:p-4 p-4 w-full relative flex flex-col justify-around h-full">
                    <h3 className="2xl:font-extrabold font-bold 2xl:text-xl text-lg text-green4wd">
                        {temp.attributes.title}
                    </h3>
                    <h4 className="w-full h-full text-sm md:text-gray-100 text-gray-600 2xl:mt-4 mt-2">
                        {temp.attributes.summary}
                    </h4>
                    <h5 className="py-2 flex justify-between md:text-gray-300 text-gray-600 font-light md:mt-0 mt-6">
                        <span className='2xl:text-sm text-xs flex items-center align-middle text-center'>
                            {`Published: `}
                            {DateStrapi({daystring: temp.attributes.publishedAt}).format(
                                "DD/MMMM/YYYY"
                            )}
                        </span>
                        <span className='text-green4wd font-medium 2xl:text-lg text-base'>{"Read more →"}</span>
                    </h5>
                </div>
            </div>
        </Link></div>
    )
}

export default Entry