import React from "react";
import { useState } from "react";
const Contact = () => { 
    const [data, setData] = useState({
        fullname:'',
        email:'',
        phone:'',
        msg:''
    });
    const chEvent = (event)=>{
        const  {name, value} = event.target;
        setData((preval)=>{
            return {
                ...preval,
                [name]: value,
            }
        }) 
    }
    const formSubmit = (event)=>{
        event.preventDefault();
        console.log(data.length)
    
        alert(`My full Name is ${data.fullname} and Email address is ${data.email} and Phone Number is ${data.phone} and i have a comment: ${data.msg}`)
    
}

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <h1 className="text-center">Contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto mb-5">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="fullname"
                    value={data.fullname}
                    onChange={chEvent}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="email"
                    value={data.email}
                    onChange={chEvent}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" 
                    name="phone"
                    value={Math.floor(data.phone)}
                    onChange={chEvent}
                    />
                </div>
                <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" 
                name="msg"
                value={data.msg}
                onChange={chEvent}
                 id="floatingTextarea2"></textarea>
                <label for="floatingTextarea2">Comments</label>
                </div>
                <button onClick={formSubmit} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </>)
}

export default Contact;