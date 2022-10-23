import Head from "next/head";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ data }) {
	return (
		<div>
			<Hero />
			<Schedule data={data} />
		</div>
	);
}

export async function getServerSideProps() {
	const { data } = await client.query({
		query: gql`
			query {
				conferences {
					id
					name
					schedules {
						day

						description
						location {
							address
							name
						}
						intervals {
							end
							begin
							title
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			data: data,
		},
	};
}
