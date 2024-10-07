import React from 'react';

const Header = ({ totalCompany }) => {

    return (
        <nav className="h-20 w-full bg-green-300 py-4 text-center">
            <h1 className="text-2xl">Companies CRUD App</h1>
            <p>Total Companies - { totalCompany }</p>
        </nav>
    );
};
export default Header;