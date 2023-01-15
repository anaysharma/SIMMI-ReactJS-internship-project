import { useParams } from 'react-router-dom';
import data from '../data/data.json';

export default function GenerateCardPage() {
	const params = useParams();
	const { id } = params;
	let card;
	for (let i = 0; i < data.length; i++) if (data[i].id == id) card = data[i];

	return (
		<main className="max-w-6xl mx-auto px-8">
			<h1 className="font-bold text-2xl mb-8">{`${id}. ${card.title}`}</h1>
			<figure className=" w-2/4 float-left mr-6 mb-2">
				<img src={card.src} alt={card.alt} className="rounded-lg" />
				<figcaption className="text-center text-sm">
					{'fig: ' + card.id + ' ' + card.alt}
				</figcaption>
			</figure>
			<p className="text-justify">
				<span className="text-4xl float-left mr-4 mt-1">
					{card.description[0]}
				</span>
				{card.description.substring(1, card.description.length)}
			</p>
		</main>
	);
}
