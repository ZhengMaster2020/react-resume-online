import loginStyle, {
  form,
  loginBtn,
  btnWrap,
} from '../../styles/Login.module.css'
import { Button, Carousel, Image, Input, Form, message } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const rules = [{ required: true, message: '必填项不能为空' }]

export const Login = () => {
  const currentRouter = useRouter()
  const [btnLoading, setBtnLoaidng] = useState(false)
  const [loginForm] = Form.useForm()

  // 表单验证通过后回调
  const onFinish = (values) => {
    console.log('values,', values)
    setBtnLoaidng(true)
    setTimeout(() => {
      setBtnLoaidng(false)
      Cookies.set('auth', JSON.stringify(values))
      currentRouter.push('/')
      message.success('登录成功！', 2000)
    }, 500)
  }

  const onResetFields = () => loginForm.resetFields()

  return (
    <div className={loginStyle.login}>
      <div className={loginStyle.content}>
        <div className={loginStyle.left}>
          <Form
            {...layout}
            name="loginForm"
            form={loginForm}
            className={form}
            onFinish={onFinish}
          >
            <Form.Item hasFeedback label="用户名" name="username" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item hasFeedback label="密码" name="password" rules={rules}>
              <Input.Password />
            </Form.Item>

            <Form.Item {...layout}>
              <div className={btnWrap}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={loginBtn}
                  loading={btnLoading}
                >
                  登录
                </Button>
                <Button
                  htmlType="button"
                  className={loginBtn}
                  onClick={onResetFields}
                >
                  重置
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <div className={loginStyle.right}>
          <Carousel autoplay dots={false} style={{ width: '633px' }}>
            <Image
              className={loginStyle.carouselImg}
              src="/images/banner1.png"
            />
            <Image
              className={loginStyle.carouselImg}
              src="/images/banner2.png"
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Login
