import Link from "next/link";
import React from "react";

const Schedule = ({ data }) => {
	// console.log(data.conferences[0].schedules[0].intervals);

	return (
		<div className='container mx-auto mt-[400px] md:mt-0 md:px-28 md:pt-7'>
			<h1 className='text-3xl font-bold '>Event Schedule</h1>
			<p>
				Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
				fermentum.
			</p>

			<div className='mt-4'>
				<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400'>
							<tr className='border-x-4'>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center '></th>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center'>
									Tue
								</th>
								<th className='px-16 py-8 text-xs text-gray-500  border-x-2 text-center'>
									Wed
								</th>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center'>
									Thurs
								</th>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center'>
									Fri
								</th>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center'>
									Sat
								</th>
								<th className='px-16 py-8 text-xs text-gray-500 border-x-2 text-center'>
									Sun
								</th>
							</tr>
						</thead>
						<tbody>
							{data.conferences.slice(0, 5).map((conference, i) => {
								return conference.schedules.map((schedule, i) => {
									return schedule.intervals.slice(1, 2).map((interval, i) => {
										return (
											<Link href={`/conference/${conference.id}`} key={i}>
												<tr className='whitespace-nowrap border-x-2  '>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{interval.begin}
													</td>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{" "}
													</td>

													<td className='px-6 py-6 text-sm  border-x-2 border-y-2 '>
														<p className='font-bold text-black text-center'>
															{schedule.day}
														</p>
														<div
															className=' px-6 py-4 mt-2 bg-yellow-100 first-letter:
													border border-yellow-600 rounded-xl text-[#725114] cursor-pointer'
														>
															<div className='font-bold'>
																{schedule.description}
															</div>
															<div className=''>{conference.name}</div>
														</div>
													</td>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{" "}
													</td>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{" "}
													</td>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{" "}
													</td>
													<td className='px-8 py-6 text-sm border-x-2 border-y-2'>
														{" "}
													</td>
												</tr>
											</Link>
										);
									});
								});
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
