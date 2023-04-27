import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='container xl:mx-[200px] mx-3 my-[20px]'>
        <div className='flex justify-between px-2 md:justify-evenly'>
          <h1 className='text-blue-600 font-bold'>TestDome</h1>
          <div className='hidden md:flex gap-10 mt-2'>
            <p className='text-medium-bold-blue'>Product</p>
            <p className='text-medium-bold-blue'>Assessment</p>
            <p className='text-medium-bold-blue'>Pricing</p>
            <p className='text-medium-bold-blue'>Resources</p>
            <p className='text-medium-bold-blue'>Certificates</p>
          </div>
          <div className='hidden md:flex gap-2'>
            <div>
              <button className='inverse-button'>Sign In</button>
            </div>
            <div>
              <button className='button'>Start trial</button>
            </div>
          </div>
          <div className='xl:hidden'>
            <button className='mt-4'>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Navbar