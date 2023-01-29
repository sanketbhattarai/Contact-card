import React from "react";

export default function Top(){
    return(
    <div className="Top">
        <img className="Profileimage" src="./src/pp.png" alt="this is image" />
        <h1>Sanket Bhattarai</h1>
        <h4>Frontend developer</h4>
        <a className="Web" href="#">sanketbhattarai.website</a><br />
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
        {/* <i class="material-symbols-outlined">mail</i> */}
            <button className="email">Email</button>
            </a>
        <a href="https://www.linkedin.com/in/sanket-bhattarai-ab140625b/" target="_blank">
            <button className="linkedin">Linkedin</button>
        </a>
    </div>
    )
}