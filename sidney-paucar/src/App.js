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
      
      <div className='About'>
        <section className='About-Me'>
          <p className='About-Header'>About Me</p>
          

          <div className='Inner'>
            <div>
            <p className='About-Description'>
          Hello! My name is Sidney and I am a Full Stack Software Developer with a passion for creating functional, aesthetically appealing, and user friendly sites with a demonstrated history of working with multiple languages. Experienced with Ruby on Rails, JavaScript, React and MongoDB and similar frameworks. I bring strong skills in problem solving, communication as well as an intrinsic passion towards UX/UI. 
            </p>
              <p className='info'>Here are a few technologies I have worked with:</p>
              
              <ul className='icons'>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" /></li>

            <li><img src="https://i.imgur.com/2wVg1FT.png" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg" /></li>
            
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" /></li>
            
        
        </ul>
            </div>
          
          
            <img className='Profile-Pic' src="https://i.imgur.com/zLkMHbS.jpg" alt="profile_pic" />
        </div> 
          

          
            

          



        </section>
      </div>


      <nav>
        <Nav />
      </nav>









      <Footer />
    </div>
  );
}

export default App;
