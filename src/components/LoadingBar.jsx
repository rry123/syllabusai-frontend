import React, { useState, useEffect } from 'react';
import notebookGif from '../assets/notebook.gif'

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 12 * 1000; 
    const increment = 10; // Progress increment per interval

    const steps = interval / increment;
    let currentStep = 0;

    const updateProgress = () => {
      setProgress((currentStep / steps) * 100);
      currentStep++;

      if (currentStep <= steps) {
        setTimeout(updateProgress, increment);
      }
    };

    setTimeout(updateProgress, increment);

    return () => {
      clearTimeout(updateProgress);
    };
  }, []);

  return (
    <div className='flex flex-col'>  
    <span className=' mb-5'>Generating  ....</span>
    <progress className="progress progress-accent w-56" value={progress} max="100"></progress>
    </div>
  );
};

export default LoadingBar;
