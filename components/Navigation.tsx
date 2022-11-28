import Link from 'next/link'

export function Navigation() {
  return (
    <>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: lavender;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  )
}