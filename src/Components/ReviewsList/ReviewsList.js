import './ReviewsList.css';
//import Link from 'react-router-dom';
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { Button } from "@mui/material";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]
 
function ReviewsList() {
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
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
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