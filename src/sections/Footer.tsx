import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer>
    <a href="https://github.com/vincerubinetti/svg-to-png" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
      <span>Original Source Code</span>
    </a> 
    <a href="https://github.com/bobjoerules/svg-to-png-darkmode" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
      <span>This Version Source Code</span>
    </a>
  </footer>
);

export default Footer;
