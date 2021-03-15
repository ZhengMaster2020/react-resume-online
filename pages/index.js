import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    !Cookies.get('Auth') && router.push('login')
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>React Resume Online </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/resume">Resume Online</a>
        </h1>

        <p className={styles.description}>
          Website created by
          <code className={styles.code}>ZhengMaster</code>
        </p>

        <div className={styles.grid}>
          <a href="/resume" className={styles.card}>
            <h3>Create Resumes &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>My Resume Depot &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Recycle Bin &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Document &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" rel="noopener noreferrer">
          Powered by ZhengMaster
          <Image
            src="/favicon.ico"
            alt="logo"
            height={30}
            width={30}
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  )
}
