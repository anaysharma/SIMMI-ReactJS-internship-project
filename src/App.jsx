import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/aboutpage';
import Home from './pages/homepage';
import Profile from './pages/profilepage';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/profile">PROFILE</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
