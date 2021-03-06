import {
  depot,
  tabWrap,
  tabPane,
  tabItem,
  customTabs,
} from '../../../styles/Depot.module.css'

import ReusmeAdd from './components/ResumeAdd'
import ResumeImport from './components/ResumeImport'

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
        <Tabs tabPosition="left" className={customTabs}>
          <TabPane
            tab={
              <span>
                <PlusOutlined />
                新建简历
              </span>
            }
            key="add"
            className={tabPane}
          >
            <div className={tabItem}>
              <ReusmeAdd />
            </div>
          </TabPane>
          <TabPane
            key="import"
            tab={
              <span>
                <UploadOutlined />
                导入简历
              </span>
            }
          >
            <ResumeImport />
          </TabPane>
          <TabPane
            tab={
              <span>
                <FolderOpenOutlined />
                我的简历
              </span>
            }
            key="my"
          >
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ResumeDepot
