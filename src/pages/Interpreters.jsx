import React from 'react'
import {InterpretersData} from '../data/InterpretersData';
import UserCard from '../components/cards/interpreterCard';

const Interpreters = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Our Interpreters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {InterpretersData.map((interpreter) => (
            <UserCard key={interpreter.id} {...interpreter} />
            ))}
        </div>
        </div>
    )
}

export default Interpreters