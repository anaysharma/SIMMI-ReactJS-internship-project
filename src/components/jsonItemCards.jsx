import { Link } from 'react-router-dom';
import data from '../data/data.json';

export default function Cards() {
	return (
		<div className=" sm:py-8 max-w-4xl mx-auto p-4">
			<h1 className="text-2xl max-w-4xl mx-auto text-center sm:text-left mb-4">
				Items fetched from JSON
			</h1>
			<section className="cards grid sm:grid-cols-2 gap-4 sm:gap-8">
				{data.map((item) => {
					return (
						<Link to={'/homecards/' + item.id}>
							<div className="flex justify-center" key={item.id}>
								<div className="border flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg hover:shadow-xl">
									<img
										className=" w-full h-80 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
										src={item.src}
										alt={item.alt}
									/>
									<div className="p-6 flex flex-col justify-start">
										<h5 className="text-gray-900 text-xl font-medium mb-2">
											{item.title}
										</h5>
										<p className="text-gray-700 text-base mb-4">
											{item.description.substring(0, 100)}
										</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
		</div>
	);
}
