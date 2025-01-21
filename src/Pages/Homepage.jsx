import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryLookup from '../Components/CategoryLookup'
import DisposalGuidelines from '../Components/DisposalGuidelines'
import RecyclingTips from '../Components/RecyclingTips'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-4">
            <CategoryLookup />
        </div>
    </div>
  )
}

export default Homepage