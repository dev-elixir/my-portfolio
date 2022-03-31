import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDatabase,
  FaLinkedinIn,
} from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiCodecademy, SiRobotframework } from "react-icons/si";
import axios from "axios";

const nav_menu = [
  { id: 1, text: "Home", url: "javascript:window.location.reload(true)" },
  { id: 2, text: "Projects", url: "#projects" },
  { id: 3, text: "Achievements/Skills", url: "#skills" },
  { id: 4, text: "About", url: "#about" },
];

export const fetchRepo = async () => {
  const options = {
    method: "GET",
    url: "https://recent-repo.p.rapidapi.com/repos",
    params: { user: "dev-elixir", repo: 6 },
    headers: {
      "X-RapidAPI-Host": "recent-repo.p.rapidapi.com",
      "X-RapidAPI-Key": "e592b42cfcmsh921b2df5f59a710p1cc963jsn1318a35d70e4",
    },
  };
  const repos = await axios.request(options);

  repos.data.forEach((repo) => {
    const { id, repoName, repoLink, repoDesc } = repo;
    // console.log(id, repoName, repoLink, repoDesc);
    recent_repo.push({
      id: id,
      repoName: repoName,
      repoLink: repoLink,
      repoDesc: repoDesc,
    });
  });
  return repos;
};

export const social_icons = [
  {
    id: 1,
    type: "Facebook",
    library: <FaFacebookF />,
    url: "https://facebook.com/abhishree143",
  },
  {
    id: 2,
    type: "Twitter",
    library: <FaTwitter />,
    url: "https://twitter.com/abhisri1997",
  },
  {
    id: 3,
    type: "GitHub",
    library: <FaGithub />,
    url: "https://github.com/dev-elixir",
  },
  {
    id: 4,
    type: "LinkedIN",
    library: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/abhisri1997/",
  },
];

export const achievements = [
  {
    id: 1,
    text: "A certain task would have taken a total of 7-10 days of work but with the help of scripting I had automated all the task from extraction of data to validation in within 3 days.",
  },
  {
    id: 2,
    text: "Created an API with the help of Node JS, Express, Cheerio and Puppeteer and implemented it with Microsoft Flow to generate an alert in our Teams group.",
  },
  {
    id: 3,
    text: "Also created several automation scripts to help my team deliver the tasks on time.",
  },
];

export const skills = [
  {
    id: 1,
    type: "Languages",
    library: <SiCodecademy />,
    text: "JavaScript, HTML5, CSS3, ReactJS, NodeJS, ExpressJS",
  },
  {
    id: 2,
    type: "Automation",
    library: <VscTerminalPowershell />,
    text: "Shell Scripting",
  },
  {
    id: 3,
    type: "FrameWorks",
    library: <SiRobotframework />,
    text: "ReactJS, NodeJS, ExpressJS, jQuery, KnockOutJS",
  },
  {
    id: 4,
    type: "Database",
    library: <FaDatabase />,
    text: "PostgreSql, MySQL",
  },
];

export const recent_repo = [];

export default nav_menu;
