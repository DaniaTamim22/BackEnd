import React from 'react'
import { useState } from 'react'
import './App.css'
import Post from './components/Post'

const App = () => {

  //let counter = 0
  // const [counter, setCounter] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam itaque! Suscipit tempore exercitationem vero necessitatibus iusto, eaque nam asperiores!'
    },

    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam itaque! Suscipit tempore exercitationem vero necessitatibus iusto, eaque nam asperiores!'
    },

    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam itaque! Suscipit tempore exercitationem vero necessitatibus iusto, eaque nam asperiores!'
    }
  ]
  )

  // console.log(counter)

  // const increment = () => {
  //   setCounter(counter + 1)
  //   console.log('inner ' + counter)
  // }


  const toggleLogin = () => {
    setIsLoggedIn(state => !state)
  }
  return (
    <div>
      {isLoggedIn ? <h1 className='text-center mb-2'>Posts</h1> : <h1 className='text-center mb-2' >Please log in </h1>}
      {/* <h1>Counter : {counter}</h1>
      <button onClick={increment}>increment</button> */}

      <div className="container">
        {/* <Post title="Post 1" body="this is a body" /> */}

        {/* {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))} */}

        {/* {posts.map(post => {
          if (isLoggedIn) {
            return <Post key={post.id} title={post.title} body={post.body} />
          }
          else {
            return ''
          }
        }
        )} */}

        {/* {posts.map(post => (
          isLoggedIn ? <Post key={post.id} title={post.title} body={post.body} /> : ''
        ))} */}

        {isLoggedIn && posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}

        <button onClick={toggleLogin}>Login</button>
        {/* <div className="card"> Hej</div> */}
      </div>
    </div>
  )
}

export default App