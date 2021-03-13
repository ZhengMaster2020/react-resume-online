import styles from '../../styles/Resume.module.css'
function Resume({ Component, pageProps }) {
  console.log('name', pageProps)
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>我的简历</li>
          <li>简历库</li>
          <li>回收站</li>
          <li>项目文档</li>
        </ul>
      </header>
    </>
  )
}

export default Resume
