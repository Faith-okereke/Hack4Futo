import React from "react";
import NavBar from "../components/NavBar";
import student from "../assets/StudentLearning.jpg";
const HomePage = () => {
  return (
    <div className="poppins-regular">
      <NavBar />
      <div>
        <h1 className="font-bold text-4xl text-black text-left p-4 absolute top-52 left-[25%] playwrite-au-vic-guides-regular ">
          Welcome to LearnSimplified
        </h1>
        <img src={student} className="w-full h-[400px] object-cover" alt="" />
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className="font-bold text-lg">Get summarized materials</h2>
          <p>Upload documents or images to get summary. </p>
        </div>
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className="font-bold text-lg">Generate Q/A from materials</h2>
          <p>
            Upload documents or images to generate possible questions and
            answers{" "}
          </p>
        </div>
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className="font-bold text-lg">Get materials and PQs </h2>
          <p>
            You and other studnets can upload useful materials for present and
            next years{" "}
          </p>
        </div>
      </div>
      <div>
        <input type="file" />
      </div>
    </div>
  );
};

export default HomePage;
