import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homePage from "../assets/homePage.png";
import axios from "axios";

function TeacherPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-blue-800 h-[79rem] flex flex-col justify-center items-center gap-6">
        <div className="w-3/4 lg:w-1/2">
          {questions.map((question) => (
            <div key={question._id} className="bg-white p-4 mb-4 rounded">
              <p>{question.questionText}</p>
            </div>
          ))}
        </div>

        <form className="w-3/4 lg:w-1/2 bg-white p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Add a New Question</h2>
          <div className="mb-4">
            <label htmlFor="questionText" className="block font-bold">
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
