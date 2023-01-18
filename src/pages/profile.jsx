import pfp from '../assets/profile.svg'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

function Profile() {
  return (
    <>
      <main className="mx-auto max-w-4xl p-4 pt-20">
        <div className="flex flex-col items-center gap-8 rounded-lg border p-8 shadow-lg sm:flex-row">
          <img className="h-40 rounded-full" src={pfp} alt="..." />
          <div className="flex flex-col">
            <h1 className="text-center text-2xl sm:mb-4 sm:text-left sm:text-4xl ">
              Anay Sharma
            </h1>
            <p className="mt-2 text-center text-slate-600 sm:text-left md:text-lg">
              A passionate student eager to learn and develop better UI and UX
              for the world using Modern Frontend technologies.
            </p>
          </div>
        </div>
        <section className="mt-4 rounded-lg border p-8 shadow-lg">
          <h2 className="mb-8 text-2xl">Contact information:</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <img className="w-12 opacity-70" src={phone} alt="phone icon" />
              <div className="grid">
                <span className="text-sm text-slate-600">Phone number:</span>
                <a className="text-blue-800 sm:text-lg" href="tel:8791657100">
                  +91-8791657100
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <img className="w-12 opacity-70" src={email} alt="email icon" />
              <div className="grid">
                <span className="text-sm text-slate-600">Email:</span>
                <a
                  className="text-blue-800 sm:text-lg"
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
                <span className="text-sm text-slate-600">Linkedin:</span>
                <a
                  className="text-blue-800 sm:text-lg"
                  href="https://www.linkedin.com/in/anay-sharma-b3785321a/"
                >
                  @anay-sharma-b3785321a
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <img className="w-12 opacity-70" src={github} alt="github icon" />
              <div className="grid">
                <span className="text-sm text-slate-600">Github:</span>
                <a
                  className="text-blue-800 sm:text-lg"
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
  )
}

export default Profile
