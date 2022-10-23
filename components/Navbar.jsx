import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className='flex container mx-auto  py-6 justify-around items-center'>
			<div className='basis-1/3 flex justify-center items-center cursor-pointer'>
				<Link href='/'>
					<Image src='/React 3.png' alt='Background' width={100} height={30} />
				</Link>
			</div>
			<div className=' hidden md:block basis-1/3'>
				<ul className='flex justify-between'>
					<li className='cursor-pointer text-sm '>About us</li>
					<li className='cursor-pointer text-sm '>What we Do</li>
					<li className='cursor-pointer text-sm '>Our work</li>
					<li className='cursor-pointer text-sm '>Blog</li>
					<li className='cursor-pointer text-sm '>Say hi</li>
				</ul>
			</div>
			<div className='basis-1/3 flex justify-center items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6 cursor-pointer'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Navbar;
