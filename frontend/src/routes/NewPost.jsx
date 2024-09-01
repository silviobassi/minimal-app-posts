import classes from './NewPost.module.css'
import { Form, Link, redirect } from 'react-router-dom'
import Modal from '../components/Modal.jsx'

function NewPost() {
  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} name="body" />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required name="author" />
          </p>
          <p className={classes.actions}>
            <Link to="/" type="button">
              Cancel
            </Link>
            <button>Create Post</button>
          </p>
        </Form>
      </Modal>
    </>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const post = Object.fromEntries(formData)
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })

  return redirect('/')
}

export default NewPost
