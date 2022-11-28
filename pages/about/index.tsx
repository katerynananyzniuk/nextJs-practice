import Router from 'next/router'
import {IAbout} from '../../interfaces/about'
import {MainLayout} from '../../layouts/MainLayout'

interface AboutPageProps {
  title: string
}

export default function About({ title }: AboutPageProps) {
  function linkHandler() {
    return Router.push('/about/info')
  }

  return (
    <MainLayout title="About page">
      <h1>{title}</h1>

      <button onClick={() => Router.push('/')}>Go back to home</button>
      <button onClick={linkHandler}>Go to info</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:8000/about')
  const data: IAbout = await response.json()

  return {
    title: data.title
  }
}