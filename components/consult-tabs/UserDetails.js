import dynamic from 'next/dynamic'
import React, { Component } from 'react';
const Login = dynamic(() => import("../../components/popups/Login"));
export default class UserDetails extends Component{

    next = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    render(){

        const { values } = this.props;
        
        return(
            
            <div>
            <Login consult={true}/>
            <form 
            className="c-address-form" >
            <div className="container-fluid">
                <div className="row c-userDetails">
                
                    {/* <Button className="tab__btn" onClick={this.next}>Next </Button> */}
                </div>
            </div>
        </form>
            </div>
        )
    }
}

