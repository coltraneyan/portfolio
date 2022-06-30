import { BsCreditCard2FrontFill, BsSquareHalf } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { SiAiohttp, SiSolidity } from "react-icons/si";

const projectsData = [
  {
    type: "[ Javascript ]",
    projectList: [
      {
        projName: "Portal Wallet",
        projTech: "Javascript, React.js, CUBE CSS",
        projColor: "yellow",
        projDesc: "WYSIWYG crypto wallet creator",
        projLink: "https://github.com/coltraneyan/portal-wallet",
        projIcon: <BsCreditCard2FrontFill />,
      },
      {
        projName: "Ethertree",
        projTech: "Javascript, React.js, Ethers.js",
        projColor: "yellow",
        projDesc: "Ethereum Block Explorer",
        projLink: "https://github.com/coltraneyan/ethertree",
        projIcon: <AiOutlineNodeIndex />,
      },
    ],
  },
  {
    type: "[ Solidity ]",
    projectList: [
      {
        projName: "Pixel DAO",
        projTech: "Solidity, Typescript, Hardhat",
        projColor: "yellow",
        projDesc:
          "DAO smart contract allowing members to join, and create a pixel-based icon to be identified by.",
        projLink: "https://github.com/coltraneyan/pixel-dao",
        projIcon: <BsSquareHalf />,
      },
    ],
  },
  {
    type: "[ Open Source ]",
    projectList: [
      {
        projName: "Must npm Package",
        projTech: "Javascript, Node",
        projColor: "lightgreen",
        projDesc: "Javascript mirror of Solidity's 'Require' Statement",
        projLink: "https://github.com/coltraneyan/portal-wallet",
        projIcon: <SiSolidity />,
      },
      {
        projName: "Abell.js",
        projTech: "Javascript, HTML, Markdown, Git",
        projColor: "lightgreen",
        projDesc: "Contributed to documentation of JS static-site generator",
        projLink: "https://github.com/coltraneyan/ethertree",
        projIcon: <FaSitemap />,
      },
      {
        projName: "Request HTTP Client",
        projTech: "Markdown, Git",
        projColor: "lightgreen",
        projDesc: "Contributed to documentation of Request HTTP Client",
        projLink: "https://github.com/coltraneyan/ethertree",
        projIcon: <SiAiohttp />,
      },
    ],
  },
];

export default projectsData;
