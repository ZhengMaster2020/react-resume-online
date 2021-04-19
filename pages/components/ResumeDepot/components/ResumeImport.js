import {
  resumeImport,
  importDoc,
  dragger,
} from '../../../../styles/Depot.module.css'
import { Upload, message, Button } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const ResumeImport = () => {
  const handleImport = () => {
    const params = {
      method: 'POST',
      body: JSON.stringify({ username: 'zhangsan', userId: '001' }),
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    }
    fetch('http://localhost:8888/upload', params)
      .then((res) => res.json())
      .then((data) => console.log('data,', data))
      .catch((err) => console.log('err', err))
  }

  return (
    <div className={resumeImport}>
      <div className={importDoc}>
        <Dragger {...props} className={dragger}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
          </p>
        </Dragger>
        <Button
          type="primary"
          style={{ marginTop: '20px' }}
          onClick={handleImport}
        >
          上传简历
        </Button>
      </div>
    </div>
  )
}

export default ResumeImport
