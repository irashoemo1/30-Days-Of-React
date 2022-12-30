import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { countriesData } from './data/countries'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import style from './components/styles/app.css'
import { showDate } from './components/utils/display-time';

class App extends Component{
    state = {
        loggedIn: false,
        techs: ['HTML', 'CSS', 'JS'],
        message: 'Click show time or Greet people to change me',
        style: {
        backgroundColor: '',
        color: ''
        }
    }

    handleLogin = () => {
        this.setState({loggedIn: !this.state.loggedIn})
    }

  
    greetPeople = () => {
        let message = 'Welcome to 30 Days Of React Challenge, 2020'
        this.setState({ message })
    }

    handleTime = () => {
        let message = showDate(new Date())
        this.setState({ message })
    }
  
  changeBackground = () => {
    const morning = 'yellow'
    const noon = 'orange'
    const evening = 'blue'
    const night = 'darkblue'
    let background;
    // let hour = this.showHours(new Date())
    let hour = 1
    if(hour >= 5 && hour < 12)
    {
      background = this.state.style.backgroundColor === '' ? morning : ''
    }
    else if(hour >= 12 && hour < 18){
      background = this.state.style.backgroundColor === '' ? noon : ''
    }
    else if(hour >= 18 && hour < 23){
      background = this.state.style.backgroundColor === '' ? evening : ''
    }
    else{
      background = this.state.style.backgroundColor === '' ? night : ''
    }
    this.setState({style: {backgroundColor: background}})
    console.log(background)
    console.log(this.state.style.backgroundColor)
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
    

    return(
      <div className='container'>
        {/* {this.state.backgroundColor} */}
        <Header data={data} style={this.state.style}/>
        <Main techs={this.state.techs} greetPeople={this.greetPeople} handleTime={this.handleTime} loggedIn={this.state.loggedIn}
        handleLogin={this.handleLogin} message={this.state.message} changeBackground={this.changeBackground} style={this.state.style}/>
        <Footer date={new Date()} style={this.state.style} />
      </div>
    )
  }
}

export default App
// const Country = ({
//     country: { name, capital, flag, languages, population, currency },
//   }) => {
//     const formatedCapital =
//       capital.length > 0 ? (
//         <>
//           <span>Capital: </span>
//           {capital}
//         </>
//       ) : (
//         ''
//       )
//     const formatLanguage = languages.length > 1 ? `Languages` : `Language`
//     return (
//       <div className='country'>
//         <div className='country_flag'>
//           <img src={flag} alt={name} />
//         </div>
//         <h3 className='country_name'>{name.toUpperCase()}</h3>
//         <div class='country_text'>
//           <p>{formatedCapital}</p>
//           <p>
//             <span>{formatLanguage}: </span>
//             {languages.join(', ')}
//           </p>
//           <p>
//             <span>Population: </span>
//             {population.toLocaleString()}
//           </p>
//           <p>
//             <span>Currency: </span>
//             {currency}
//           </p>
//         </div>
//       </div>
//     )
//   }
