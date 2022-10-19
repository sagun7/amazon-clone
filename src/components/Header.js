import React from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'


import { useSession, signIn, signOut } from "next-auth/react"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


const Header = () => {
  const { data: session } = useSession();
  const router= useRouter();
  const items= useSelector(selectItems);

  
  return (
    <header>
   {/*  Top Nav */}
    <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>   
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image
              onClick={()=>router.push("/") }
                src ='https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
            />
        </div>
        <div className='hidden sm:flex items-center rounded-md h-10 cursor-pointer flex-grow  bg-yellow-400 hover:bg-yellow-500'>
            <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4 focus:outline-none ' type="text" />
            <SearchIcon className='h-12 p-4' />
        </div>
          {/*  Right side */}
          <div className='text-white flex items-center text-xa space-x-6 mx-6 whitespace-nowrap'>
            <div onClick={!session ? signIn : signOut} className='cursor-pointer link'>
                <p className='hover:underline'>
                  {session? `Hello, ${session.user.name}`: 'Sign In' }
                </p>
                <p  className='font-extrabold  md:text-sm'>Account & List</p>
            </div>
            <div className=' link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
          
            </div>
             <div onClick={()=> router.push("/checkout")} className='relative flex items-center  link'>
                <span  className='absolute top-0 right-0 md:right-10 h-4 w-4 text-center  bg-yellow-400 
                font-bold rounded-full text-black'>{items.length}</span>
                <ShoppingCartIcon 
                        className='h-10'
                        
                        
                />
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
            </div>
          </div>
    
    </div>

     {/*  Bottom Nav */}
     <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>  
        <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-1' />
            All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden lg:inline-flex link'>Electronics</p>
        <p className='hidden lg:inline-flex link'>Food</p>
        <p className='hidden lg:inline-flex link'>Prime</p>
        <p className='hidden lg:inline-flex link'>Buy Again</p>
        <p className='hidden lg:inline-flex link'>Shopper ToolKit</p>
        <p className='hidden lg:inline-flex link'>Health & Personal Care</p>
     </div>
    </header>
  )
}

export default Header