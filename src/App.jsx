import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/aboutpage';
import Home from './pages/homepage';
import Profile from './pages/profilepage';
import GenerateCardPage from './components/cardPage';

function App() {
	return (
		<>
			<nav className="bg-white px-2 sm:px-4 py-2.5">
				<ul className="container flex flex-wrap items-center justify-between mx-auto gap-2 max-w-6xl">
					<li className="hover:text-blue-700 py-4">
						<Link className="py-4 px-8" to="/">
							HOME
						</Link>
					</li>
					<li className="mr-auto hover:text-blue-700 py-4">
						<Link className="py-4 px-8" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="hover:text-blue-700 py-4">
						<Link className="py-4 px-8" to="/profile">
							PROFILE
						</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/homecards/:id" element={<GenerateCardPage />} />
			</Routes>
		</>
	);
}

export default App;
