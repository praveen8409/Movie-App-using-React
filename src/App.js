import Student from "./Student"


function App() {
  return (
   <>
   {/* <h1>Movie App</h1> */}
  
   <Student name="Praveen" marks={80}/>
   <Student name="Google" marks={70}/>
   <Student name="Alexa" marks={60}/>
   <Student />
   </>
  );
}

Student.defaultProps = {
  name : "Student",
  marks : "N.A."
}

export default App;
