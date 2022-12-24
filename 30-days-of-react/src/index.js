import React from 'react'
import ReactDOM  from 'react-dom'
import htmlImage from './images/HTML5.png'
import cssImage from './images/CSS.png'
import javascriptImage from './images/javascript.png'
import reactImage from './images/React.png'
import iraImage from './images/Ira.jpg'

const rootElement = document.getElementById('root')

const person = {
  firstName: "Ira",
  lastName: "Shoemo",
  country: "United States",
  profession: "Software Engineer",
  skills: ['HTML', 'CSS', 'Javascript', 'Node.JS', 'MongoDB', 'Express.JS', 'React', 'Java', 'Python', 'Git'],
  joinDate: "November 1, 2022"
}

const header = (
  <header>
    <img src={iraImage} alt="Pic of myself(Ira)"></img>
  </header>
)

const formattedSkills = person.skills.map((tech) => <li key={tech}>{tech}</li>)
const main = (
  <main>
    <h1>{person.firstName} {person.lastName}</h1>
    <p>{person.profession}, {person.country} </p>
    <h2>SKILLS</h2>
    <ul>{formattedSkills}</ul>

  </main>
)

const footer = (
  <footer>
    <p><i class="fa fa-clock-o"></i> Joined on {person.joinDate}</p>
  </footer>
)



const app = (
  <div className='container'>
    {header}
    {main}
    {footer}
  </div>
)

ReactDOM.render(app, rootElement)

// const header = (
//   <header>
//     <h1>Front End Technologies</h1>
//   </header>
// )
// const images = (
//   <div className='tech-images'>
//     <img className="tech" src={htmlImage}></img>
//     <img className="tech" src={cssImage}></img>
//     <img className="tech" src={javascriptImage}></img>
//     <img className="tech" src={reactImage}></img>
//   </div>
// )

// const unohana = (
//   <div className='image-wrapper'>
//     <img src={minazukiImage} alt='minazuki image' />
//   </div>
// )


// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh'
// }
// const date = 'Oct 1, 2020'


// const header = (
//   <header>
//       <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//           Instructor: {author.firstName} {author.lastName}
//       </p>
//       <small>Date: {date}</small>
//       </div>
//   </header>
//   )

// // JSX element, main
// const techs = ['HTML', 'CSS', 'JavaScript']
// const formattedTech = techs.map((tech) => <li key={tech}>{tech}</li>)
// const main = (
//   <main>
//     <div className='main-wrapper'>
//       <p>
//         Prerequisite to get started{' '}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>{formattedTech}</ul>
//       {unohana}
//     </div>
//   </main>
// )

// // JSX element, footer
// const footer = (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )

// const app = (
//   <div>
//     {header}
//     {main}
//     {footer}
//   </div>
  
// )


// const header = (
//   <header>
//     <h1>Subscribe</h1>
//     <p>Sign up with your email address to recieve news and updates</p>
//   </header>
// )

// const input = (
//   <main>
//     <input type='text' id='fname' name='fname' placeholder='First Name'></input>
//     <input type='text' id='lname' name='lname' placeholder='Last Name'></input>
//     <input type='text' id='email' name='email' placeholder='Email'></input>
//   </main>
// )

// const button = (
//   <div className='button'>
//     <button className='subscribe'>Subscribe</button>
//   </div>
// )