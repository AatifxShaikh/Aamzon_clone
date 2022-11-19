// import React, { useState, useEffect } from 'react';
// import { db } from "./firebase";
// import './Orders.css'
// import { useStateValue } from "./StateProvider";
// import Order from './Order'

// function Orders() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if(user) {
//         db
//         .collection('users')
//         .doc(user?.uid)
//         .collection('orders')
//         .orderBy('created', 'desc')
//         .onSnapshot(snapshot => (
//             setOrders(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             })))
//         ))
//     } else {
//         setOrders([])
//     }

//   }, [user])

//     return (
//         <div className='orders'>
//             <h1>Your Orders</h1>

//             <div className='orders__order'>
//                 {orders?.map(order => (
//                     <Order order={order} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Orders
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Feedback } from '@mui/icons-material';



function Orders(){

    const [name,setName]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[Feedback,setFeedback]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,phonenumber,age,email);
        const data={
            Name:name,
            Phone:phonenumber,
            Age:age,
            Email:email,
            Feedback:Feedback
        }
        axios.post('https://sheet.best/api/sheets/a92adea1-46e6-43d0-a7c2-67e4d09f87b9',data).then((response)=>{
            console.log(response);
           setName("");
           setPhonenumber("");
           setAge("");
           setEmail("");
           setFeedback("");
        }
        )
    }

return(
    <div className="container">

        <br></br>
        <h1>Survey Form</h1>
        <br></br>
        
        <form autoComplete="off" className="form-group"
        onSubmit={handleSubmit}>

        <label>Name</label>
        <input type='text' placeholder="Enter your name"  required className="form-control"
        onChange={(e)=>setName(e.target.value)}value={name}/>
        <br></br>
        <label>PhoneNumber</label>
        <input type='text' placeholder="Enter your number"  required className="form-control"
        onChange={(e)=>setPhonenumber(e.target.value)}value={phonenumber}/>
        <br></br>
        <label>Age</label>
        <input type='text' placeholder="Enter your age"  required className="form-control"
        onChange={(e)=>setAge(e.target.value)}value={age}/>
        <br></br>
        <label>Email</label>
        <input type='text' placeholder="Enter your email"  required className="form-control"
        onChange={(e)=>setEmail(e.target.value)}value={email}/>
        <br></br>
        <label>Feedback</label>
        <input type="text" placeholder='Enter your Feedback' required className='form-control'
        onChange={(e)=>setFeedback(e.target.value)}value={Feedback}/>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button type='submit' className="btn btn-primary">Submit</button>
        </div>
        </form>
        
    </div>
);

}

export default Orders;