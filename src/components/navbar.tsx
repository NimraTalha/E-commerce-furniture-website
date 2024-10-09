import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='hidden lg:block bg-white shadow-md'>
      <div className='container mx-auto'>
        <div className="flex justify-center gap-10 py-4 text-blackish font-medium">
          {/* Home page link */}
          <Link className='navbar_link relative hover:text-yellow-600' href="/"> Home</Link>
          
          {/* Shopping page link */}
          <Link className='navbar_link relative hover:text-yellow-600' href="/collection"> Shopping</Link>
          
          <Link className='navbar_link relative hover:text-yellow-600' href="#"> About-us</Link>
          <Link className='navbar_link relative hover:text-yellow-600' href="#"> Contact-us </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
