import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/chat', { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="main_container">
        <div className="w-full justify-center items-center items-center px-8">
          <form className="w-full text-center" onSubmit={handleSubmit}>
            <div className="md-6">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                
              >
                <h1>What do you want to know? </h1>
              </label>
            </div>

            <div className="py-4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
           
           
          <div className="response">
            <p>{response}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
