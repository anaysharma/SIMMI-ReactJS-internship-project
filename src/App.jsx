import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';
import GenerateCardPage from './components/cardPage';

function App() {
	return (
		<>
			<nav className="bg-white px-2 sm:px-4 py-2.5">
				<ul className="container flex flex-wrap sm:gap-8 items-center justify-between mx-auto max-w-4xl">
					<li className="hover:text-blue-700 py-4">
						<Link className="p-4" to="/">
							HOME
						</Link>
					</li>
					<li className="sm:mr-auto hover:text-blue-700 py-4">
						<Link className="p-4" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="hover:text-blue-700 py-4">
						<Link className="p-4" to="/profile">
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
