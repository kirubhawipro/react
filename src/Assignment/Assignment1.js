import React from 'react';
import './Assignment1.css';
export  class Assignment1 extends React.Component{
render(){
    return(
       <h1>Happy Learning-React</h1>
    );
}
}

const data =[
    {Employee_ID : "101",Employee_name : "kirubha" , Employee_Email : "kirubha2020@gmail.com" },
    {Employee_ID : "102",Employee_name : "praburaj" , Employee_Email : "praburaj@gmail.com" },
    {Employee_ID : "103",Employee_name : "raja" , Employee_Email : "raja@gmail.com" },
    {Employee_ID : "104",Employee_name : "ravi" , Employee_Email : "ravi@gmail.com" },
    {Employee_ID : "105",Employee_name : "seker" , Employee_Email : "seker@gmail.com" },
]
export  class Assignment2 extends React.Component{
    render(){
        return(
            <div>
                <table>
               <tr>
                   <th>Employee_ID</th>
                   <th>Employee_name</th>
                   <th>Employee_Email</th>
               </tr>
               {data.map((val,key) => {
                   return(
                       <tr key = {key}>
                       <td>{val.Employee_ID}</td>
                       <td>{val.Employee_name}</td>
                       <td>{val.Employee_Email}</td>
                       </tr>
                   )
               })}
               </table>
               <h1>multiplication table</h1>
            </div>
        );
    }
    }