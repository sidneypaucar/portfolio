import './App.css';
import Nav from './components/Nav';
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
      <nav>
        <Nav />
      </nav>
      <div className='About'>
        <section className='About-Me'>
          <p className='About-Header'>About Me</p>
          <div className='Inner'>
            <div>
              <p className='About-Description'>
                Hello! My name is Sidney and I am a Full Stack Software Developer with a passion for creating functional, aesthetically appealing, and user friendly sites with a demonstrated history of working with multiple languages. Experienced with Ruby on Rails, JavaScript, React and MongoDB and similar frameworks. I bring strong skills in problem solving, communication as well as an intrinsic passion towards UX/UI. 
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
            <img className='Profile-Pic'
              src="https://i.imgur.com/zLkMHbS.jpg"
              alt="profile_pic" />
          </div> 
        </section>
      </div>
      <div className='Project'>
        <section className='Projects'>
          <p className='Project-Header'>
            Projects
          </p>
          <br />
          <div className='Jasz-Inner'>
              <img className='Jasz-Image'
              src="https://i.imgur.com/4jjcGmQ.jpg"
              alt="jasz_image" />
              <p className='Jasz-Description'>
                The Jasz Library is a Full-Stack Application where anyone can search and view the books in the library as well as it's Author, Genre, and Blurb. If a user would like to contribute, they can create an account and add their own books to the library. They can also update or delete a book if there are corrections that need to be made. The Front-End with is built with ReactJS. Backend is built with MongoDB and Mongoose.
              </p>
          </div>
          <div className='Matrix-Inner'>
              <img className='Matrix-Image'
              src="https://i.imgur.com/SAKMFw5.jpg"
              alt="matrix_image" />
              <p className='Matrix-Description'>
              Each pill navigates the user into their choice, either find out the secrets that lie beyond, or rather remain sane and watch funny videos. The Matrix is loosely based off of the movie franchise in which the user must decide whether to either take the red pill, or blue one. Built solely with ReactJS. 
              </p>
          </div>
          <div className='Bar-Inner'>
              <img className='Bar-Image'
              src="https://i.imgur.com/MiORH6n.png"
              alt="bar_image" />
              <p className='Bar-Description'>
              Bushwick Bar is a full-stack web application where any guest can openly craft their very own cocktail. Anyone can view cocktails already crafted by others, however, if a user decides to craft one, they must Sign In/Sign Up to create one out of over 40+ ingredients the barista has behind the counter. The Front-End is built with ReactJS, and Backend built with Ruby on Rails.
              </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
