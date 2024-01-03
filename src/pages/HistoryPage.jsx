import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import HistoryCard from '../components/HistoryCard';
import { useUser } from '@clerk/clerk-react';

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    // Fetch posts when the component mounts
    handleFetchPost();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleFetchPost = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      // No need to include a body in a GET request
      redirect: 'follow',
    };

    fetch(`https://syllabus-ai.onrender.com/history?user_id=${user.id}`, requestOptions)
      .then(response => response.json()) // Assuming the response is in JSON format
      .then(data => {
        // Set the fetched posts in the state
        setHistory(data.posts); // Adjust 'data.posts' based on your actual API response structure
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className='w-full flex flex-col items-center gap-8'>
      <NavBar />
      <div className='flex flex-col items-center w-full lg:w-4/12 p-3'>
        <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
           History
        </h2>

        <div className='w-full flex flex-col items-center py-8 gap-3 sm:px-2'>
          {/* Map through the 'history' state to display the posts */}
          {history.map((post, index) => (
            <HistoryCard
              key={post.syllabus} // Make sure to set a unique key for each item in the list
              title={post.syllabus} // Adjust based on your actual post structure
              tag={post.type} // Adjust based on your actual post structure
            />
          ))}
        </div>
      </div>
    </div>
  );
}
