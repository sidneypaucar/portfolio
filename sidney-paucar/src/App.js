import { ExternalLink } from 'react-external-link'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>

      <div className='Home'>
      <section className='Home-Page'>
        <p className='Home-Text1'>Hi, my name is</p>
        <p className='Home-Text2'>Sidney Paucar.</p>
        <p className='Home-Text3'>I like to build things for fun.</p>
        <p className='Home-Text4'>I am a NYC-based Full-Stack Software Engineer specializing in building responsive websites and functional applications.</p>
        </section>
      </div>
      <div className='About'>
        <section className='About-Me'>
          <p className='About-Header'>About Me</p>
          <div className='Inner'>
            <div className='About-Div'>
              <p className='About-Description'>
                Hello! My name is Sidney Paucar and I am a Full Stack Software Developer with a passion for creating functional, aesthetically appealing, and user friendly sites with a demonstrated history of working with multiple languages. Experienced with Ruby on Rails, JavaScript, React and MongoDB and similar frameworks. I bring strong skills in problem solving, communication as well as an intrinsic passion towards UX/UI. 
              </p>
              <p className='info'>
                Tech Stack
              </p>
              <ul className='icons'>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://i.imgur.com/2wVg1FT.png" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg" />
                </li>
                <li>
                  <img className='icon'
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" />
                </li>
              </ul>
            </div>
            <div className='Profile-Resume'>
            <img className='Profile-Pic'
              src="https://i.imgur.com/EqAgM6G.jpg"
              alt="profile_pic"
            />
            <ExternalLink className= 'Resume' href='https://docs.google.com/document/d/16BmhJ_lvKY9Vs8er5zvZ1AMkUK2Q9peDLqh3WTvv2os/edit?usp=sharing'>
            Click here for Resume  
              </ExternalLink>
            </div>
          </div> 
        </section>
      </div>
      <div className='Project'>
        <section className='Projects'>
          <p
            className='Project-Header'>
            Projects
          </p>
          <br />
          <div className='Jasz-Inner'>
            <img className='Jasz-Image'
              src="https://i.imgur.com/4jjcGmQ.jpg"
              alt="jasz_image" />
            <div className='Jasz-Links'>
              <p className='Jasz-Description'>
              <strong>The Jasz Library</strong> is a full-stack web application where anyone can search and view books in the library as well as its information. If a user would like to contribute, they can create an account and add or update existing books to the library. The Front-End with is built with ReactJS. Backend is built with MongoDB and Mongoose.
              </p>
            <div className='Jasz-Site-Link'>
              <a 
                className='Site'
                href='https://jasz-library.netlify.app/'>
                Live Site
              </a>
              <ExternalLink 
                href='https://github.com/sidneypaucar/JASZ-Library'>
                <img className='Repo'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </ExternalLink>
            </div>
          </div>
          </div>        
          <div className='Matrix-Inner'>
            <img className='Matrix-Image'
              src="https://i.imgur.com/SAKMFw5.jpg"
              alt="matrix_image" />
            <div className='Matrix-Links'>
              <p className='Matrix-Description'>
              <strong>The Matrix Project</strong> is loosely based off of the movie franchise in which the user must decide whether to either take the red pill, or blue one. Each pill navigates the user into their choice, either find out the secrets that lie beyond, or rather remain sane and watch funny videos. Built solely with ReactJS. 
              </p>
            <div className='Matrix-Site-Link'>
              <a 
                className='Site'
                href='https://thematrixproject.netlify.app/'>
                Live Site
              </a>
              <ExternalLink 
                href='https://github.com/sidneypaucar/the-matrix'>
                <img className='Repo'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </ExternalLink>
            </div>
          </div>
          </div>
          <div className='Bar-Inner'>
            <img className='Bar-Image'
              src="https://i.imgur.com/MiORH6n.png"
              alt="bar_image" />
            <div className='Bar-Links'>
              <p className='Bar-Description'>
              <strong>Bushwick Bar</strong> is a full-stack web application where any guest can openly craft their very own cocktail. Anyone can view cocktails already crafted by others, however, if a user decides to craft one, they must Sign In/Sign Up to create one out of over 40+ ingredients the barista has behind the counter. The Front-End is built with ReactJS, and the Backend with Ruby on Rails.
              </p>
            <div className='Bar-Site-Link'>
              <a 
                className='Site'
                href='https://bushwickbar.netlify.app/'>
                Live Site
              </a>
              <ExternalLink 
                href='https://github.com/sidneypaucar/Bushwick-Bar'>
                <img className='Repo'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </ExternalLink>
            </div>
          </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
