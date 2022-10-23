import Navbar from "../../components/Navbar";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { useRef, useState } from "react";

const ConferenceDetails = ({ conference, data }) => {
	const [sideBar, setSideBar] = useState([
		"Organizer",
		"Speakers",
		"Location",
		"Schedule",
		"Sponsors",
	]);

	const dragItem = useRef(null);
	const dragOverItem = useRef(null);

	const handleSort = () => {
		//duplicate items
		let _setSideBar = [...sideBar];

		//remove and save the dragged item content
		const draggedItemContent = _setSideBar.splice(dragItem.current, 1)[0];

		//switch the position
		_setSideBar.splice(dragOverItem.current, 0, draggedItemContent);

		//reset the position ref
		dragItem.current = null;
		dragOverItem.current = null;

		//update the actual array
		setSideBar(_setSideBar);
	};

	console.log(data.conference);

	return (
		<div className=''>
			<Navbar />
			<div className='container mx-auto px-4 md:px-48 mt-10'>
				<h1 className='text-3xl font-bold'>{data.conference.name}</h1>
				<p className='text-sm text-gray-400 mt-4'>
					Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
					fermentum.
				</p>
				<div className='flex flex-col md:flex-row mt-11'>
					<div className='basis-1/4'>
						<ul>
							{sideBar.map((item, index) => (
								<li
									className='flex py-4 border border-gray-300 rounded-md mb-3 items-center  cursor-pointer hover:bg-yellow-600
										transition duration-300 ease-in
									'
									key={index}
									draggable
									onDragStart={(e) => (dragItem.current = index)}
									onDragEnter={(e) => (dragOverItem.current = index)}
									onDragEnd={handleSort}
									onDragOver={(e) => e.preventDefault()}
								>
									<div className='flex bg-white m-2 py-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={3}
											stroke='#FFBF00'
											className='w-6 h-6 '
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
											/>
										</svg>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={3}
											stroke='#FFBF00'
											className='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
											/>
										</svg>
									</div>{" "}
									<p className='font-bold ml-7 md:ml-4 '>{item}</p>
								</li>
							))}
						</ul>
					</div>
					<div className='basis-3/4 mt-4 md:ml-8'>
						{data.conference.partners.length > 0 ? (
							data.conference.partners.map((partner) => (
								<div className='flex mb-5'>
									<div className='basis-1/4'>
										<img src={partner.image.url} alt='' className='w-28 h-24' />
									</div>
									<div className='mt-5 basis-3/4 ml-4'>
										<div className='flex flex-col md:flex-row  justify-between '>
											<div className='font-bold '>{partner.name}</div>
											<div className='text-sm text-blue-600 md:text-gray-500'>
												<p>Company Name</p>
											</div>
										</div>
										<p className='mt-4 text-sm text-gray-600'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Et condimentum lectus in vel pellentesque arcu non odio.
											Ut dis eu dolor ac tellus vitae ut.
										</p>
									</div>
								</div>
							))
						) : (
							<div className='flex'>
								<div className='basis-1/4'>
									<img
										src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'
										alt=''
										className='w-36 h-24'
									/>
								</div>
								<div className='mt-5 basis-3/4 ml-4'>
									<div className='flex justify-between '>
										<div className='font-bold '>Josheph</div>
										<div className='text-gray-400 text-sm'>
											<p>Company Name</p>
										</div>
									</div>
									<p className='mt-4 text-sm text-gray-600'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
										condimentum lectus in vel pellentesque arcu non odio. Ut dis
										eu dolor ac tellus vitae ut.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConferenceDetails;

export async function getServerSideProps(context) {
	const { conference } = context.query;

	if (!conference) {
		return;
	}

	const { loading, error, data } = await client.query({
		query: gql`
			query GetConference($id: ID!) {
				conference(id: $id) {
					name

					id
					partners {
						name
						about
						image {
							url
						}
					}
				}
			}
		`,

		variables: { id: conference },
	});

	return { props: { conference, data } };
}
