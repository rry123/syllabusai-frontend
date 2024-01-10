import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function HistoryCard({ title, tag,response}) {
  const [contentStatus,setstatus] = useState(false);
  const [buttonName,setName] = useState("View")

  function setbutton(){
    setstatus(!contentStatus)
    setName(!contentStatus ? "Shrink" : "View")
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="badge text-black bg-slate-200">{tag}</div>
        <p>{title}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-accent btn-sm" onClick={setbutton}>{buttonName}</button>
        </div>
        {contentStatus ?<div> <ReactMarkdown>{response}</ReactMarkdown> </div>: <></>}
      </div>
    </div>
  )
}
