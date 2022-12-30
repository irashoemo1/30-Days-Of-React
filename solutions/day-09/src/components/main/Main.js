import React, {Component} from "react"
import buttonStyles from '../styles/button.css'
import Button from '../shared/Button'
import iraImage from '../assets/images/Ira.jpg'
import { handleTime } from "../utils/display-time"

const Message = ({message}) => {
    return (
      <div>
        {message}
      </div>
    )
}
  
const Login = () => {
    return (
      <div>
        <h3>Please Login</h3>
      </div>
    )
}
  
const Welcome = () => {
    return (
      <div>
        <h3>Welcome to 30 days of react</h3>
      </div>
    )
}
  
const UserCard = () => (
    <div className='user-card'>
        <img src={iraImage} alt='ira' />
        <h2>Ira Shoemo</h2>
    </div>
)
    
  
class TechList extends Component {
    render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
}

  
class Main extends Component {
    render() {
      const {
        techs,
        greetPeople,
        handleTime,
        loggedIn,
        handleLogin,
        message,
        changeBackground
      } = this.props
  
      const status = loggedIn ? <Welcome /> : <Login />
      return (
        <main style={this.props.style}>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
            <UserCard />
            {techs.length === 3 && (
              <p>You have all the prerequisite courses to get started React</p>
            )}
            <div>
              <Button
                text='Show Time'
                onClick={handleTime}
                style={buttonStyles}
              />{' '}
              <Button
                text='Greet People'
                onClick={greetPeople}
                style={buttonStyles}
              />{' '}
              <Button text='Change Background' onClick={changeBackground} style={buttonStyles}/>
              {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
            </div>
            <div style={{ margin: 30 }}>
              <Button
                text={loggedIn ? 'Logout' : 'Login'}
                style={buttonStyles}
                onClick={handleLogin}
              />
              <br />
              {status}
            </div>
            <Message message={message} />
          </div>
        </main>
      )
    }
  }

export default Main