import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import TVDBImage from '../images/TVDB.jpg';
import MealDBImage from '../images/MealDB.jpg';
import SpaceHubImage from '../images/spacehub.jpg';
import BookstoreImage from '../images/bookstore.jpg';
import MathMagiciansImage from '../images/math-magicians.jpg';
import TodolistImage from '../images/Todolist.jpg';
import VibetuneImage from '../images/vibetune.jpg';
import AACPImage from '../images/AACP.jpg';
import HNIImage from '../images/H&I.jpg';

function Projects() {
  const Projects = [
    {
      id: 1,
      name: 'TVDB',
      stack: ['React', 'Redux', 'CSS3'],
      summary: 'This is a Tv show data base built on react. It retrieves data from API and renders it on the webpage. The data is stored inside the redux store. There is also a details page for each show which has further details of the TV show.',
      image: TVDBImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/TVDB-react-capstone',
      livedemo: 'https://project-implementation--reliable-syrniki-0932c4.netlify.app/',
    },
    {
      id: 2,
      name: 'MealDB',
      stack: ['HTML5', 'CSS3', 'Javascript ES6'],
      summary: 'This is a Meal DataBase built on Javascript ES6. It retrieves data from API and renders it on the webpage. User have abilities to expand each meal and browse the recipe. Also they can like an item and comment on each meal.',
      image: MealDBImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/JavaScript-Capstone',
      livedemo: 'https://misalazeem.github.io/JavaScript-Capstone/',
    },
    {
      id: 3,
      name: 'Space Travelers Hub',
      stack: ['React', 'Redux', 'CSS3'],
      summary: 'This is a React/Redux web application. It fetches data from the spaceX api to display rockets and missions. Users are able to join these missions and reserve the rockets.',
      image: SpaceHubImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/space-travelers-react-capstone',
      livedemo: 'https://dev--adorable-pegasus-239e60.netlify.app/',
    },
    {
      id: 4,
      name: 'Bookstore',
      stack: ['React', 'Redux', 'CSS3'],
      summary: 'This is a BookStore CMS app built on React/Redux. You can add, remove books as functionalities in this project. The design is responsive and can be used as a Book Database.',
      image: BookstoreImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/bookstore-react',
      livedemo: 'https://dev--prismatic-druid-21b59f.netlify.app/',
    },
    {
      id: 5,
      name: 'Math Magicians',
      stack: ['React', 'Redux', 'CSS3'],
      summary: 'This is a Math Magicians app. It is basically a calculator deisgned using react, There is also a Quote section which retrieves a quote from an API and displays it on the web page.',
      image: MathMagiciansImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/Math-Magicians',
      livedemo: 'https://dev--chimerical-gecko-6642ce.netlify.app/',
    },
    {
      id: 6,
      name: 'To Do List',
      stack: ['HTML5', 'CSS3', 'Javascript'],
      summary: 'This is a simple to do list project designed on JAVASCRIPT, HTML5 and CSS. It allow users to add daily tasks and remove them as they are completed.',
      image: TodolistImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/To-Do-List',
      livedemo: 'https://misalazeem.github.io/To-Do-List/',
    },
    {
      id: 7,
      name: 'Vibetune ',
      stack: ['HTML5', 'CSS3', 'Javascript'],
      summary: 'This is a Concert Event website built with HTML/CSS /JAVASCRIPT. Main features are responsive design, CSS flex boxes and grids.',
      image: VibetuneImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/Capstone-Project',
      livedemo: 'https://misalazeem.github.io/Capstone-Project/',
    },
    {
      id: 8,
      name: 'AACP',
      stack: ['WordPress'],
      summary: 'AACP is an E-Book and paid newsletter website. The website features an ecommerce store with working payment methods and memberships for its users.',
      image: AACPImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/',
      livedemo: 'https://aacp.com.pk/',
    },
    {
      id: 9,
      name: 'Huzaima & Ikram',
      stack: ['WordPress'],
      summary: 'Huzaima & Ikram is a very popular Income-tax law firm based in Lahore, Pakistan. I have developed this website for them on Wordpress. It is mostly a portfolio but also features memberships for tax articles with a fully functioning e-commerce store.',
      image: HNIImage,
      year: '2023',
      type: 'Front End Dev',
      github: 'https://github.com/misalazeem/',
      livedemo: 'https://huzaimaikram.com/',
    },
  ];

  return (
    <section id="Projects" className="projects-section">
      {Projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;
