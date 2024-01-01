import React, { useState } from 'react'
import NotesIcon from '../components/NotesIcon'
import TestIcon from '../components/TestIcon'




export default function Playground() {
    const [syllabusInput, setsyllabusInput] = useState('')
    const [content, setContent] = useState('input syllabus to display content')

    const handleNotesRequest = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "syllabus": `${syllabusInput}`
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        fetch("https://syllabus-ai.onrender.com/notes", requestOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const content = data.data; // Extract content from the "data" field
            console.log(content); // Optional: Log the content if needed
            setContent(content); // Set the content value to the variable
        })
        .catch(error => console.log('error', error));

      
        
    }

  return (
    <div className='flex flex-col items-center  lg:w-4/12   p-1'>
    <div className='flex flex-col w-full gap-4'>
       <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
         Generate 
        </h2>
        <textarea className="textarea textarea-bordered" 
        placeholder="Add your syllabus here " 
        onChange={(e)=> setsyllabusInput(e.target.value)
        }>
        {syllabusInput}
        </textarea>

        <div className='flex flex-row items-center gap-2 w-full'>
        <button 
        className="btn btn-active"
        onClick={handleNotesRequest}>
            <TestIcon/>
            Generate Test</button>
        <button className="btn btn-active">
            <NotesIcon/>
             Generate Notes
             </button>

        </div>

        <div>
            <p>
                {content}
            </p>
        </div>

    </div>
    </div>
  )
}
