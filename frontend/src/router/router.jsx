import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../routes/RootLayout.jsx'
import Posts, { loader as postsLoader } from '../routes/Posts.jsx'
import NewPost, { action as newPost } from '../routes/NewPost.jsx'
import PostDetails, {
  loader as postDetailsLoader
} from '../routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPost },
          {
            path: '/edit-post/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ]
      }
    ]
  }
])

export default router
