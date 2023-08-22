import Image from 'next/image';
import Link from 'next/link';
import Paper from './Paper';

const Projects = () => {
	return (
		<section id='projects' className='mx-auto min-h-screen pt-24'>
			<Paper className={'mb-12 text-center text-2xl text-dark lg:text-6xl'}>Projects</Paper>
			<div className='flex flex-col space-y-12 pb-24'>
				<Paper className='grid w-fit grid-cols-1 lg:grid-cols-2'>
					<div className='text-md flex flex-col justify-between pr-6'>
						<div>
							<h4 className='mb-6 text-center text-xl'>Weekly Menu</h4>
							An app that lets you create recipes and add said recipes to create a menu for each week.
						</div>
						<div className='col-start-2 flex flex-col'>
							<Link href={'https://happy-turtleneck-hen.cyclic.app'} className='text-blue-700'>
								Live Website
							</Link>
							<Link href='https://github.com/stjernstedt/weekly-menu-app' className='text-blue-700'>
								Source
							</Link>
							<Link href='https://github.com/stjernstedt/weekly-menu-app-server' className='text-blue-700'>
								Backend Source
							</Link>
						</div>
					</div>
					<Image src={'/weekly-menu.png'} width={500} height={281} alt='weekly menu project' />
				</Paper>
				<Paper className='grid w-fit grid-cols-1 lg:grid-cols-2'>
					<Image src={'/sevens.jpg'} width={500} height={281} alt='bubbles project' />
					<div className='text-md flex flex-col justify-between pl-6'>
						<div>
							<h4 className='mb-6 text-center text-xl'>Sevens</h4>
							Classic card game Sevens made in pure javascript.
						</div>
						<div className='col-start-2 flex flex-col'>
							<Link href={'https://stjernstedt.com/Sevens/'} className='text-blue-700'>
								Play Sevens
							</Link>
							<Link href='https://github.com/stjernstedt/Sevens' className='text-blue-700'>
								Source
							</Link>
						</div>
					</div>
				</Paper>
				<Paper className='grid w-fit grid-cols-1 content-between lg:grid-cols-2'>
					<div className='text-md flex flex-col justify-between pr-6'>
						<div>
							<h4 className='mb-6 text-center text-xl'>Asteroid Hunt</h4>
							Made with Unity
							<br />
							Gather points by killing asteroids and try to survive as long as you can as the difficulty increases! Asteroids sometimes drops upgrades to make
							things easier..
						</div>
						<div className='col-end-1 flex flex-col'>
							<Link href='https://play.google.com/store/apps/details?id=net.stjernstedt.asteroidhunt' className='text-blue-700'>
								Google Play Store
							</Link>
							<Link href='https://github.com/stjernstedt/Space-Shooter' className='text-blue-700'>
								Source
							</Link>
						</div>
					</div>
					<Image src={'/asteroidhunt.jpg'} width={500} height={281} alt='bubbles project' />
				</Paper>
				<Paper className='grid w-fit grid-cols-1 lg:grid-cols-2'>
					<Image src={'/bubbles.jpg'} width={500} height={281} alt='bubbles project' />
					<div className='text-md flex flex-col justify-between pl-6'>
						<div>
							<h4 className='mb-6 text-center text-xl'>Bath Bubble Pop</h4>
							Made with Unity
							<br />
							Pop as many bubbles as possible within the timelimit. Add more time by popping plus bubbles, but watch out for bombs!
						</div>
						<div className='col-start-2 flex flex-col'>
							<Link href='https://play.google.com/store/apps/details?id=net.stjernstedt.bubbles' className='text-blue-700'>
								Google Play Store
							</Link>
							<Link href='https://github.com/stjernstedt/Bath-Bubble-Pop' className='text-blue-700'>
								Source
							</Link>
						</div>
					</div>
				</Paper>
				<Paper className='grid w-fit grid-cols-1 lg:grid-cols-2'>
					<div className='text-md mb-6 flex flex-col justify-between pr-6'>
						<div className='mb-6'>
							<h4 className='mb-6 text-center text-xl'>Municipalities and authorities’ DNSSEC and IPv6 status</h4>
							As part of my thesis I worked on an already existing system owned by{' '}
							<Link href='https://www.interlan.se/' className='text-blue-700'>
								Interlan{' '}
							</Link>
							that checks the DNSSEC and IPv6 status of the municipalities of Sweden. I consolidated the code, added a MySQL database for storing data, and
							extended the functions of the site itself.
							<br />
							Tools used for the project includes javascript, jQuery, bash, MySQL, and PHP.
						</div>
						<div className='col-start-2 flex flex-col'>
							<Link href='https://kommunermeddnssec.se/' className='text-blue-700'>
								https://kommunermeddnssec.se/
							</Link>
							<Link href='https://github.com/stjernstedt/Interlan' className='text-blue-700'>
								Source
							</Link>
						</div>
					</div>
					<Image src={'/dnssec.jpg'} width={500} height={281} alt='dnssec project' className='my-auto' />
				</Paper>
			</div>
		</section>
	);
};

export default Projects;
