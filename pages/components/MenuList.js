import { Menu } from 'antd'
import Cookies from 'js-cookie'

// 推出登录
const handleMenuItemClick = ({ key: name }) => {
  if (name === 'logout') {
    Cookies.remove('auth')
    window.location.href = '/login'
  }
}

// 头像下拉组件
const MenuList = () => (
  <Menu onClick={handleMenuItemClick}>
    <Menu.Item key="center">
      <a href="/resume">个人中心</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">退出登录</Menu.Item>
  </Menu>
)

export default MenuList
