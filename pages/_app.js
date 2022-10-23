import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div
			style={{
				fontFamily: "Inter",
			}}
		>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
