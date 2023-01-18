import { useParams } from 'react-router-dom'
import data from '../data/data.json'

export default function GenerateCardPage() {
  const params = useParams()
  const { id } = params
  let card
  for (let i = 0; i < data.length; i++) if (data[i].id == id) card = data[i]

  return (
    <main className="mx-auto max-w-4xl px-4 pt-20">
      <h1 className="mb-8 text-2xl font-bold">{`${id}. ${card.title}`}</h1>
      <figure className="float-left mb-2 w-full md:mr-6 md:w-2/4">
        <img src={card.src} alt={card.alt} className="w-full rounded-lg" />
        <figcaption className="text-center text-sm">
          {'fig: 1 ' + card.alt}
        </figcaption>
      </figure>
      <p className="text-justify">
        <span className="float-left mr-4 mt-1 text-4xl">
          {card.description[0]}
        </span>
        {card.description.substring(1, card.description.length)}
      </p>
    </main>
  )
}
