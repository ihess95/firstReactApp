import React from "react"

export default function MainContent(){
    return(
        <div className="mainContent">
        <div className="introduction">
            <h1>Ian Hess</h1>
            <h3>Frontend Developer</h3>
            <a href="https://github.com/ihess95">github.com/ihess95</a>
        </div>
        <div className="buttonDiv">
            <a href="mailto:ian.h.hess@gmail.com">
                <button className="email">
                    <img src="images/mail.svg"/>
                    Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ian-hess-169468217/">
                <button className="li">
                    <img src="images/linkedin.svg"/>
                    LinkedIn
                </button>
            </a>
        </div>
            <div className="copy">
                <h4>About</h4>
                    <p>I am learning to be a frontend developer and this is my first React project coded all on my own. React seems like a much nicer way to deal with creating websites. I am into it!</p>
                <h4>Interests</h4>
                    <p>Well I am into programming, I think that stuff is pretty neat. Aside from that I play music and listen to music. I play the odd video game or two and may even watch some show read some book.</p>
            </div>
        </div>
    )
}