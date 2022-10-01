import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
    const [menu, setmenu] = useState(false)
    const routes = [
        {
            id: 1, name: 'Home', path: '/Home',
        },
        {
            id: 2, name: 'Product', path: '/Home',
        },
        {
            id: 3, name: 'Orders', path: '/Home',
        },
        {
            id: 4, name: 'Contact', path: '/Home',
        },
        {
            id: 6, name: 'About', path: '/Home',
        }
    ]
    return (
        <nav className='bg-purple-200'>
            <div onClick={() => setmenu(!menu)} className="h-6 w-6 md:hidden">
                {
                    menu ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`md:flex justify-center bg-purple-200 w-full absolute md:static duration-500 ease-in ${menu ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;