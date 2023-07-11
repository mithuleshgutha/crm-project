import React, {useState,useEffect} from "react"


const Abx = () => {
    
//   const [email,setEmail] = useState('');
//   const [pass,setPass] = useState('');
//   const history = useNavigate();
  const [arr,setArr] = useState([]);
  //const [url,setUrl] = useState('');
  var sum1 = 0;

    fetch("http://localhost:3020/a")
    .then(result => result.json())
        .then(data => {
          this.setState({arr:data})
          var a1 = data
          //this.setState({sum : 1000})
          console.log("data",a1);
          for (let index = 0; index < a1.length; index++) {
              sum1 =  sum1 + a1[index];
          }
          this.setState({sum : sum1})
      });
var sum = 0;
const ad = arr.map((dat) => sum  = sum + dat );
console.log('sum:' + sum)
  return (sum1)
}

export default Abx;
