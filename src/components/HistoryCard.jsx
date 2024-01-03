import React from 'react'

export default function HistoryCard({title, tag, ...rest }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
  <div className="badge text-black bg-slate-200">{tag}</div>
    <p>{title}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-accent btn-sm">View</button>
    </div>
  </div>
</div>
  )
}
