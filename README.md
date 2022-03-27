
<h3>Responsive Tinylinks-newsbytes build with ReactJs and Tailwind CSS.</h3>


<h1>Demo Link.</h1>

<a href="https://shivampandeyy05.github.io/newsbytes-tinylinks/"  target="_blank">https://shivampandeyy05.github.io/newsbytes-tinylinks/</a><br /><br />

<h1>Home Page.</h1>

<a href="https://ibb.co/r2LvHMh"><img src="https://i.ibb.co/B27wBjJ/Screenshot-10.png" alt="Screenshot-10" border="0"></a>
<a href="https://ibb.co/YhdfZ3G"><img src=" alt="Screenshot-19" border="0"></a><br /><a target='_blank' href='https://nonprofitlight.com/ny/forest-hills/mercy-drive-inc'>mercy drive</a><br />
<h1>Link shortener System.</h1>

<a href="https://ibb.co/VSsRLhf"><img src="https://i.ibb.co/Xsq1Wdc/Screenshot-11.png" alt="Screenshot-11" border="0"></a><br /><a target='_blank' href='https://nonprofitlight.com/ny/new-york/christina-grimmie-foundation-tribeca-business-management'>tina grimmie</a><br />

<h1>About.</h1>

<a href="https://ibb.co/dPM9TMk"><img src="https://i.ibb.co/Cb8dc8V/Screenshot-12.png" alt="Screenshot-12" border="0"></a>

<h1>Footer.</h1>

<a href="https://ibb.co/PMdQ4Vk"><img src="https://i.ibb.co/VxsmDk6/Screenshot-13.png" alt="Screenshot-13" border="0"></a><br /><a target='_blank' href='https://nonprofitlight.com/mo/kansas-city/greater-kansas-city-community-foundation'></a><br />



<h1>Architecture and Reasoning</h1>


<li>The website is build with React.js and Tailwind CSS.
The main purpose of using React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS.</li>

<li>The Tailwind CSS framework uses a default mobile-first approach. The availability of utility classes makes it easier to build complex responsive layouts freely.</li>

<li>URL shortening services like bit.ly or TinyURL are very popular to generate shorter aliases for long URLs. This kind of web service where if a user gives a long URL then the service returns a short URL.</li>

<li>API USED SHRTCODE: https://shrtco.de/</li><br>

<li>LOGO DESIGN USING CANVA: https://www.canva.com/</li><br>


<h3>Deployment: Github Pages.</h3>
=======
<li>For the API REQUEST I HAVE USED Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.</li>

<li>FOR THE API, I HAVE USED SHRTCODE: https://shrtco.de/</li>

<li>FOR THE LOGO DESIGN, I HAVE USED CANVA: https://www.canva.com/

<h1>Deployment: Github Pages.</h1>
>>>>>>> 2043efb8665019f3a57c91df54c74d2c851f88a9

Step 1: Add homepage to package.json
The step below is important!

If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:

  "homepage": "https://myusername.github.io/my-app",
or for a GitHub user page:

  "homepage": "https://myusername.github.io",
or for a custom domain page:

  "homepage": "https://mywebsite.com",
Create React App uses the homepage field to determine the root URL in the built HTML file.

Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://myusername.github.io/my-app, run:

npm install --save gh-pages
Alternatively you may use yarn:

yarn add gh-pages
Add the following scripts in your package.json:

  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
The predeploy script will run automatically before deploy is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
Step 3: Deploy the site by running npm run deploy
Then run:

npm run deploy
Step 4: For a project page, ensure your project’s settings use gh-pages
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

gh-pages branch setting

