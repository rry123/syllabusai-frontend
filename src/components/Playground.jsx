import React, { useRef, useState } from 'react'
import NotesIcon from './NotesIcon'
import TestIcon from './TestIcon'
import LoadingBar from './LoadingBar'
import DOMPurify from 'dompurify';
import '../content.css'
import { useUser } from '@clerk/clerk-react';
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Playground() {
    const [syllabusInput, setSyllabusInput] = useState('')
    const [content, setContent] = useState('input syllabus to display content')
    const [isLoading, setisLoading] = useState(false)
    const [DownloadStatus,setDownloadable] = useState(false)
    const { user } = useUser()
    const myRef = useRef(null)




    const handleNotesRequest = () => {
        setisLoading(true)
        setDownloadable(false)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "syllabus": `${syllabusInput}`,
            "user_id": `${user.id}`
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
                console.log(content);
                setContent(content); // Set the content value to the variable
                setisLoading(false)
            })
            .catch(error => console.log('error', error));



    }

    const handleTestRequest = () => {
        setisLoading(true)
        setDownloadable(false)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "syllabus": `${syllabusInput}`,
            "user_id": `${user.id}`
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://syllabus-ai.onrender.com/test", requestOptions)
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                const content = data.data; // Extract content from the "data" field
                console.log(content);
                setContent(content); // Set the content value to the variable
                setisLoading(false);
                setDownloadable(true);
            })
            .catch(error => console.log('error', error));



    }

    const handleSyllabusChange = (e) => {
        const inputValue = e.target.value;

        // Truncate the input to the maximum length (280 characters)
        const truncatedValue = inputValue.slice(0, 280);

        // Update the state with the truncated value
        setSyllabusInput(truncatedValue);
    };

    const handleDownload = () => {
        const sanitizedContent = DOMPurify.sanitize(myRef.current.innerHTML);
        console.log(sanitizedContent);
        const input =sanitizedContent;
        console.log(input);
    
        html2canvas(input).then((canvas) => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
          pdf.save('downloaded-pdf.pdf');
        });
      };


    return (
        <div className='flex flex-col items-center  lg:w-4/12   p-3'>
            <div className='flex flex-col w-full gap-4'>


                <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
                    Generate
                </h2>
                <textarea
                    className="textarea textarea-bordered"
                    placeholder="Add your syllabus here"
                    onChange={handleSyllabusChange}
                    value={syllabusInput}
                />
                <p>{`${syllabusInput.length}/280 characters`}</p>

                <div className='flex flex-row items-center gap-2 w-full'>

                    <button
                        className="btn btn-active"
                        onClick={handleTestRequest}>
                        <TestIcon />
                        Generate Test
                    </button>
                    <button className="btn btn-active"
                        onClick={handleNotesRequest}>
                        <NotesIcon />
                        Generate Notes
                    </button>


                </div>

                <div className='flex items-center justify-center w-full  p-6 border-slate-700 border rounded-md'>


                    {isLoading ? <LoadingBar /> : <div className='flex flex-col gap-2 content' ref={myRef}><ReactMarkdown>{content}</ReactMarkdown></div>}


                </div>

            
                {DownloadStatus ? <button className="btn width:20rem" onClick={handleDownload}>download</button> : <></>}   
                


            </div>
        </div>

    )
}