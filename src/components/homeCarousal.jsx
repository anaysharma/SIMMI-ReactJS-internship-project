import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'

export default function Carousal() {
  return (
    <>
      <h1 className="mx-auto mb-4 max-w-4xl px-4 pt-20 text-center text-2xl sm:text-left">
        Banner image slider
      </h1>
      <section className="mx-auto flex max-w-4xl px-4">
        <div
          id="carouselExampleCaptions"
          className="slide carousel relative rounded-lg shadow-lg"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
            <div className="active carousel-item relative float-left w-full">
              <img src={img1} className="block w-full rounded-lg" alt="..." />
              <div className="carousel-caption absolute hidden text-center md:block">
                <h5 className="text-xl">First image</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img src={img2} className="block w-full rounded-lg" alt="..." />
              <div className="carousel-caption absolute hidden text-center md:block">
                <h5 className="text-xl">Second image</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img src={img3} className="block w-full rounded-lg" alt="..." />
              <div className="carousel-caption absolute hidden text-center md:block">
                <h5 className="text-xl">Third image</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img src={img4} className="block w-full rounded-lg" alt="..." />
              <div className="carousel-caption absolute hidden text-center md:block">
                <h5 className="text-xl">Fourth image</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  )
}
