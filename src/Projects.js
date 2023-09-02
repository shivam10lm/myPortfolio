import React from "react";
import Card from "./Card";
const Projects = () => {
  return (
    <div className="projects" id="project">
      <span></span>
      <h1>Projects</h1>
      <div className="projects-inner">
        <Card
          img="https://images.pexels.com/photos/982104/pexels-photo-982104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Car Game"
          text="Car games are games played to pass the time on long car journeys, often started by parents to amuse restless children."
          href="https://shivam10lm.github.io/carGame/"
        />
        <Card
          img="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Blog Website"
          text="A blog is a informational website published on the World Wide Web. We are team of talented developer making websites."
          href="https://shivam10lm.github.io/shivamBlog/"
        />
        <Card
          img="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Food Delivery"
          text="Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking."
          href="https://shivam10lm.github.io/realworld/html/index.html"
        />
        <Card
          img="https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Youtube Clone"
          text="Youtube Clone is a web application that works and offers similar functionalities to the Youtube"
          href="https://csb-851kug.netlify.app/"
        />
      </div>
    </div>
  );
};
export default Projects;
