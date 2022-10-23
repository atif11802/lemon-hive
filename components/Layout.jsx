import Head from "next/head";

const Layout = ({ title, content, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content} />
				{/* <link rel='icon' href='/favicon.ico' /> */}

				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/React 1.png'
				></link>
			</Head>
			{/*  */}
			<div className='container mx-auto px-4 pt-7'>{children}</div>
		</div>
	);
};

export default Layout;
