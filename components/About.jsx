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
						I am a beginner full stack developer and my strong points at the moment are JavaScript, React, and CSS but also have experience in Java and C# as
						well as the Unity game engine. I graduated from the university of Gävle(my home town) with a degree in computer science, and more specifically
						system development, where I learned among other things Java, HTML, CSS and how to structure a system from the ground up. Always being interested in
						learning new things and finding programming highly enjoyable I have since graduating kept on learning new languages and frameworks, with the most
						recent being React. I my spare time, aside from working on personal projects, I enjoy playing games and during winter I try to go snowboarding as
						much as I can.
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
