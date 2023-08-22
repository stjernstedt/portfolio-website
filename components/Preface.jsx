import Image from 'next/image';
import Paper from './Paper';

const Preface = () => {
	return (
		<section id='home' className='mx-auto min-h-screen pt-12 lg:pt-36'>
			<div className='grid grid-cols-1 lg:grid-cols-3 lg:justify-between lg:space-x-20'>
				<Image width={300} height={300} src='/profile-square.jpg' alt='mugshot' className='scale-50 self-center rounded-full shadow-2xl lg:scale-100' />
				<div className='xl:col-span-2'>
					<Paper>
						<h1 className='pb-10 text-xl text-dark lg:text-6xl'>Random Developer</h1>
						<div className='lg:text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor neque, pharetra at enim sit amet, condimentum suscipit eros. Proin
							elementum efficitur massa. Fusce tristique mollis sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis diam,
							efficitur in lectus sed, gravida maximus massa. Proin vitae metus vitae justo vehicula dapibus a elementum metus. Morbi nisi ex, auctor sit amet
							fermentum nec, semper nec nisl. Donec tincidunt, elit malesuada eleifend efficitur, mauris ante suscipit ante, quis consectetur mauris elit non
							metus. Sed consequat, orci non mattis convallis, lectus nulla finibus leo, vitae feugiat urna dui vel ligula. Suspendisse venenatis molestie ex ac
							volutpat.
						</div>
					</Paper>
				</div>
				<div className='mt-10  lg:col-span-2 lg:col-start-2 lg:w-1/2'>Tech Stack: </div>
				<span className='mt-4 flex scale-50 space-x-4 lg:col-span-2 lg:col-start-2 lg:w-1/2 lg:scale-100'>
					<Image src={'/html5-original.svg'} width={50} height={50} alt='html icon' />
					<Image src={'/css3-original.svg'} width={50} height={50} alt='css icon' />
					<Image src={'/javascript-original.svg'} width={50} height={50} alt='javascript icon' />
					<Image src={'/react-original.svg'} width={50} height={50} alt='react icon' />
					<Image src={'/nextjs-original.svg'} width={50} height={50} alt='nextjs icon' />
					<Image src={'/tailwindcss-plain.svg'} width={50} height={50} alt='tailwindcss icon' />
					<Image src={'/materialui-original.svg'} width={50} height={50} alt='materialui icon' />
					<Image src={'/mongodb-plain.svg'} width={50} height={50} alt='mongodb icon' />
				</span>
			</div>
		</section>
	);
};

export default Preface;
