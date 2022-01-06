import { ExternalLink } from 'react-external-link'

function Footer() {
  return (
    <footer>
      <p className='footer-text1'>
        Want to work together or connect?
      </p>
      <p className='footer-text2'>
        Contact me! Currently looking for new work opportunites.
      </p>
      <a 
        className='footer-text3'
        href='mailto:sidneypaucar2000@gmail.com'>
      sidneypaucar2000@gmail.com
      </a>
      <div className='Footer-Icons'>
        <ExternalLink href='https://www.linkedin.com/in/sidney-paucar-bb3133ab/'>
          <img className='External-Link'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
        </ExternalLink>
        <ExternalLink href='https://github.com/sidneypaucar'>
          <img className='External-Link'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </ExternalLink>
      </div>
      <p className='footer-text4'>
        &copy; 2021 Sidney Paucar
      </p>
      <p className='footer-text5'>
        Built with React. js
      </p>
    </footer>
  );
}

export default Footer;
