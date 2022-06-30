import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const contactData = [
  {
    type: "[ Email ]",
    info: "mailto:coltraneyan@gmail.com",
    anchorText: "email me",
    reactIcon: <MdAlternateEmail />,
  },
  {
    type: "[ LinkedIn ]",
    info: "https://www.linkedin.com/in/coltraneyan/",
    anchorText: "browse my linkedin",
    reactIcon: <FaLinkedin />,
  },
  {
    type: "[ GitHub ]",
    info: "https://www.github.com/coltraneyan",
    anchorText: "check out my github",
    reactIcon: <FaGithub />,
  },
];

export default contactData;
