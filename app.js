import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = ( ) => { return (
    <div className="header">
        <div className="Logo-continer">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOTKBcsiyByiaLLcwB7WOpsY1iU1lAXAgZg&usqp=CAU"/>
            
        </div>
       <div className="nav-Items">
        <ul>
            <li> Home</li>
            <li> About us</li>
            <li> Contact Us</li>
            <li> Cart</li>

        </ul>
       </div>
    </div>
);
};

const AppLayout = ()=> {
    return(
    <div className ="app">
        <header/>
    </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
