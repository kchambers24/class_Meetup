import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router'

class App extends Component {
  constructor(props){
     super(props);
     this.state = {
       currentUser: ''
     }
     this.setUser = this.setUser.bind(this);
   }
   setUser(userFromLogin){
     this.setState({currentUser: userFromLogin})
     if (localStorage.user) {
       return
     } else {
       localStorage.setItem('user', userFromLogin);
     }
   }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <Link to='/home' className="navbar-brand" href="#">Meetup</Link>
                  <ul className="nav navbar-nav">
                      <li className="logout">
                          <Link to="/">Logout</Link>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
        {React.cloneElement(this.props.children, {
         currentUser: this.state.currentUser,
         setUser: this.setUser
        })}
      </div>
    );
  }
}

export default App;
