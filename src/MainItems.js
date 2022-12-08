import './MainItems.css';
import { useState } from "react"

// import the images needed
import development from "./images/Development.png";
import SampleBox from './SampleBox';

function MainItems() {
  const UserIteraction =
  {
    "name": "Red Shoes",
    "description": "A project unlike any other  and CSS can be both used to display align and float images on your website. In this article, we’ll show you how to use HTML to align images to text (or other page elements) and how to use CSS to float images, wrapping text around it as you’d see in a newspaper or magazine",
    "image": development,
    "link": 20
  }

  const Development =
  {
    "name": "Red Shoes",
    "description": "A project unlike any other",
    "image": development,
    "link": 20
  }

  const Iterative =
  {
    "name": "Red Shoes",
    "description": "A project unlike any other",
    "image": development,
    "link": 20
  }

  const Responsive =
  {
    "name": "Red Shoes",
    "description": "A project unlike any other",
    "image": development,
    "link": 20
  }

  return (
    <div className="MainItems">
      <h2 className="section-title">Interactive</h2>
      <SampleBox project={UserIteraction}></SampleBox>

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
