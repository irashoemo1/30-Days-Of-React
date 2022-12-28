import React from 'react'
import ReactDOM  from 'react-dom'
import iraImage from './images/Ira.jpg'

const rootElement = document.getElementById('root')


const UserCard = ({user: {author: {firstName, lastName}, country, occupation, image}}) => (
  <div className="user-card">
    <img src={image} alt='ira image'/>
    <h2>{firstName} {lastName}</h2>
    <h3>{occupation}, {country}</h3>
  </div>
)


const TechList = ({techs}) => {
  const formattedSkills = techs.map((tech) => <li key={tech}>{tech}</li>)
  return formattedSkills
}



const Main = ({techs, user, handleTime, greetPeople}) => (
    <main>
      <div className='main-wrapper'>
        <UserCard user={user} />
        <h3>Skills</h3>
        <ul><TechList techs={techs}/></ul>
      </div>
    </main>
  )

const Footer = ({join}) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Joined on {join.getFullYear()}</p>
    </div>
  </footer>
)

const App = () => {
  const user = {
    author: {firstName: 'Ira', lastName: 'Shoemo'},
    country: 'United States',
    occupation: 'Software Engineer',
    image: iraImage
  }

  const date = new Date()
  const techs = ['HTML', 'Javascript', 'CSS', 'Node.JS', 'Express.JS', 'MongoDB', 'Java', 'Python']

  return (<div className='container'>
    <Main techs={techs} user={user}/>
    <Footer join={date}/>
</div>)
  
}



ReactDOM.render(<App />, rootElement)

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


// you can destructure props in the argument parentheses like this
// const Header = ({data: {welcome, title, subtitle, author: {firstName, lastName}, date}}) => {
//   return (
//     <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <h3>{firstName} {lastName}</h3>
//       <h3>{showDate(date)}</h3>
//     </div>
//   </header>
//   )
  
// }


// last time
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// }


// const Header = ({data: {welcome, title, subtitle, author: {firstName, lastName}, date}}) => {
//   return (
//     <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <h3>{firstName} {lastName}</h3>
//     </div>
//   </header>
//   )
  
// }

// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// )

// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: 3,
//   cursor: 'pointer',
//   fontSize: 18,
//   color: 'white',
// }


// const HexColor = ({hexColor}) => {
//   let color1 = hexColor()
//   let color2 = hexColor()
//   let color3 = hexColor()
//   let color4 = hexColor()
//   let color5 = hexColor()

//   const colors = [color1, color2, color3, color4, color5]

//   const hexColors = colors.map((color) => <li key={color} style={{backgroundColor: color}}>{color}</li>)
//   return hexColors
  
// }

// const Colors = ({hexColor}) => {

//   // <div>
//   //   <ul className="colors">
//   //     <li style={{backgroundColor: color1}}><p>{color1}</p></li>
//   //     <li style={{backgroundColor: color2}}><p>{color2}</p></li>
//   //     <li style={{backgroundColor: color3}}><p>{color3}</p></li>
//   //     <li style={{backgroundColor: color4}}><p>{color4}</p></li>
//   //     <li style={{backgroundColor: color5}}><p>{color5}</p></li>
//   //   </ul>
//   // </div>
//   // console.log(hexColor)
  
//   return (
//     <div>
//       <ul>
//         <HexColor hexColor={hexColor} />
//       </ul>
      
//     </div>
//   )
// }

// const Main = () => {
//   const hexColor = () => {
//     let str = '0123456789abcdef'
//     let color = ''
//     for(let i = 0; i < 6; i++)
//     {
//       let index = Math.floor(Math.random() * str.length)
//       color += str[index]
//     }
  
//     return '#' + color
//   }

//   return (
//     <div className='container'>
//       <Colors hexColor={hexColor} />
//     </div>
//   )
// }