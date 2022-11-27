import {useState, useEffect} from 'react'
import Link from 'next/link'
import {MainLayout} from '../../layouts/MainLayout'
import { useRouter } from 'next/router'

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:8000/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])
  
  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
  
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button>
        <Link href={'/posts'}>Back to all posts</Link>
      </button>
    </MainLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {post: null}
  }
  const response = await fetch(`http://localhost:8000/posts/${query.id}`)
  const data = await response.json()
  return {
    post: data
  }
}