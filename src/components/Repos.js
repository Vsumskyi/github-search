import React from 'react'

export const Repos = ({repos}) => (
  <>
  {repos.map(repo => (
    <div className="card mb-3" key={repo.id}>
      <div className="card-body">
        <a 
        href={repo.html_url} 
        rel="noopener noreferrer"
        target="_blamk"> {repo.name} </a>
      </div>
    </div>
  ))}
  </>
)