import jazz from './assets/images/jazz.jpg';
import rockets from './assets/images/rockets.jpg';
import gymelite from './assets/images/fitness.jpg';
import leaderboard from './assets/images/Leader board.jpg';
import bookstore from './assets/images/bookstore.jpg';
import currencies from './assets/images/currencies metrics.jpg';
import mathematics from './assets/images/Math magicians.jpg';
import budget from './assets/images/Budget app.jpg';
import { html, css, js, wordpress, react, redux } from './skillsList'


const togovilleJazz = {
    id: 1,
    title: 'Togoville Jazz 2022',
    description: 'Togoville Jazz 2022 is a jazz festival website featuring two pages, multiple sections, and captivating HTML, CSS, and JavaScript animations. With a visually stunning design, it offers event details, artist profiles, and engaging interactivity. This immersive platform connects jazz enthusiasts, artists, and organizers for an unforgettable online celebration of music and culture.',
    img: jazz,
    alt: 'Togoville Jazz 2022 project picture',
    link: 'https://matthieu96code.github.io/capstone-project1-concert/',
    source: 'https://github.com/Matthieu96Code/capstone-project1-concert',
    technologies: [html, css, js],
    technologies2: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    ]
}

const mathMagicians = {
    id: 2,
    title: 'Math Magicians',
    description: 'Math Magicians is a captivating Single Page App (SPA) designed for mathematics enthusiasts. It features a user-friendly interface for simple calculations and provides random math-related quotes, sparking inspiration. With its minimalist design and interactive features, it offers an engaging platform for all fans of mathematics.',
    img: mathematics,
    alt: 'Math Magicians project picture',
    link: 'https://math-magicians-6gfp.onrender.com/',
    source: 'https://github.com/Matthieu96Code/math-magicians',
    technologies: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 4, name: 'React', link: 'https://reactjs.org/'},
        {id: 5, name: 'Redux', link: 'https://redux.js.org/'},
        {id: 6, name: 'Rest API', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'},
    ]
}

const leaderBoard = {
    id: 3,
    title: 'Leader board',
    description: 'The Leaderboard website is a platform that showcases scores submitted by various players. With a sleek and user-friendly interface, it allows users to view and compare scores from different players across various games or activities. The website dynamically updates in real-time as new scores are submitted, providing a dynamic and engaging experience for participants and spectators alike. Stay informed, track progress, and foster healthy competition through the Leaderboard website.',
    img: leaderboard,
    alt: 'Leader board project picture',
    link: 'https://matthieu96code.github.io/leaderboard-project/dist/',
    source: 'https://github.com/Matthieu96Code/leaderboard-project',
    technologies: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 4, name: 'React', link: 'https://reactjs.org/'},
        {id: 5, name: 'Redux', link: 'https://redux.js.org/'},
        {id: 6, name: 'Rest API', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'},
    ]
}

const metricsWebapp = {
    id: 4,
    title: 'Currency metrics webapp',
    description: 'The Currency Metrics web app is a responsive application built using React and Redux. The app consists of two pages. The first page displays a comprehensive list of currency codes and names, providing users with an overview of various currencies. On the second page, users can select a specific currency and view its corresponding stock information.',
    img: currencies,
    alt: 'Currency metrics webapp project picture',
    link: 'https://metrics-webapp-jwa8.onrender.com/',
    source: 'https://github.com/Matthieu96Code/metrics-webapp',
    technologies: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 4, name: 'React', link: 'https://reactjs.org/'},
        {id: 5, name: 'Redux', link: 'https://redux.js.org/'},
        {id: 6, name: 'Rest API', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'},
    ]
}

const bookstoreApp = {
    id: 5,
    title: 'Bookstore',
    description: 'Bookstore is a straightforward website that showcases a book list and offers functionality to add and remove books. With a user-friendly interface, users can easily navigate through the displayed books, seamlessly add new entries, and remove existing ones, making it a convenient platform for managing book collections.',
    img: bookstore,
    alt: 'Bookstore project picture',
    link: 'https://bookstore-manager.netlify.app',
    source: 'https://github.com/Matthieu96Code/bookstore',
    technologies: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 4, name: 'React', link: 'https://reactjs.org/'},
        {id: 5, name: 'Redux', link: 'https://redux.js.org/'},
        {id: 6, name: 'Rest API', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'},
    ]
}

const budgetApp = {
    id: 6,
    title: 'Budget App',
    description: 'budget-app is a mobile web application built using Ruby on Rails that helps users manage their budget effectively. With this app, users can register an account and log in, ensuring that their data remains private and secure.',
    img: budget,
    alt: 'Budget App project picture',
    link: 'https://budget-7a3k.onrender.com/',
    source: 'https://github.com/Matthieu96Code/budget-app',
    technologies: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'Ruby', link: 'https://www.ruby-lang.org/en/'},
        {id: 4, name: 'Ruby on Rails', link: 'https://rubyonrails.org/'},
    ]
}

const spaceTravelersHub = {
    id: 7,
    title: 'Space Traveler\'s Hub',
    description: 'Space Traveler\'s Hub is a dynamic website built with React and Redux. It offers an immersive platform for users to explore space missions and rockets. Users can join missions, reserve rockets, and access detailed information about each mission and rocket, creating an engaging experience for space enthusiasts and aspiring astronauts.',
    img: rockets,
    alt: 'Space Traveler\'s Hub project picture',
    link: 'https://spacejourneyhub.netlify.app',
    source: 'https://github.com/Matthieu96Code/spaceTravelersHub',
    technologies: [html, css, js, react, redux],
    technologies2: [
        {id: 1, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id: 2, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {id: 3, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 4, name: 'React', link: 'https://reactjs.org/'},
        {id: 5, name: 'Redux', link: 'https://redux.js.org/'},
        {id: 6, name: 'Rest API', link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'},
    ]
}

const gymElite = {
    id: 8,
    title: 'Gym Elite',
    description: 'Gym Elite is an online hub tailored for gym-goers, fitness enthusiasts, and anyone looking to make the most out of their gym experience. The site aims to provide resources, workout plans, nutrition advice, and a sense of community for individuals committed to their fitness journey.',
    img: gymelite,
    alt: 'gym elite project picture',
    link: 'http://gymelite.unaux.com',
    source: undefined,
    // source: 'https://github.com/Matthieu96Code/spaceTravelersHub',
    technologies: [wordpress],
    technologies2: [
        {id: 1, name: 'WordPress', link: 'https://wordpress.com/'},
        {id: 2, name: 'Elementor', link: 'https://elementor.com/'},
    ]
}

const projectList = [togovilleJazz, gymElite, spaceTravelersHub];

export default projectList;