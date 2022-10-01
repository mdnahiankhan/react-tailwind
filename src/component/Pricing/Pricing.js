import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const PricingOptions = [
        {
            id: 1, name: "Free", price: 0, features:
                ["Important feature",
                    'Awesome feature',
                    'UngaBunga feature',
                    'Extra feature',
                    "Unnecessary feature"]
        },
        {
            id: 2, name: "Medium", price: 9.99, features:
                ["Important feature",
                    'Awesome feature',
                    'UngaBunga feature',
                    'Extra feature',
                    "Unnecessary feature"]
        },
        {
            id: 3, name: "Premium", price: 19.99, features:
                ["Important feature",
                    'Awesome feature',
                    'UngaBunga feature',
                    'Extra feature',
                    "Unnecessary feature"]
        },
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 text-white p-12'>Best deal in the world</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    PricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;