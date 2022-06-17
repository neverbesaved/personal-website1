import React from "react";
import Card from "../components/Card";
import api from "../assets/projects/api.png";
import auth from "../assets/projects/auth-page.png";
import blog from "../assets/projects/blog.png";
import comments from "../assets/projects/comments.png";
import timer from "../assets/projects/timer.png";
import monsters from "../assets/projects/monsters.png";
import rps from "../assets/projects/rockpaperscissors.png";
import simon from "../assets/projects/simon.png";
import tindog from "../assets/projects/tindog.png";
import todo from "../assets/projects/todo.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-[260vh] text-gray-300 bg-[#0A1929] lg:h-[200vh]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#EE550E] text-gray-300 ">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card
            link={api}
            description="API Generator"
            view="https://github.com/neverbesaved/SIIT_Alexandru_Ticau/tree/main/08_week_optional"
          ></Card>
          <Card
            link={auth}
            description="Auth App"
            view="https://github.com/neverbesaved/WDB/tree/main/Auth-module"
          ></Card>
          <Card
            link={blog}
            description="Blog Website"
            view="https://github.com/neverbesaved/WDB/tree/main/blog-project"
          ></Card>
          <Card
            link={comments}
            description="Comment Section"
            view="https://github.com/neverbesaved/SIIT_Alexandru_Ticau/tree/main/05_week"
          ></Card>
          <Card
            link={timer}
            description="Digital Timer"
            view="https://github.com/neverbesaved/SIIT_Alexandru_Ticau/tree/main/07_week"
          ></Card>
          <Card
            link={monsters}
            description="Monster Game"
            view="https://github.com/neverbesaved/SIIT_Alexandru_Ticau/tree/main/11_week"
          ></Card>
          <Card
            link={simon}
            description="Simon Game"
            view="https://github.com/neverbesaved/WDB/tree/main/Simon-Game-main/Simon-Game-main"
          ></Card>
          <Card
            link={tindog}
            description="Tindog SPA"
            view="https://github.com/neverbesaved/WDB/tree/main/TinDog-WDB2021-main/TinDog-WDB2021-main"
          ></Card>
          <Card
            link={todo}
            description="Todo App"
            view="https://github.com/neverbesaved/WDB/tree/main/todolist-v1"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
