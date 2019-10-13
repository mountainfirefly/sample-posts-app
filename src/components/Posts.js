import React from 'react'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (!posts.length) {
    return <p>No Posts Found.</p>
  }

  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return (
            <li style={{ textAlign: 'left' }} key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts
