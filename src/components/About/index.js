import React from 'react'
import coverImage from "../../assets/cover/LINK.jpg"


function About() {

  return (
    <section className="my-5 about-container"  >
    <div >
      <h1 id="about"></h1>
      <img src={coverImage} id= "myprofileimage" className="my-2" style={{ height: "auto", width: "65%" }} alt="cover" />
    </div>
      <div id="about-text" className="my-2">
        <p>
        Hi! I'm Staisha Knight and welcome to my portfolio. I recently became certified in Full Stack Development 
         at The University of Texas coding bootcamp. I am also currently a freelancer for small businesses, helping 
         people uniquely connect with their target audience. I have a long history of producing creative content, which 
         includes video production and social media management. I'm highly skilled in the creative side of development 
         and I appreciate clean, high quality and elegant development.
         Please feel free to connect with me on LinkedIn or through email! 
         </p>

      </div>
      
    </section>

    
  )
}

export default About