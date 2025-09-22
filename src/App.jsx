import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";


function App () {
  // Two way binding
  // const [username, setUsername] = useState("");
   
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(username);
  //   setUsername('');
  // }

  const users = [
  {
    "name": "Ayesha Khan",
    "city": "Karachi",
    "age": 24,
    "profession": "Web Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Ali Raza Khan",
    "city": "Lahore",
    "age": 28,
    "profession": "Graphic Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    "name": "Sara Ahmed",
    "city": "Islamabad",
    "age": 22,
    "profession": "Content Writer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Bilal Hussain",
    "city": "Faisalabad",
    "age": 30,
    "profession": "Software Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    "name": "Fatima Noor",
    "city": "Multan",
    "age": 26,
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
  }
]

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
      <div className="py-3 m-5">
        {users.map((user, abc) => {
          return (
            <Cards key={abc} username={user.name} age={user.age} city={user.city} profession={user.profession} img={user.profilePhoto}/>
          );
        })}
      </div>
    </>
  )
}

export default App;