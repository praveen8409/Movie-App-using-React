import React from "react";

class Student extends React.Component{
    render(){
        console.log(this.props)
        return(
            <>
            <h1>Hello {this.props.name}</h1>
            <h5>You have scored {this.props.marks}</h5>
            <hr/>
            </>
        )
    }
}

export default Student;