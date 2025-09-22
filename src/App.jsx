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
  },
  {
    "name": "Hamza Ali",
    "city": "Hyderabad",
    "age": 27,
    "profession": "Mobile App Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    "name": "Mariam Iqbal",
    "city": "Peshawar",
    "age": 25,
    "profession": "Digital Marketer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    "name": "Usman Tariq",
    "city": "Quetta",
    "age": 32,
    "profession": "Data Scientist",
    "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    "name": "Zara Sheikh",
    "city": "Sialkot",
    "age": 21,
    "profession": "Student",
    "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    "name": "Omar Farooq",
    "city": "Rawalpindi",
    "age": 29,
    "profession": "Project Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
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