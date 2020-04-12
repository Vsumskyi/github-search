import React, {useContext, useEffect} from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ( {match} ) => {
  const {getUsers, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUsers(urlName)
    getRepos(urlName)
     // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gist
  } = user

  return (
    <>
      <Link to='/' className='btn btn-link' >На головну</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
              src={avatar_url} 
              alt={name} 
              style={{height:150}}  />
              <h1>{name}</h1>
              {location && <p>Місцезнаходження: {location}</p>}
            </div>
            <div className="col">
              {
                bio &&  <>
                <h3>BIO</h3>
                <p>{bio}</p>
                        </>
              }
              <a 
                href={html_url} 
                rel="noopener noreferrer"
                className='btn btn-dark'
                target='_blank' > 
              Відкрити профіль 
              </a>
              <ul>

                {login && 
                <li>
                  <strong>Username:</strong> {login} 
                </li>}

                {company && 
                <li>
                  <strong>Компанія:</strong> {company} 
                </li>}

                {blog && 
                <li>
                  <strong>Website:</strong> {blog} 
                </li>}
                <div className="badge badge-primary">Підписники: {followers}</div>
                <div className="badge badge-success">Підписаний: {following}</div>
                <div className="badge badge-info">Репозиторії: {public_repos}</div>
                <div className="badge badge-dark">Gist: {public_gist}</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}