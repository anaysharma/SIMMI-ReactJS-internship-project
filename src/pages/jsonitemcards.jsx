import data from '../data/data.json';

export default function Cards() {
	return (
		<section className="cards grid grid-cols-2 grid-rows-3 gap-4 max-w-6xl mx-auto p-8">
			{data.map((item) => {
				return (
					<a href={'/homecards/' + item.id}>
						<div className="flex justify-center" key={item.id}>
							<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
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
					</a>
				);
			})}
		</section>
	);
}
