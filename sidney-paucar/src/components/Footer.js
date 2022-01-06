import { ExternalLink } from 'react-external-link'

function Footer() {
  return (
    <footer>
      <p className='footer-text1'>Want to work together or connect?</p>
      <p className='footer-text2'>Contact me! Currently looking for new work opportunites.</p>
      <div className='Footer-Icons'>
        <img className='External-Link' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />

        <img className='External-Link' src="https://i.imgur.com/lhm0ykc.png" />

        <img className='External-Link'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

        <ExternalLink className='External-Link' href='https://github.com/jckrft'><img className='External-Link' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" /></ExternalLink>



      </div>


      
      <p className='footer-text3'>&copy; 2021 Sidney Paucar</p>
      <p className='footer-text4'>Built with React. js</p>
      <a href="#" className="back-to-top">Back to Top</a>
    </footer>
  );
}

export default Footer;
