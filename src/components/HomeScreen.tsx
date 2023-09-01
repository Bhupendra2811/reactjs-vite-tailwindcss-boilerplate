import React from 'react'
import Cardscreen from './Cardscreen'
import { PencilIcon } from '@heroicons/react/24/outline'
import NewProject from './NewProject'
import Navbar from './Navbar'
import GlassPane from './GlassPane'

const HomeScreen = () => {
    return (
        <GlassPane className="candy-mesh h-screen w-screen p-6">
            <Navbar />
            <div className='mr-4 flex items-center justify-end p-4 '>
                <NewProject />
            </div>
            <Cardscreen></Cardscreen>
        </GlassPane >
    )
}

export default HomeScreen