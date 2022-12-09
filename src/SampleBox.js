import './SampleBox.css';

function SampleBox(props) {
  return (
    <div row className="info-box">
      {/* name*/}
			<h1 className="project-title">{props.project.name}</h1>
      {/* description */}
			<p className="project-description">{props.project.description}</p>
      {/* image */}
			<img className="project-img" src={props.project.image} alt={props.project.name}></img>
			{/* link button */}
			<button className="project-button"><a className="project-link" href={props.project.link}>READ MORE</a></button>
    </div>
  );
}

export default SampleBox;
