import '../App.css'
import PostList from './PostList.jsx'
import { Outlet } from 'react-router-dom'

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const { posts } = await response.json()
  return posts
}
