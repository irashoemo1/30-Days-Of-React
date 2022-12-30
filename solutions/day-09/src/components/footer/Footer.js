import React from 'react'

class Footer extends React.Component {
    render() {
      return (
        <footer style={this.props.style}>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
}

export default Footer