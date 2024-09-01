import Post from '../components/Post.jsx'
import classes from './PostList.module.css'
import { useLoaderData } from 'react-router-dom'

function PostList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Would you like to add one?</p>
        </div>
      )}
    </>
  )
}

export default PostList
