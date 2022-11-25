import Router from 'next/router'
import {MainLayout} from '../../layouts/MainLayout'

export default function About() {
  function linkHandler() {
    return Router.push('/posts')
  }

  return (
    <MainLayout title="About page">
      <h1>About page</h1>

      <button onClick={() => Router.push('/')}>Go back to home</button>
      <button onClick={linkHandler}>Go to posts</button>
    </MainLayout>
  )
}