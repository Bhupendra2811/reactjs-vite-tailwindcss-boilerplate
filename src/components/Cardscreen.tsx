import React from 'react'
import Card from './Card'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

const Cardscreen = () => {
    const data = [
        { title: "cahanges in ui", description: "dshjfdskdkshfhkdsghkbgvgyigdskbsfsjbfkbdskjfdjsdsfndsnf" },
        { title: "cahanges in  NAVIGATION", description: "dshjfdskdkshfhkdsghkbgvgyigdskbsfsjbfkbdskjfdjsdsfndsnf" },
        { title: "BUGS IN UI ", description: "dshjfdskdkshfhkdsghkbgvgyigdskbsfsjbfkbdskjfdjsdsfndsnf" },
    ]
    return (
        <>
            <div className='flex items-center justify-center gap-2 p-4'>
                <Card  >
                    <div className="flex items-start justify-between" >
                        <div>
                            <span className="text-3xl text-gray-600">{"To Do"}</span>
                        </div>
                        <div>
                            {/* <button className="text-violet-600">
                            + Create New
                        </button> */}
                        </div>
                    </div>
                    <div className='mt-2' >
                        {data && data.length ? (
                            <div  >
                                {data?.map((task: any) => (
                                    <div className='rounded-1xl  mb-2 bg-white  p-4 px-10 drop-shadow-xl' key={task.title}>
                                        <div className='flex justify-between'>
                                            <span className="text-gray-800">{task.title}</span>
                                            <EllipsisHorizontalIcon className='w-5' ></EllipsisHorizontalIcon>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-400">
                                                {task.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>no tasks</div>
                        )}
                    </div>
                </Card>
                <Card >
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-3xl text-gray-600">{"In Progress"}</span>
                        </div>
                        <div>
                            {/* <button className="text-violet-600">
                            + Create New
                        </button> */}
                        </div>
                    </div>
                    <div className='mt-2'>
                        {data && data.length ? (
                            <div>
                                {data?.map((task: any) => (
                                    <div className='rounded-1xl  mb-2 bg-white  p-4 px-10 drop-shadow-xl' key={task.title}>
                                        <div className='flex justify-between'>
                                            <span className="text-gray-800">{task.title}</span>
                                            <EllipsisHorizontalIcon className='w-5' ></EllipsisHorizontalIcon>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-400">
                                                {task.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>no tasks</div>
                        )}
                    </div>
                </Card>
                <Card >
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-3xl text-gray-600">{"Done"}</span>
                        </div>
                        <div>
                            {/* <button className="text-violet-600">
                            + Create New
                        </button> */}
                        </div>
                    </div>
                    <div className='mt-2'>
                        {data && data.length ? (
                            <div>
                                {data?.map((task: any) => (
                                    <div className='rounded-1xl  mb-2 bg-white  p-4 px-10 drop-shadow-xl' key={task.title}>
                                        <div className='flex justify-between'>
                                            <span className="text-gray-800">{task.title}</span>
                                            <EllipsisHorizontalIcon className='w-5' ></EllipsisHorizontalIcon>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-400">
                                                {task.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>no tasks</div>
                        )}
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Cardscreen