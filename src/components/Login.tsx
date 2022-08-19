import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { SignUp } from "./SignUp";




export function Login(){
    const [signUser, setSignUser] = useState<string>("");
    const [signPassword, setSignPassword] = useState<string>("");
    const navigate = useNavigate();
    

    const sign = async() => {
        try {
            const user = await signInWithEmailAndPassword(auth, signUser, signPassword);
            navigate("/next");
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
        <div className="d-flex">
            <div className="card bg-dark m-5 p-2 col-3">
                <div className="card-header">
                    <h5 className="text-center text-white">Login</h5>
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

            <div className="card bg-dark m-5 p-2 col-3">
                <div className="card-header">
                    <p className="text-center text-white">Or continue with:</p>
                </div>
                <div className="card-body d-flex-column">
                    <div>
                        <p className="btn bg-warning">Google</p>
                    </div>
                    <div>
                        <p className="btn bg-primary">Facebook</p>
                    </div>
                    <div>
                        <p className="btn bg-secondary">Github</p>
                    </div>
                </div>
            </div>

            <SignUp />
            </div>
        </>
    );
}