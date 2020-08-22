import React from "react";

function Footer (){
var today = new Date();
var year = today.getFullYear();

return(
    <footer>
        <p> copyright {year}</p>
    </footer>
) 

}

export default Footer;