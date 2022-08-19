import React from "react";
import { Link } from "react-router-dom";


export function NextPage(){
    return(
        <>
        <div>Second page</div><br/>
        <Link to="/" ><button>Logout</button></Link>
        </>
    );
}