import About from '@/components/About';
import Preface from '@/components/Preface';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<main className='mx-auto w-4/5 lg:w-2/5'>
			<Preface />
			<About />
			<Projects />
		</main>
	);
}
