import './MainItems.css';

// import the images needed
import development from "./images/Development.png";
import responsive from "./images/Responsive.png";
import personas from "./images/Personas.png";
import iterative from "./images/Iterative.png";
import SampleBox from './SampleBox';

function MainItems() {
  const Interactive =
  {
    "name": "Understanding User Interpretation and Interaction",
    "description": "The first task in being able to communicate with a user is understanding how they percieve what you present to them. Much like learning a language to communicate with someone in a foriegn place, the designs we create must cater to what the user innately understands. In this way I can create a project which a user can parse, and then intuit how they can best make use of its functionality. To explore this concept in an abstract space, I performed a user interaction excercise through obsercation of their use of a public interface.",
    "image": personas,
    "link": "https://happykitty412.wixsite.com/personas"
  }

  const Responsive =
  {
    "name": "Clarity and Responsivity",
    "description": "Once you understand how to communicate with a user, you must be able to accomodate their needs. Creating an interface which adapts to the needs of the user and their method of consuming your product is vital in ensuring equity in the user experience and avoiding frustration. Furthermore, understanding a user's interactive language is useless if user cannot see the elements you're using because of visual noise, lack of constrast or focus, or improper sizing. As an excercise in these concepts, I implemented a fundemental redesign of a website I felt had not fully implemented the guiding of their user experience.",
    "image": responsive,
    "link": "https://happykitty444.github.io/ResponsiveRedesign/"
  }

  const Iterative =
  {
    "name": "Feedback and Iteration",
    "description": "The best efforts in understanding a user's perception of a product and making that product responsive to their needs often still fall short of the best possible product. Figurative excercises in understanding generic users can only take a designer so far before assumptions are necessarily made which may compromise the intent of the product. The key element in rectifying this issue lies in creating specific user models with goals and demographics in mind, and allowing feedback to reshape the design to better accomodate the needs of the most common users. As an excercise in these concepts, I collaborated with 3 other students from Brown University's UIUX Design course to implement a website to mimic the mission of an existing startup and adjust our product according to feedback from real users.",
    "image": iterative,
    "link": "https://tiredlion1234.github.io/iterative-design/"
  }

  const Development =
  {
    "name": "Functionality",
    "description": "Once I have communiated to the user the intent of my product and the interactions it provides, I am now responsible for creating that interactivity. A project that is inviting but static will never have the same level of communication or reponsivity with a user as a project that adapts to their input and responds to their needs. As an excercise in mplementing this interaction, I created a website emulating a small drink shop in which a user can specify their dietary needs and pricing restrictions and have the site dynamically update to reflect their input.",
    "image": development,
    "link": "https://happykitty444.github.io/Development/"
  }
  
  return (
    <div className="MainItems">
      <h2 className="section-title">Interactive</h2>
      <SampleBox project={Interactive}></SampleBox>

      <h2 className="section-title">Responsive</h2>
      <SampleBox project={Responsive}></SampleBox>

      <h2 className="section-title">Iterative</h2>
      <SampleBox project={Iterative}></SampleBox>

      <h2 className="section-title">Developed</h2>
      <SampleBox project={Development}></SampleBox>

    </div>
  );
}

export default MainItems;
