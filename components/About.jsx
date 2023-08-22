import Paper from './Paper';

const About = () => {
	const skills = [
		{ skill: 'HTML' },
		{ skill: 'CSS' },
		{ skill: 'JavaScript' },
		{ skill: 'React' },
		{ skill: 'NextJS' },
		{ skill: 'Unity' },
		{ skill: 'C#' },
		{ skill: 'Tailwind CSS' },
		{ skill: 'Material UI' },
		{ skill: 'MongoDB' },
	];

	return (
		<section id='about' className='mx-auto mb-96 pt-24'>
			{/* <h1 className='mb-12 rounded-xl bg-slate-200 py-4 text-center text-6xl text-dark shadow-xl ring-1 ring-gray-500'>About Me</h1> */}
			<Paper className={'mb-12 text-center text-2xl text-dark lg:text-6xl'}>About Me</Paper>
			{/* <div className='flex justify-between space-x-20'> */}
			<div className='m-auto grid grid-cols-1 lg:grid-cols-2 lg:space-x-12'>
				<Paper className={'mb-6 lg:mb-0'}>
					<h1 className='pb-6 text-center text-xl text-dark lg:text-3xl'>Who am I</h1>
					<div className='lg:text-xl'>
						Vivamus eget erat pretium, consectetur velit non, mattis neque. Nulla et magna a enim lobortis accumsan a ac massa. Sed bibendum metus dignissim
						diam aliquam efficitur. Nunc tincidunt euismod tortor, sed consectetur ligula pharetra vitae. Maecenas semper venenatis lectus aliquam semper. Morbi
						dignissim lacus vitae tempor pretium. Cras efficitur in neque ac rutrum.
					</div>
				</Paper>
				<Paper className={'h-fit'}>
					<h1 className='pb-6 text-center text-2xl text-dark lg:text-3xl'>Skills</h1>
					<div className='flex flex-row flex-wrap justify-center'>
						{skills.map((item, index) => {
							return (
								<div key={index} className='m-1 rounded-md bg-light px-4 py-2 text-white'>
									{item.skill}
								</div>
							);
						})}
					</div>
				</Paper>
			</div>
		</section>
	);
};

export default About;
