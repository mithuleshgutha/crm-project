import React, {useState,useEffect} from "react"
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import Dashboard from "../pages/Dashboard";

const T = () => {
    
//   const [email,setEmail] = useState('');
//   const [pass,setPass] = useState('');
//   const history = useNavigate();
  const [arr,setArr] = useState([]);
  //const [url,setUrl] = useState('');
  
  useEffect(()=>{
    //const url = "http://localhost:4500/crm/login";
    fetch("http://localhost:3020/a")
    .then(result => result.json())
    .then(data => {
        setArr(data)
        console.log("data",data);
    });
    fetch("http://localhost:3020/a")
    .then(result => result.json())
    .then(data => {
        setArr(data)
        console.log("data2",data);
    });
        //.catch((err)=>alert(err));
},[])
var sum = 0;
const ad = arr.map((dat) => sum  = sum + dat );
console.log('sum:' + sum)
  return (
      <>
          
      </>
    )
}

export default T;
