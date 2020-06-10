import React from 'react'
import './content.scss'

export const Guide = () => {
  return (
    <div className="workshop-content">
      <h1>What we will learn</h1>
      <section className="workshop-chapter">
        <h2>what is react?</h2>
        <p>
          React is an open source library that revolutionazied the way we code JS. To fully understand its concept, we must take some key words into consideration.
        </p>
        <h2>A library, not a framework</h2>
        <p>When i started coding, I found it very hard to understand what these two words meant and to be honest, the best way to really understand is by actually using both of them.</p>
        <h3> The burger analogy</h3>
        <p>Surfing the internet I found a very interesting analogy that helped me understand. Let's take  McDonald's and Burger King as the burger makers. Both of them have a specific structure in which they produce their burgers. Because this structure is different in both enterprises, the burgers are significantly different. However they both depend on core elements to produce their burgers like cheese, meat and lettuce.<br/> Translating this to code this we could say that using a framework means that we are bound to work inside a specific structure composed by many predefined elements, modules, libraries, etc. <br/>  when using a library however, we are able to freely compose our working environment ans scale it to fit our needs. Both have their own advantages and disadvantages, depending on what we actually need. </p>
      </section>
        <h1>what is reactivity</h1>
        <section className="workshop-chapter">
        <h1>how to get started</h1>
        <p>There are many many ways to set up your working environment when using react thanks to it not being a framework, it is highly customizable and scalable.  encourage you to try out the different methods and also to start from scratch to understand what each file and dependency does. To make things easier for this workshop we will be using one of the most popular package runners for createing a react environment: </p>
        <pre>
        <code>npx create-react-app</code>
        </pre>
      </section>

      <section className="workshop-chapter">
        <h1>a tour through the folder structure</h1>
        <p><code>npx create-react-app</code> comes with a lot of handy preinstalled dependecies and packages that will help us  transpile the code, lint  the code and so on, during the workshop we will go over some key features inside this package.</p>
        
       
      </section>
      <section className="workshop-chapter">
      <h1>functional components</h1>
      </section>
      <section className="workshop-chapter">
      <h1>hooks</h1>
      </section>
      <section className="workshop-chapter">
      <h1>Create a build folder for production</h1>
      <p>For this specific workshop we will be deploying our app on github pages. First things first we need create a repo on github. Then we get into the terminal, we cd into  the project folder we want to deploy and we initialize the git repo. check out this link for more info on   <span><a href="https://scotch.io/tutorials/how-to-push-an-existing-project-to-github"  target="_blank" rel="noopener noreferrer">how  to intialize a  repository. </a></span></p>
      <p>Once you have your repo on github, install this package:</p>
      <pre>
        <code>npm install gh-pages --save-dev</code>
      </pre>
      </section>

      <p>This is where  you might get a bit confused if it is your first time working with package.json. In there, we need  to add a few lines to be able to run the scripts that will build our production folder and host it to the homepage of our choosing</p>

      <p>On top of 
        <pre>
        <code>
        "name": "my app name"
        </code>
        </pre>
      
      </p>
      
      <p>add this line</p> 

      <pre>
        <code>
          "homepage": "http://yourghlink.github.io/my-app-name"
          </code>
      </pre>

      <p>Inside the existing scripts object, add these two lines. These will build the production folder</p>
      <pre>
        <code>
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        </code>
      
      </pre>
      
    </div>
  )
};


export default Guide