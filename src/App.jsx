import { useState } from "react";
import Header from "./components/Header";

function App () {
  // Two way binding
  // const [username, setUsername] = useState("");
   
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(username);
  //   setUsername('');
  // }

  return (
    <>
    {/* // Simple Form Handling in React  */}
      {/* <form onSubmit={(e) => {submitHandler(e)}}>
        <input
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}
        type="text" placeholder="Enter text" className="border border-gray-300 p-2 rounded"/>
        <input type="submit" value="Submit" className="bg-blue-500 text-white p-2 rounded ml-2"/>
      </form> */}

      {/* Components */}
      <Header />
    </>
  )
}

export default App 