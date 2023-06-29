import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faLinkedin, faMedium, faGithub, faAngellist,
} from '@fortawesome/free-brands-svg-icons';
import Dropdown from './DropDown';

function About() {
  return (
    <section id="about-me" className="about-me">
      <div className="left-section">
        <h2>About Myself</h2>
        <p>
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.
        </p>
        <div className="lets-connect">
          <span>LET&apos;S CONNECT</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/misal-azeem/" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/misal_azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@misal.azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faMedium} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/misalazeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://wellfound.com/u/misal-azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faAngellist} className="fa-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <Dropdown title="Languages" options={['HTML5', 'CSS3', 'Javascript']} />
        <Dropdown title="Frameworks" options={['React', 'Angular', 'Node', 'Redux']} />
        <Dropdown title="Tools" options={['Github', 'Heroku', 'VScode']} />
      </div>
    </section>
  );
}

export default About;
