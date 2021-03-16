import styles from '../../styles/Resume.module.css'
import Cookies from 'js-cookie'
import MenuList from '../components/MenuList'
import ResumeDepot from '../components/ResumeDepot'
import ResumeTemplDepot from '../components/ResumeTemplDepot'
import TrashBin from '../components/TrashBin'
import ResumeDocument from '../components/ResumeDocument'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Dropdown, Avatar, message, Menu } from 'antd'
import {
  DiffOutlined,
  DropboxOutlined,
  RestOutlined,
  ReadOutlined,
} from '@ant-design/icons'

const menuListData = [
  {
    key: 'resume',
    label: '我的简历库',
    icon: <DiffOutlined />,
    page: <ResumeDepot />,
  },
  {
    key: 'tmpl',
    label: '简历模板库',
    icon: <DropboxOutlined />,
    page: <ResumeTemplDepot />,
  },
  { key: 'bin', label: '回收站', icon: <RestOutlined />, page: <TrashBin /> },
  {
    key: 'doc',
    label: '项目文档',
    icon: <ReadOutlined />,
    page: <ResumeDocument />,
  },
]

const Resume = () => {
  const router = useRouter()
  const [currentName, setCurrentName] = useState('resume')
  const [name, setName] = useState('')

  // 获取用户信息
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

  const handleMenuSelect = ({ key }) => setCurrentName(key)

  // 切换menu加载对应的组件
  const renderCurrentPage = () => {
    const currentMenu = menuListData.find(({ key }) => key === currentName)
    return currentMenu ? currentMenu.page : <ResumeDepot />
  }

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

        <Menu
          style={{ background: '#f5f5f7' }}
          className={styles.headerRight}
          selectedKeys={[currentName]}
          mode="horizontal"
          onSelect={handleMenuSelect}
        >
          {menuListData.map(({ key, label, icon }) => (
            <Menu.Item key={key} icon={icon}>
              {label}
            </Menu.Item>
          ))}
        </Menu>
      </header>
      <div>
        {/* 根据不同的条件动态加载组件 */}
        {renderCurrentPage()}
      </div>
    </>
  )
}

export default Resume
