import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode, useRef, useState } from 'react';
import { FaArrowRight, FaEllipsisH, FaFlag, } from 'react-icons/fa';


type Props = {
  children: ReactNode;
};

export default function MenuDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  p-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            
            <FaEllipsisH
              className="h-5 w-5 text-gray-600  hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute px-2 right-0 mt-2 w-[210px] origin-top-right divide-y divide-gray-400 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className='py-4 leading-8 text-[18px]'>
                          
                <h1 className='flex justify-evenly'>
                <FaFlag className="mt-2" />
                 what is a billbord?
                </h1>
                 <h1 className='flex justify-evenly'>
                <FaFlag className="mt-2" />
                
                 manage preferences
                 </h1>
                </div>
                <div>
                          
                 <h1 className='flex justify-evenly py-5 text-[18px]'>
                 <FaFlag className="mt-2 space-x-2" />
                     Report billbord?
                 </h1>
                </div>
                     
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

