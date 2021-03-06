import React,{useState} from 'react';
import FormInput from "../formInput/formInput";
import './content.scss';
import babel from '../../assets/img/babel.png';
import EsLint from '../../assets/img/EsLint.png';
import npm from '../../assets/img/npm.png';
import webpack from '../../assets/img/webpack.png';

export const Guide = (props) => {

  const[scroll,setScroll]=useState('backToTop')

  function scrollShow (){
     if (window.pageYOffset >100){
       setScroll('backToTop active')
     } else{
       setScroll('backToTop')
     }
  }

  return (
    <div className="container">
    <div className="workshop-content" >
      <h1 id="sectionIntro">What we will learn</h1>
      <section  className={`workshop-chapter ${props.active}` } id="whatIsReact">
        <section className="h3content">
          <h3>The workshop</h3>
          <p>We will build some key elements that you can implement when creating your own portfolio. We will create a nav bar implementing react-router-dom and the useState.<br/> Next we will use the Github Api to fetch our repositories and create cards with it. to keep it dynamic for all we will have an input field where we can input any user name from github. With this data we will be able to render the cards accordingly with the user name.</p>
          <br/>
          <p>Type in any Github user name to see the result of the workshop:</p>
        <FormInput/>
        </section>
        <h2>what is react?</h2>
        <p>
          React is an open source library that revolutionized the way we code in JS. To fully understand its concept, we must take some key words into consideration.
        </p>
        <section className="h3content">
        <h3>A library, not a framework</h3>
        <p>When I started coding, I found it very hard to understand what these two words meant and to be honest, the best way to really understand is by actually using both of them.</p>
        </section>

        <section className="h3content">
        <h3> The burger analogy 🍔</h3>
        <p>Surfing the internet I found a very interesting analogy that helped me understand. Let's take McDonald's and Burger King as the burger makers. Both of them have a specific structure in which they produce their burgers. Because this structure is different in both enterprises, the burgers are significantly different. However they both depend on core elements to produce their burgers like cheese, meat and lettuce.<br/> Translating this to code we could say that using a framework means that we are bound to work inside a specific structure composed by many predefined elements, modules, libraries, etc. <br/>When using a library however, we are able to freely compose our working environment ans scale it to fit our needs. Both have their own advantages and disadvantages, depending on what we actually need. </p>
        </section>
        <section className="h3content">
        <h3>JSX</h3>
        <p>JSX is the language of choice when we create react apps. It combines ES6 JS and HTML markup in the same file. One advantage of react versus other frameworks/libraries is that it just uses Js syntax, no special syntax like in Angular and svelte, which makes it way easier to learn.</p>
        </section>
      </section>
      <section className="workshop-chapter" id="reactivity">
        <h2>what is reactivity</h2>
        <p></p>
        <section className="h3content">
        <h3>Is react reactive?</h3>
        <p>I highly encourage you to search up this term to help you understand reactivity. The main definition is Javascript at its core is not reactive, but it has reactive API's (like de  event listener for example). Spread sheets are.</p>
        </section>
        </section>
      <section className="workshop-chapter"  id="getStarted">
        <h2>how to get started</h2>
        <p>There are many many ways to set up your working environment when using react. I encourage you to try out the different methods and also to start from scratch to understand what each file and dependency does. To make things easier for this workshop we will be using one of the most popular package runners for creating a react environment: </p>
        <pre>
        <code>npx create-react-app</code>
        </pre>
        <p>
          For this project we will need to install some npm packages. I will explain what they do during the workshop  {'\u2728'}
        </p>

        <pre>
        <code>npm i gh-pages --save-dev</code><br/>
        <code>npm i react-icons</code><br/>
        <code>npm i react-router-dom</code>
        </pre>
      </section>

      <section className="workshop-chapter" id="folderStructureTour">
        <h2>A tour through the folder structure</h2>
        <p>The npx create-react-app comes with a lot of handy preinstalled dependencies and packages that will help us transpile the code, lint the code and so on. During the workshop we will go over some key features inside this package:</p>
        <section className="h3content">
          <h3 className={"h3-noline"}><img style={{width:"10vw"}} src={babel} alt=""/> Babel </h3>
          <h3 className={"h3-noline"}><img style={{width:"5vw"}} src={EsLint} alt=""/> EsLint</h3>
          <h3 className={"h3-noline"}><img style={{width:"10vw"}} src={npm} alt=""/> Node modules</h3>
          <h3 className={"h3-noline"}><img style={{width:"8vw"}} src={webpack} alt=""/> Webpack</h3>
        </section>
      </section>

      <section className="workshop-chapter" id="functionalComponents">
      <h2>functional components</h2>

        <p>For this project we will use functional components. Thanks to the hooks implementation, we are able to get rid of the tedious class components and use functional components. If this is your first time using react and hearing about class components, just know that functional components are the future as the react team is working towards a react without classes</p>
        <br/>
        <p>You are probably wondering why it matters to use functional components over class components. here is a few of  the reasons</p>
        <section className='bullets'>
        <h3>Easier to read and understand by others</h3>
        <h3>Easier to test</h3>
        <h3>They have the potential to perform better</h3>
        <h3>Easier to debug</h3>
        <h3>Easier to reuse</h3>
        </section>
        <section className="h3content">
          <h3>Functional components</h3>
          <pre>
            <code>
              function Hello(props) &#123;
              return <div>Hello &#123;props.name&#125;</div>
              &#125;

            </code>
          </pre>
          <h3>functional component in ES6</h3>
          <pre>
            <code>
            const Hello = (&#123;name&#125;) => <div>Hello &#123;name&#125;</div>
            </code>
          </pre>

          <h3>Class  component</h3>
          <p>This snippet is a contradiction to the most basic rule. If you ever have a class component with only a render method, you should always make it a functional component.</p>
          <pre>
            <code>
                class Hello extends Component &#125;

                    render() &#123;
                      return <div>Hello &#123;this.props.names&#125;</div>
                      &#125;
              &#125;
              </code>
           </pre>

        </section>
      </section>

      <section className="workshop-chapter" id="hooks">
      <h2>hooks</h2>
      <p>
        To get started with hooks, we we will use some of the most commonly used ones like useEffect() and useState().
        We will also use useParams and useHistory to transfer data from one route to the other.
      </p>
      <section className="h3content">
      <h3>useState hook</h3>
        <p>This  hook is used to maintain and change the state of a certain variable</p>
        <pre>
          <code>
            const [ house, setHouse] = useState('big house');
            <p></p>
            setHouse('small house');
          </code>
        </pre>

         </section>
      <section className="h3content">
      <h3>useEffect hook</h3>
        <p>
        The core concept of this hook is that whenever our app component renders or re-renders, the useEffect hook will be invoked.

        The useEffect takes two parameters: an anonymous function and a dependency array.
        </p>
        <pre>
          <code>
            useEffect(()=>&#123;&#125;,[])
            </code>
        </pre>
        <p>
         In addition, we can also return a callback function to unmount and clean our effect. To learn more about this you can check what memory leaks are and how to clean after your action in code.
         </p>
         </section>
      </section>
      <section className="workshop-chapter" id="productionBuild">
      <h2>Create a build folder for production</h2>
      <p>For this specific workshop we will be deploying our app on github pages. First things first we need create a repo on github. Then we get into the terminal, we cd into  the project folder we want to deploy and we initialize the git repo. check out this link for more info on<span><a href="https://scotch.io/tutorials/how-to-push-an-existing-project-to-github"  target="_blank" rel="noopener noreferrer"> how to initialize a repository.</a></span></p>
      <p>Once you have your repo on github, install this package if you haven't already:</p>
      <pre>
        <code>npm i gh-pages --save-dev</code>
      </pre>

      <p>This is where  you might get a bit confused if it is your first time working with package.json. In there, we need  to add a few lines to be able to run the scripts that will build our production folder and host it to the homepage of our choosing</p>

      <p>On top of: </p>
        <pre>
        <code>
        "name": "my app name"
        </code>
        </pre>
      <p>Add this line:</p>

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
        <p>Once  you run "npm  run deploy" you should see a new build  folder in your folder structure.If you see a 404  error, You  might want to wait  10 to 20 minutes until you see your deployment active.</p>
        <br/>
        <p>And there you go, now you have created your very first app using React! Feel free to add more cool features to your project to make it stand out more. I hope to see many cool React apps from you. 🔥</p>
      </section>
      <a href="#whatIsReact" onScroll={scrollShow} className={scroll}>back to top</a>
    </div>
    </div>
  )
};


export default Guide
