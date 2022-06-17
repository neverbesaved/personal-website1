import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-[180vh] bg-[#0A1929] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-[#EE550E]">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi , i'm Alex , nice to meet you.
            </p>
          </div>
          <div>
            I am passionate about web-development and front-end development in
            particular. Highly interested in modern technologies, music, sport
            and video-games. I have knowledges in different areas of
            programming, including Javascript, NodeJs(Express), React, EJS ,
            git, MongoDB , GitHub and basic knowledges of different high level
            programming languages , such as Java & Python.
          </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-4 mt-[30px]">
            <div>
              <p className="text-2xl border-b-2 border-[#EE550E]">Hard Skills :</p>
              <ul>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/javascript.png" />Javascript</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/html.png" />HTML5</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/css.png" />CSS3</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/react.png" />React</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/express.png" />Express</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/mongo.png" />MongoDB</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/npm.png" />npm</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/git.png" />git</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/tailwind.png" />tailwind</li>
                <p className="mt-4 text-2xl text-right">and others.</p>
              </ul>
            </div>
            <div>
            <p className="text-2xl border-b-2 border-[#EE550E]">Soft Skills :</p>
              <ul>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/stress.png" />Stress-resistant</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/team.png" />Team player</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/open-mind.png" />Open minded</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/time.png" />Time management skills</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/communication.png" />Communication skills</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/discipline.png" />Disciplined</li>
                <li className="py-2"><img className="w-[30px] inline mr-2" src="./src/assets/problem.png" />Problem Solving skills</li>
                <div className="flex mx-auto h-[60px] justify-center mt-10">
                  <a href="src/assets/CV_Ticau_Alexandru_ro.pdf"><div className=" mx-4 text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EE550E] hover:border-[#EE550E]"> CV RO</div>
                   </a>
                   <a href="src/assets/CV_Ticau_Alexandru_en.pdf"><div className=" mx-4 text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EE550E] hover:border-[#EE550E]"> CV EN</div>
                   </a>
                </div>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
