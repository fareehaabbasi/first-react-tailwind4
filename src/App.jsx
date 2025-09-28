import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import axios from "axios";

function Button(){
  return(
    <button className="bg-amber-900 text-amber-50 py-3 px-4">Click Me</button>
  )
}

// Two way binding & Simple Form Handling in React ------------
// function App () {
//   Two way binding
//   const [username, setUsername] = useState("");
//
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername('');
//   }

//   return (
//     <>
//     // Simple Form Handling in React 
//       <form onSubmit={(e) => {submitHandler(e)}}>
//         <input
//         value={username}
//         onChange={(e) => {setUsername(e.target.value)}}
//         type="text" placeholder="Enter text" className="border border-gray-300 p-2 rounded"/>
//         <input type="submit" value="Submit" className="bg-blue-500 text-white p-2 rounded ml-2"/>
//       </form>
//     </>
//   )
// }



// Components and Props-------
// function App () {
//   const users = [
//   {
//     "name": "Ayesha Khan",
//     "city": "Karachi",
//     "age": 24,
//     "profession": "Web Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     "name": "Ali Raza Khan",
//     "city": "Lahore",
//     "age": 28,
//     "profession": "Graphic Designer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
//   },
//   {
//     "name": "Sara Ahmed",
//     "city": "Islamabad",
//     "age": 22,
//     "profession": "Content Writer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     "name": "Bilal Hussain",
//     "city": "Faisalabad",
//     "age": 30,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
//   },
//   {
//     "name": "Fatima Noor",
//     "city": "Multan",
//     "age": 26,
//     "profession": "UI/UX Designer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
//   },
//   {
//     "name": "Hamza Ali",
//     "city": "Hyderabad",
//     "age": 27,
//     "profession": "Mobile App Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
//   },
//   {
//     "name": "Mariam Iqbal",
//     "city": "Peshawar",
//     "age": 25,
//     "profession": "Digital Marketer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
//   },
//   {
//     "name": "Usman Tariq",
//     "city": "Quetta",
//     "age": 32,
//     "profession": "Data Scientist",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
//   },
//   {
//     "name": "Zara Sheikh",
//     "city": "Sialkot",
//     "age": 21,
//     "profession": "Student",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
//   },
//   {
//     "name": "Omar Farooq",
//     "city": "Rawalpindi",
//     "age": 29,
//     "profession": "Project Manager",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
//   }
// ]

//   return (
//     <>
//       {/* Components */}
//       <Header />
//       <div className="py-3 m-5">
//         {users.map((user, abc) => {
//           return (
//             <Cards key={abc} username={user.name} age={user.age} city={user.city} profession={user.profession} img={user.profilePhoto}/>
//           );
//         })}
//       </div>
//     </>
//   )
// }


// API Fetching with useEffect & Axios --------------
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=40");
    const data = response.data;
    setData(data);
    console.log(data);  
  };

  return (
    <>
    <button onClick={getData} className="bg-indigo-950 text-white py-2 px-4 rounded active:scale-90 m-4">Get Data</button>
    <div className="p-5 bg-neutral-800 flex items-center justify-center flex-wrap min-h-screen">
      {data.map ((elem, idx) => {
        return <div className="bg-lime-300 text-black px-7 py-6 rounded mb-3 mr-2.5" key={idx}>
          <h1 className="text-lg font-bold">{elem.author}</h1>
          <img className="w-50 h-40" src={elem.download_url} alt="" />
        </div>
     })}
    </div>
    </>
  )
}

export default App;