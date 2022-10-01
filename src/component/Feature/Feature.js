import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({ feature }) => {
    return (
        <div className='flex items-center' >
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
            <p className='ml-4'>{feature}</p>
        </div>
    );
};

export default Feature;