import {MainLayout} from '../layouts/MainLayout'
import {useState, useEffect} from 'react'
import Link from 'next/link'

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:8000/posts')
      const data = await response.json()
      setPosts(data)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
  
  return (
    <MainLayout title="Posts page">
      <h1>Posts page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return {posts: null}
  }
  const response = await fetch('http://localhost:8000/posts')
  const data = await response.json()
  return {
    posts: data
  }
}