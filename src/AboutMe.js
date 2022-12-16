import './AboutMe.css';

import portrait from "./images/logo.PNG";

function AboutMe() {
  return (
    <div>
      <h1>A Graphic Designer Fascinated with the User Experience</h1>
      <img className="self-portrait" src={portrait} alt="A picture of my logo"></img>
      <p className="introduction">To me, the thing that makes art made with computers unique is the potential for interaction with the audience. From website design to video games,
        the beauty in Computer Science for me lies in understanding my user. How can this website be as accessible as possible to as many different people
        as possible? How can I guide someone through the experience of my end product, how can I track what they see, and what will they choose to do with
        my work? The idea of that conversation with my audience is key to the creation of my work, and to that end I devoted a series of projects to exploring
        different facets of communication with a user through inclusive, interactive, intentional website design.
      </p>
      
    </div>
  );
}

export default AboutMe;
