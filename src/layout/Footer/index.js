import React, { useEffect } from "react";


const Footer = () => {
    return(
        <footer>
            <ul>
                <li><a href=""><p><span>&copy;</span> Copyright</p></a></li>
                <li><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement"><p>Privacy</p></a></li>
                <li><img src="./assets/logo.png" /></li>
                <li><a href="https://docs.github.com/en/rest"><p>API</p></a></li>
                <li><a href="https://github.com/security"><p>Security</p></a></li>
                
            </ul>
        </footer>
    )
}

export default Footer;