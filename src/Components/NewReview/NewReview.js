import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function NewReview() {
    const navigate = useNavigate();
    const [name , setName] = useState('');
    const [age, setAge] = useState('');
    
     const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
      // below function will be called when user 
    // click on submit button .
    const handleSubmit = (e) => {
        const date = new Date();
           const person = { title: "default-title", content: "default-content", date:new Date() }
        person.title = name;
        person.content = age;
        person.date = date.getTime;
        console.log(person.title," ",person.content,person.date);
    
        // display alert box with user 
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
          '" ,Age :"' + age + '"');
      
     axios
    .post("http://localhost:3004/reviews-api/add",person)
    .then((response) => {
      alert(response.data.message+"🎇🎃🎃🎃");
      //if user created
      
      if (response.data.message === "new review created!") {
        //navigate to login
      //  navigate("/login");
        //  alert(response.data.message+"🎇🎃🎃🎃");  
          
        //  localStorage.setItem("title",response.data.token)
        //  localStorage.setItem("content",response.data.username)
         //localStorage.setItem("userObj",JSON.stringify(response.data.userObj))
         console.log("review CREATED")
        
      }
      else
      {
        alert(response.data.message+"🎇");
      }
    })
    .catch((error) => {
      console.log(error,"*******+++++++++++++");
      alert("Something went wrong in creating review");
    });
      
      
       navigate('/');
      
      
      
      
      
      
      
      
      
        //navigate('/')
    
    }

    return (
        <div>
            <h1>New Review</h1>
     
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit() 
        function will be called .*/}
        <label >
          Title:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          Content:
        </label><br/>
       
        <textarea type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                </textarea>
                <br/>
                <input type="submit" value="Save" />
                <br/>
                <input type="reset" value="reset" onClick={()=>{ setName('');setAge('')}} />
                <br/>
                <input type="button" onClick={()=>{navigate('/')}} value="Cancel"/>
      </form>
        </div>
    )
}

export default NewReview

