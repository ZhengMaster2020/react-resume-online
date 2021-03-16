import styles from '../../styles/Resume.module.css'
import Cookies from 'js-cookie'
import MenuList from '../components/MenuList'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Dropdown, Avatar, message } from 'antd'

const Resume = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  useEffect(() => {
    const auth = Cookies.get('auth')
    if (!auth) {
      message.error('权限失效，请重新登录！')
      router.push('login')
      return
    }
    const { username } = auth && JSON.parse(auth)
    setName(username)
  })

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Dropdown overlay={MenuList}>
            <Avatar size={40} className={styles.avatar}>
              {`${name.split('')[0]}${name.split('')[1]}`}
            </Avatar>
          </Dropdown>
        </div>
        <ul className={styles.headerRight}>
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
