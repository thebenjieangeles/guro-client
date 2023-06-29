import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import questionPage from "../assets/questionPage.png";
import axios from "axios";

function TeacherPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return (
    <div>
      <div className=" bg-blue-800 h-[72rem] flex flex-col justify-center items-center gap-6 2xl:flex-row 2xl:h-[77rem] 2xl:justify-start">
        <div className="">
          <img
            src={questionPage}
            alt="Contact Page"
            className=" w-[23rem] h-[23rem] md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] 2xl:ml-[30rem] m-auto"
          />
        </div>
        <div className="w-3/4 lg:w-1/2">
          {questions.map((question) => (
            <div key={question._id} className="bg-white p-4 mb-4 rounded">
              <p>{question.questionText}</p>
            </div>
          ))}
        </div>

        <form className="text-center bg-white p-4 rounded w-[20rem] md:w-[45rem] lg:w[60rem] 2xl:w-[80rem] 2xl:mr-[30rem]">
          <h2 className="text-2xl font-bold mb-4">Add a New Question</h2>
          <div className="mb-4">
            <label htmlFor="questionText" className="block font-bold text-left">
              Question Text:
            </label>
            <input
              type="text"
              id="questionText"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherPage;
