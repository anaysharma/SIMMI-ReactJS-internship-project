import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';

export default function Carousal() {
	return (
		<>
			<h1 className="text-2xl max-w-4xl px-4 mx-auto text-center sm:text-left mb-4 pt-24 sm:pt-20">
				Banner image slider
			</h1>
			<section className="max-w-4xl px-4 flex mx-auto">
				<div
					id="carouselExampleCaptions"
					className="carousel slide relative shadow-lg rounded-lg"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
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
						<div className="carousel-item active relative float-left w-full">
							<img src={img1} className="block w-full rounded-lg" alt="..." />
							<div className="carousel-caption hidden md:block absolute text-center">
								<h5 className="text-xl">First image</h5>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={img2} className="block w-full rounded-lg" alt="..." />
							<div className="carousel-caption hidden md:block absolute text-center">
								<h5 className="text-xl">Second image</h5>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={img3} className="block w-full rounded-lg" alt="..." />
							<div className="carousel-caption hidden md:block absolute text-center">
								<h5 className="text-xl">Third image</h5>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={img4} className="block w-full rounded-lg" alt="..." />
							<div className="carousel-caption hidden md:block absolute text-center">
								<h5 className="text-xl">Fourth image</h5>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
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
						className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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
	);
}
