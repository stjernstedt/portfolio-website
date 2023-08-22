import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className='fixed h-16 w-full bg-main shadow-md shadow-gray-400'>
			<div className='flex h-full w-full items-center justify-between gap-4 px-4 text-white lg:justify-end lg:gap-10 lg:px-16'>
				<Link href='#home'>HOME</Link>
				<Link href='#about'>ABOUT</Link>
				<Link href='#projects'>PROJECTS</Link>
				<Link href={'/'}>CONTACT</Link>
			</div>
		</nav>
	);
};
