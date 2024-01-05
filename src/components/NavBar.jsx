import React, { useState, useEffect } from 'react';
import Drawer from './Drawer';
import Historyicon from './Historyicon';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";
import CoinsIcon from './CoinsIcon';

export default function NavBar({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    handleFetchUser(); // Fetch user when the component mounts
  }, []);

  const handleFetchUser = () => {
    // Assuming user.id is available from Clerk
    fetch(`https://syllabus-ai.onrender.com/user/?user_id=${user.id}`)
      .then(response => response.json())
      .then(data => {
        setCurrUser(data.user);
      })
      .catch(error => console.error('Error fetching user:', error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <Drawer></Drawer>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate('/playground')}>
          syllabus.ai
        </a>
      </div>
      <div className="flex-none">
        <div className="btn btn-square btn-ghost flex flex-row gap-1 mr-8">
          <CoinsIcon/>{ currUser ? currUser.available_tokens : 29 }
        </div>
      </div>
    </div>
  );
}
