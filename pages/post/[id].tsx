import {useState, useEffect} from 'react'
import Link from 'next/link'
import {MainLayout} from '../../layouts/MainLayout'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'
import {IPost} from '../../interfaces/post'

interface PostPageProps {
  post: IPost
}

export default function Post({ post: serverPost }: PostPageProps) {
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

interface PostNextPageContext extends NextPageContext{
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return {post: null}
  }

  const response = await fetch(`http://localhost:8000/posts/${query.id}`)
  const data: IPost = await response.json()
  return {
    post: data
  }
}

// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {post: null}
//   // }
//   const response = await fetch(`http://localhost:8000/posts/${query.id}`)
//   const data = await response.json()
//   return {
//     props: { post: data }
//   }
// }