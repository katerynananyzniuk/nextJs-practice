import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../layouts/MainLayout'

export default function Index() {
  return (
    <MainLayout title="Home Page">
      <h1>Hello from NextJs</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/posts">Posts</Link></p>
      <p>NextJs is made easy</p>
    </MainLayout>
  )
}