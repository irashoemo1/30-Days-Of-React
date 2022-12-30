import React from 'react'

class Header extends React.Component{
  render(){
    const {welcome, title, subtitle, author : {firstName, lastName}, date} = this.props.data
    return (
      <header style={this.props.style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

export default Header