import './AboutMe.css';

import development from "./images/Development.png";

function AboutMe() {
  return (
    <div>
      <h1>Stephanie Da Cruz</h1>
      <img src={development} alt="A picture of myself"></img>
      <p>Junior @ Brown University</p>
      <p>Computer Science Major - Visual and Design Tracks</p>
      <p>Local to RI</p>
      <p className="introduction">To me, the thing that makes art made with computers unique is the potential for interaction with the audience. From website design to video games,
        the beauty in Computer Science for me lies in understanding my user. How can this website be as accessible as possible to as many different people
        as possile? How can I guide someone through the experience of my end product, how can I track what they see, and what will they choose to do with
        my work? The idea of that conversation with my audience is key to the creation of my work, and to that end I devoted a series of projects to exploring
        different facets of communication with a user through inclusive, interactive, intential website design.
      </p>
      
    </div>
  );
}

export default AboutMe;
