import { Link } from 'react-router-dom'
import data from '../data/data.json'

export default function Cards() {
  return (
    <div className=" mx-auto max-w-4xl p-4 sm:py-8">
      <h1 className="mx-auto mb-4 max-w-4xl text-center text-2xl sm:text-left">
        Items fetched from JSON
      </h1>
      <section className="cards grid gap-4 sm:grid-cols-2 sm:gap-8">
        {data.map((item) => {
          return (
            <Link to={'/homecards/' + item.id}>
              <div className="flex justify-center" key={item.id}>
                <div className="flex flex-col rounded-lg border bg-white shadow-lg hover:shadow-xl md:max-w-xl md:flex-row">
                  <img
                    className=" h-80 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="flex flex-col justify-start p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">
                      {item.title}
                    </h5>
                    <p className="mb-4 text-base text-gray-700">
                      {item.description.substring(0, 100)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
