import {
  depot,
  tabWrap,
  tabPane,
  tabItem,
} from '../../../styles/Depot.module.css'

import { Tabs } from 'antd'
import {
  FolderOpenOutlined,
  UploadOutlined,
  PlusOutlined,
} from '@ant-design/icons'
const { TabPane } = Tabs

const ResumeDepot = () => {
  return (
    <div className={depot}>
      <div className={tabWrap}>
        <Tabs tabPosition="left">
          <TabPane
            tab={
              <span>
                <PlusOutlined />
                新建简历
              </span>
            }
            key="1"
          >
            <div className={tabItem}>new Obj</div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <UploadOutlined />
                导入简历
              </span>
            }
            key="2"
          >
            Content of Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <FolderOpenOutlined />
                我的简历
              </span>
            }
            key="3"
          >
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ResumeDepot
