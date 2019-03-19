import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './Welcome.css';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom'

class Welcome extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      redirectToReferrer: false
    }
    this.signup = this.signup.bind(this);
  }
  
  
  signup(res, type){

    let postData;
    if(type === 'facebook' &&res.email ){

    }

        PostData('signup'.PostData).then((result) => {
          let respsonseJson = result;
          if(respsonseJson.userData){
            sessionStorage.setItem('userData',JSON.stringify(respsonseJson));
             this.setState({redirectToReferrer: true})
          } 
        });
  }
  render() {
     if(this.state.redirectToReferrer){
       return (<Redirect to={'/home'}  />)
     } 

    const responseFacebook = (response) => {
      console.log(response);
    }
    
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Login system</h2>

              <a href="/login" className="button">Login</a>

              <a href="/signup" className="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;