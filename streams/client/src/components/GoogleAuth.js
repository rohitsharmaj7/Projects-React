import React,{useEffect, useState} from 'react';

class GoogleAuth extends React.Component {
  
    state = { isSignedIn:null}

    componentDidMount()
    {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'2271200761629-tskohrb3c3hkudicnp4uhl7rtutfq6ivv.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    
    onSignOut = () =>{
        this.auth.signOut();
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    renderAuthButton()
    {
        if(this.state.isSignedIn===null)
        {
            return null;
        }
        else if(this.state.isSignedIn)
        {
            return(<button className="ui red google button" onClick={this.onSignOut}>
                   <i className="google icon"/>Sign Out</button>)
        }
        else
        {
            return (<button className="red google ui button" onClick={this.onSignIn}>
            <i className="google icon"/>Sign In with Google</button>)
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
     
}

export default GoogleAuth;