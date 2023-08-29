// import React from "react";

// class Student extends React.Component{
//     render(){
//         console.log(this.props)
//         return(
//             <>
//             <h1>Hello {this.props.name}</h1>
//             <h5>You have scored {this.props.marks} % </h5>
//             <hr/>
//             </>
//         )
//     }
// }

function Student(props){
    const {name,marks} = props;

    return (
        <>
             <h1>Hello {name}</h1>
            <h5>You have scored {marks} % </h5>
            <hr/>
            </>
    )
}

export default Student;