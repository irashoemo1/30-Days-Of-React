import React from 'react'
import ReactDOM  from 'react-dom'
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

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: {person.firstName} {person.lastName}</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const UserCard = () => (
  <div className="user-card">
    <img src={iraImage} alt='ira image'/>
    <h2>Ira Shoemo</h2>
  </div>
)


const TechSkills = () => {
  const formattedSkills = person.skills.map((tech) => <li key={tech}>{tech}</li>)
  return formattedSkills
}

const Main = () => (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul><TechSkills /></ul>
        <UserCard />
      </div>
    </main>
  )

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

const App = () => (
  <div className='container'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const hexColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++)
  {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }

  return '#' + color
}

let color1 = hexColor()
let color2 = hexColor()
let color3 = hexColor()
let color4 = hexColor()
let color5 = hexColor()


const HexColor = () => (
  <div>
    <ul className="colors">
      <li style={{backgroundColor: color1}}><p>{color1}</p></li>
      <li style={{backgroundColor: color2}}><p>{color2}</p></li>
      <li style={{backgroundColor: color3}}><p>{color3}</p></li>
      <li style={{backgroundColor: color4}}><p>{color4}</p></li>
      <li style={{backgroundColor: color5}}><p>{color5}</p></li>
    </ul>
  </div>
)

ReactDOM.render(<HexColor />, rootElement)

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