import React from 'react';
import ReactDOM from 'react-dom';
import iraImage from './images/Ira.jpg'

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)



// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

class TechList extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const {techs} = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

const Count = ({count, addOne, subtractOne, multiplyBy3, divideBy3, zeroOut}) => {
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <Button text='Add One' onClick={addOne} style={buttonStyles} />
        <Button text='Subtract One' onClick={subtractOne} style={buttonStyles} />
        <Button text='Multiply by 3' onClick={multiplyBy3} style={buttonStyles} />
        <Button text='Divide by 3' onClick={divideBy3} style={buttonStyles} />
        <Button text='Zero Out' onClick={zeroOut} style={buttonStyles} />
      </div>
    </div>
  )

}

class Main extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const {techs, user, showTime, greetPeople, changeBackground, count, addOne, subtractOne, multiplyBy3, divideBy3, zeroOut} = this.props
    return (
      <main style={this.props.style}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul><TechList techs={techs} /></ul>
          <UserCard user={user} />
          <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
          <Button text="Show Time" onClick={showTime} style={buttonStyles} />
          <Button text="Change Background" onClick={changeBackground} style={buttonStyles} />
          <Count count={count} addOne={addOne} subtractOne={subtractOne} multiplyBy3={multiplyBy3} divideBy3={divideBy3}
          zeroOut={zeroOut}/>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <footer style={this.props.style}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class Header extends React.Component{
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render(){
    console.log(this.props.style)
    const {welcome, title, subtitle, author : {firstName, lastName}, date} = this.props.data
    return (
      <header style={this.props.style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class App extends React.Component{
  state = {
    count: 0,
    image: 'https://placekitten.com/500/500',
    style :{
      backgroundColor: '',
      color: '',
    }
  }

  changeBackground = () => {
    console.log(this.state.style.backgroundColor)
    let dark = '#0F172A'
    let light = ''
    let background = this.state.style.backgroundColor === '' ? dark : light
    let textColor = background === dark ? 'white' : 'black' 
    this.setState({style: {backgroundColor: background, color: textColor}})
    console.log(background)
    console.log(this.state.style.backgroundColor)
  }

  zeroOut = () => {
    this.setState({count: 0})
  }

  addOne = () => {
    this.setState({count: this.state.count + 1})
  }

  subtractOne = () => {
    this.setState({count: this.state.count - 1})
  }

  multiplyBy3 = () => {
    this.setState({count: this.state.count * 3})
  }

  divideBy3 = () => {
    this.setState({count: this.state.count / 3})
  }

  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  showTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  render(){
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Ira',
        lastName: 'Shoemo',
      },
      date: 'Dec 28, 2022',
    }
  
    const techs = ['HTML', 'CSS', 'JavaScript']

    const user = { ...data.author, image: iraImage }
    return(
      <div className='container'>
        {this.state.backgroundColor}
        <Header data={data} style={this.state.style}/>
        <Main techs={techs} user={user} showTime={this.showTime} greetPeople={this.greetPeople} changeBackground={this.changeBackground} 
        count={this.state.count} addOne={this.addOne} subtractOne={this.subtractOne} multiplyBy3={this.multiplyBy3} 
        divideBy3={this.divideBy3} zeroOut={this.zeroOut} style={this.state.style}/>
        <Footer date={new Date()} style={this.state.style}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
