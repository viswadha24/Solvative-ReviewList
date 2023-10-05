import './ReviewsList.css';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
//import Link from 'react-router-dom';
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sort } from 'semver';
//import { Button } from "@mui/material";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]
 
function ReviewsList() {


     let [data, setArts] = useState([])

    useEffect(()=>{
      getArts();
      console.log("gets first time")
     },[])

     const getArts=()=>{
        
      console.log("getArts in home is executed  ....")

      axios
      .get("http://localhost:3004/reviews-api/get-all-review")
      .then((response) => {
       // alert(response.data.message+"🎇🎃🎃🎃");
        //if user created
        if (response.data.message === "userarts empty") {
          //navigate to login
          
           alert(response.data.message+"🎃🎃🎃");  
        }
        else
        {
            let sortedReviews = response.data.products;
            let reversedReviews = [];

for(let i = sortedReviews.length - 1; i >= 0; i--) {
  const valueAtIndex = sortedReviews[i]
  
  reversedReviews.push(valueAtIndex)
}

            setArts(reversedReviews)
          console.log("ARTS PRODUCTS == ",reversedReviews)
          alert(response.data.message+"🎇🎇🎇🎇🎇");
         // navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error,"*******+++++++++++++");
        alert("Something went wrong in creating user");
      });


    }





    const navigate = useNavigate();
    
     


    return (
    
        /*  #, Title, Content, Date-time, Edit, Delete
# - Static count number starting with 1
*/        


        <div className="App">
            <button onClick={() => navigate('/new')}> New Review </button>
            <h1>
            </h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date-time</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.title}</td>
                            <td>{val.content}</td>
                            <td>{val.date}</td>
                            <td>
                             
                            </td>
                            <td>delete</td>
                        </tr>
                    )
                })}
            </table>
</div>
);
}
 
export default ReviewsList;