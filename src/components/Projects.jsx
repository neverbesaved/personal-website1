import React from "react";
import Card from "../components/Card";
import api from "../assets/projects/api.png";
import auth from "../assets/projects/auth-page.png";
import blog from "../assets/projects/blog.png";
import comments from "../assets/projects/comments.png";
import hangman from "../assets/projects/hangman.png";
import monsters from "../assets/projects/monsters.png";
import rps from "../assets/projects/rockpaperscissors.png";
import simon from "../assets/projects/simon.png";
import tindog from "../assets/projects/tindog.png";
import todo from "../assets/projects/todo.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-[200vh] text-gray-300 bg-[#0A1929] lg:h-[200vh]"
    >
      <div className="max-w-[1000px mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-center text-4xl font-bold inline border-b-4 border-[#EE550E] text-gray-300 ">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid:cols-3 gap-8">
          <Card link={api} description="API Generator" view=""></Card>
          <Card link={auth} description="Auth App" view=""></Card>
          <Card link={blog} description="Blog Website" view=""></Card>
          <Card link={comments} description="Comment Section" view="https://github.com/neverbesaved/SIIT_Alexandru_Ticau/tree/main/05_week"></Card>
          <Card link={hangman} description="Hangman Game" view=""></Card>
          <Card link={monsters} description="Monster Game" view=""></Card>
          <Card link={rps} description="Rock-Paper-Scissors" view=""></Card>
          <Card link={simon} description="Simon Game" view=""></Card>
          <Card link={tindog} description="Tindog SPA" view=""></Card>
          <Card link={todo} description="Todo App" view=""></Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
