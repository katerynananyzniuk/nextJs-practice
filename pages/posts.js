import {MainLayout} from '../layouts/MainLayout'
import {useState, useEffect} from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:8000/posts')
      const json = await response.json()
      setPosts(json)
    }
    load()
  },[])
  return (
    <MainLayout title="Posts page">
      <h1>Posts page</h1>
      <pre>
        {JSON.stringify(posts,null,2)}
      </pre>
    </MainLayout>
  )
}