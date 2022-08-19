import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";



export function SignUp(){
    const [signUser, setSignUser] = useState<string>("");
    const [signPassword, setSignPassword] = useState<string>("");
    const navigate = useNavigate();
    

    const sign = async() => {
        try {
            const user = await createUserWithEmailAndPassword(auth, signUser, signPassword);
            navigate("/next")
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
        <div className="card bg-dark m-5 p-2 col-3">
            <div className="card-header">
                <h5 className="text-center text-white">Sign up</h5>
            </div>
            <div className="card-body">
                <form>
                    <label htmlFor="user" className="form-label text-white">Username:</label>
                    <input type="email" placeholder="Enter your email" id="user" className="form-control"  onChange={
                        (e) => {
                            setSignUser(e.target.value);
                        }
                    } /><br/>
                    <label htmlFor="password" className="form-label text-white">Password:</label>
                    <input type="password" placeholder="Enter your password" id="password" className="form-control"  onChange={
                        (e) => {
                            setSignPassword(e.target.value);
                        }
                    }/><br/>
                </form>
                <div className="btn btn-success" onClick={sign}>Continue</div>
            </div>
        </div>
        </>
    );
}