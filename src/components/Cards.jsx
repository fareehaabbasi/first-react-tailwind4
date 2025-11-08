import React from "react";

function Cards (props) {
    return (
        <>
        {/* <div className="border mr-1 mt-1 border-gray-300 p-6 w-60 h-full text-center rounded inline-block">
            <img className="ml-6 h-32 w-32 rounded-full mb-3" src={props.img} alt="" />
            <h3 className="text-2xl font-semibold mb-4">{props.username}</h3>
            <h4 className="text-blue-600">{props.profession}</h4>
            <p className="text-gray-600">City: {props.city}, Age: {props.age}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium mt-5">Add friend</button>
        </div> */}
        <div className="bg-lime-300 text-black px-7 py-6 rounded mb-3 mr-2.5" >
          <h1 className="text-lg font-bold">{props.author}</h1>
          <img className="w-50 h-40" src={props.img} alt="" />
        </div>
        </>
    )
}

export default Cards;