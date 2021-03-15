import loginStyle from '../../styles/Login.module.css'

function Login(params) {
  console.log('paramd', params)

  return (
    <div className={loginStyle.login}>
      <div>
        <div>left</div>
        <div>right</div>
      </div>
    </div>
  )
}

export default Login
