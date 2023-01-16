# Introduction:
This Application is a simple ReactJS app developed to demonstrate the understanding of ReactJS and core concepts like:

- component lifecycle methods.
- React browser routes.

# Getting started:
#### prerequisite:
- git
- nodejs

To develop or run this application on your local machine follow these steps:

#### 1. clone project:
```bash
	git clone https://github.com/anaysharma/SIMMI-ReactJS-internship-project.git
```
#### 2. navigate to project directory:
```bash
	cd SIMMI-ReactJS-internship-project/
```
#### 3. install project dependencies:
```bash
	npm install
```
#### 4. run project in dev mode:
```bash
	npm run dev
```

# Components:
This app contains three main web pages: Home, About and Profile.

#### Home page:
home page consists of two main elements: Banner Image scrollable carousal, and a group of small cards generated using data fetched from a json file.

#### About page:
about page contains documentation if this app itself.

#### Profile page:
profile page contains the developer's contact information, Name, Email, Contact number, Github account and Linkedin Accounts.

# Deployment:
To deploy the app to a hosting server, follow these steps:
#### build project:
```bash
	npm run build
```
then upload ```dist/``` directory to your favourite server.

This project is currenctly hosted on netlify, to deploy on netlify, you can either drag and drop the dist folder on the Netlify deployment page.
or follow these steps:
#### Using Netlify CLI
- Install the Netlify CLI.
- Create a new site using ntl init.
- Deploy using ntl deploy.

```bash
	# Install the Netlify CLI
	$ npm install -g netlify-cli

	# Create a new site in Netlify
	$ ntl init

	# Deploy to a unique preview URL
	$ ntl deploy
```

The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the ```prod``` flag:
```bash
	# Deploy the site into production
	$ ntl deploy --prod
```

#### Netlify with Git
- Push your code to a git repository (GitHub, GitLab, BitBucket, Azure DevOps).
- Import the project to Netlify.
- Choose the branch, output directory, and set up environment variables if applicable.
- Click on Deploy.
- Your Vite app is deployed!

After your project has been imported and deployed, all subsequent pushes to branches other than the production branch along with pull requests will generate Preview Deployments, and all changes made to the Production Branch (commonly “main”) will result in a Production Deployment.

# Troubleshooting:
to troubleshoot errors in running the app or deployement of the app:
- make sure you have latest Node.js installed on your machine.
- make sure all npm dependencies are installed with appropriate version.
- make sure to check you are in correct directory.
- make sure to build app in development mode and production mode.
- in severe case, clone the project again.

# Conclusion:
development of the project had let me upskill my ability to

- Clean, meaningful, flexible code writing. 
- fetch and display data in a React application.
- Tailwind CSS to style a React application.
- use lifecycle methods.

# Directory structure
```
SIMMI-ReactJS-internship-project/
├─ README.md ...................... Project repository readme file.
├─ index.html ..................... Browser entry point HTML file.
├─ jsconfig.json .................. config file for javascript linter.
├─ package-lock.json .............. npm package lock file.
├─ package.json ................... npm package config file.
├─ postcss.config.cjs ............. vscode post css linter config file.
├─ tailwind.config.cjs ............ tailwind compiler configuration file.
├─ vite.config.js ................. vite development tool config file.
│
└─ src/ ........................... project source directory.
   ├─ App.jsx ..................... JSX file for App component.
   ├─ index.css ................... Project's main style sheet.
   ├─ main.jsx .................... ReactJS entry point.
   │
   ├─ assets/ ..................... project media directory.
   │  ├─ img1.png ................. png file
   │  ├─ img2.jpg ................. jpg file
   │  └─ img3.png ................. png file
   │
   ├─ components/ ................. project's component directory.
   │  ├─ cardPage.jsx ............. card full description web page.
   │  ├─ jsonItemCards.jsx ........ home page grid card component.
   │  └─ homeCarousal.jsx ......... home page banner image component.
   │
   ├─ data/ ....................... project's json data directory.
   │  ├─ data.json ................ JSON file containing mock data.
   │  └─ documentation.md ......... project documentation rendered on about page.
   │
   └─ pages/ ...................... project's web page directory.
      ├─ about.jsx ................ About web page.
      ├─ home.jsx ................. Home web page.
      └─ profile.jsx .............. Profile web page.
```


# Technical toolset used:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [NPM](https://www.npmjs.com/)
- [Netlify](https://app.netlify.com/)
- HTML
- CSS
- Javascript