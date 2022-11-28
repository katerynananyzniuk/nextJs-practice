import {Navigation} from '../components/Navigation'
import Head from 'next/head'

export function MainLayout({ children, title = 'Next app' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content='next,react,javascript' />
        <meta name="description" content="NextJs practice" />
        <meta name="author" content="John Doe" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <style jsx>{`
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}