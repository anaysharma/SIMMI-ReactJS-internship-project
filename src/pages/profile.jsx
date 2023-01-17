import pfp from '../assets/profile.svg';
import email from '../assets/email.png';
import phone from '../assets/phone.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Profile() {
	return (
		<>
			<main className="max-w-4xl mx-auto p-4 pt-20">
				<div className="flex-col sm:flex-row shadow-lg rounded-lg flex p-8 gap-8 border items-center">
					<img className="h-40 rounded-full" src={pfp} alt="..." />
					<div className="flex flex-col">
						<h1 className="text-2xl text-center sm:text-left sm:text-4xl sm:mb-4 ">
							Anay Sharma
						</h1>
						<p className="mt-2 text-slate-600 md:text-lg text-center sm:text-left">
							A passionate student eager to learn and develop better UI and UX
							for the world using Modern Frontend technologies.
						</p>
					</div>
				</div>
				<section className="shadow-lg rounded-lg mt-4 border p-8">
					<h2 className="text-2xl mb-8">Contact information:</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="flex gap-4">
							<img className="w-12 opacity-70" src={phone} alt="phone icon" />
							<div className="grid">
								<span className="text-slate-600 text-sm">Phone number:</span>
								<a className="sm:text-lg text-blue-800" href="tel:8791657100">
									+91-8791657100
								</a>
							</div>
						</div>
						<div className="flex gap-4">
							<img className="w-12 opacity-70" src={email} alt="email icon" />
							<div className="grid">
								<span className="text-slate-600 text-sm">Email:</span>
								<a
									className="sm:text-lg text-blue-800"
									href="mailto:anaysharma8791@gmail.com"
								>
									anaysharma8791@gmail.com
								</a>
							</div>
						</div>
						<div className="flex gap-4">
							<img
								className="w-12 opacity-70"
								src={linkedin}
								alt="linkedin icon"
							/>
							<div className="grid">
								<span className="text-slate-600 text-sm">Linkedin:</span>
								<a
									className="sm:text-lg text-blue-800"
									href="https://www.linkedin.com/in/anay-sharma-b3785321a/"
								>
									@anay-sharma-b3785321a
								</a>
							</div>
						</div>
						<div className="flex gap-4">
							<img className="w-12 opacity-70" src={github} alt="github icon" />
							<div className="grid">
								<span className="text-slate-600 text-sm">Github:</span>
								<a
									className="sm:text-lg text-blue-800"
									href="https://github.com/anaysharma"
								>
									anaysharma
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Profile;
