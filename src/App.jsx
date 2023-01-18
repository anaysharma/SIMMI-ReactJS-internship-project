import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'
import GenerateCardPage from './components/cardPage'

function App() {
  return (
    <>
      <nav className="fixed z-10 w-full bg-white px-2 shadow-md sm:px-4 sm:py-2.5 sm:shadow-none">
        <ul className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between sm:gap-8">
          <li className="rounded-lg py-4 text-lg hover:text-blue-700 sm:bg-slate-100 lg:bg-white">
            <Link className="p-4" to="/">
              HOME
            </Link>
          </li>
          <li className="rounded-lg py-4 text-lg hover:text-blue-700 sm:mr-auto sm:bg-slate-100 lg:bg-white">
            <Link className="p-4" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="rounded-lg py-4 text-lg hover:text-blue-700 sm:bg-slate-100 lg:bg-white">
            <Link className="p-4" to="/profile">
              PROFILE
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homecards/:id" element={<GenerateCardPage />} />
      </Routes>
    </>
  )
}

export default App
