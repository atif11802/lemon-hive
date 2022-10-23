import Image from "next/image";
import bg from "../public/Background elements.png";
import Layout from "./Layout";
import Navbar from "./Navbar";
import image1 from "../public/Rectangle 6.png";
import image2 from "../public/Rectangle 1.png";

const Hero = () => {
	const styling = {
		backgroundImage: `url('/Background elements.png')`,
		width: "100%",
		height: "100vh",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	return (
		<div style={styling}>
			<Navbar />
			<Layout title='LemonHive' content='home page of a test website'>
				<div className='static mt-4  md:mt-0'>
					<h1 className='text-4xl md:text-8xl font-bold text-center '>React</h1>
					<h1 className='text-4xl md:text-8xl font-bold text-center absolute left-[46px]  md:left-[370px]'>
						Conference
					</h1>
				</div>

				<div className='relative mt-9'>
					<div className='flex justify-around absolute top-24 '>
						<div className='basis-1/3 relative'>
							<div className='hidden md:block  absolute left-36'>
								<Image src={image1} width={230} height={320} />
							</div>
						</div>
						<div className='md:basis-1/3'>
							<p className='text-xl'>
								Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
								id fermentum..id fermentum.In quis diam turpis quam id
								fermentum.
							</p>
							<button className='bg-[#FFC93E] px-20 py-4 mt-5  rounded-full text-xl'>
								Buy Tickets
							</button>
						</div>
						<div className='basis-1/3 relative'>
							<div className='hidden md:block absolute left-24 -top-24'>
								<Image src={image2} width={330} height={420} />
							</div>
						</div>
					</div>
				</div>
				<div className='md:hidden flex flex-col top-[410px] relative'>
					<Image src={image2} width={230} height={320} />

					<Image src={image1} width={50} height={250} />
				</div>
			</Layout>
		</div>
	);
};

export default Hero;
