import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-4xl font-semibold text-blue-300">
				Hello World!
			</p>
		</div>
	);
};

export default Home;
