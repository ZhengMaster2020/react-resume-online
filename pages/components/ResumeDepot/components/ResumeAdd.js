import { Button } from 'antd'
import { useState } from 'react'
import {
  recommedWrap,
  recommedItem,
  recommedItemDesc,
  recommedItemImg,
  recommedItemTitle,
  recommedItemText,
  recommedItemBtn,
} from '../../../../styles/ResumeAdd.module.css'

const tmplDataSource = [
  {
    src: 'https://files.wondercv.com/cvsvuetpl-college.png',
    title: '零经验实习1',
    des: '学生找实习或全职工作，有一定实习经历的同学',
    isShowBtn: true,
    zhBtnType: 'default',
    enBtnType: 'default',
  },
  {
    src: 'https://files.wondercv.com/cvsvuetpl-college.png',
    title: '零经验实习2',
    des: '学生找实习或全职工作，有一定实习经历的同学',
    isShowBtn: true,
    zhBtnType: 'default',
    enBtnType: 'default',
  },
  {
    src: 'https://files.wondercv.com/cvsvuetpl-college.png',
    title: '零经验实习3',
    des: '学生找实习或全职工作，有一定实习经历的同学',
    isShowBtn: true,
    zhBtnType: 'default',
    enBtnType: 'default',
  },
  {
    src: 'https://files.wondercv.com/cvsvuetpl-college.png',
    title: '零经验实习4',
    des: '学生找实习或全职工作，有一定实习经历的同学',
    isShowBtn: true,
    zhBtnType: 'default',
    enBtnType: 'default',
  },
]

// 新建简历
const ReusmeAdd = () => {
  let [tmplDataArr, setIsMoveOver] = useState(tmplDataSource)

  const handleShowBtn = (idx, isShowBtn) => {
    tmplDataSource[idx].isShowBtn = isShowBtn
    setIsMoveOver(tmplDataSource.slice())
  }

  const handleBtnBgColor = (options) => {
    const { idx, zhBtnType, enBtnType } = options
    tmplDataSource[idx].zhBtnType = zhBtnType
    tmplDataSource[idx].enBtnType = enBtnType
    setIsMoveOver(tmplDataSource.slice())
  }

  // card模板组件
  const CardItem = () => {
    return tmplDataArr.map(
      ({ src, title, des, isShowBtn, zhBtnType, enBtnType }, idx) => {
        return (
          <div
            key={title}
            className={recommedItem}
            onMouseEnter={() => handleShowBtn(idx, false)}
            onMouseLeave={() => handleShowBtn(idx, true)}
          >
            <div
              className={recommedItem}
              style={{ display: isShowBtn ? 'flex' : 'none' }}
            >
              <img src={src} className={recommedItemImg} />
              <div className={recommedItemDesc}>
                <p className={recommedItemTitle}>{title}</p>
                <p className={recommedItemText}>{des}</p>
              </div>
            </div>

            <div
              className={recommedItemBtn}
              style={{ display: isShowBtn ? 'none' : 'grid' }}
            >
              <Button
                danger
                type={zhBtnType}
                onMouseEnter={() =>
                  handleBtnBgColor({ idx, enBtnType, zhBtnType: 'primary' })
                }
                onMouseLeave={() =>
                  handleBtnBgColor({ idx, enBtnType, zhBtnType: 'default' })
                }
              >
                中文模板
              </Button>
              <Button
                danger
                type={enBtnType}
                onMouseEnter={() =>
                  handleBtnBgColor({ idx, zhBtnType, enBtnType: 'primary' })
                }
                onMouseLeave={() =>
                  handleBtnBgColor({ idx, zhBtnType, enBtnType: 'default' })
                }
              >
                英文模板
              </Button>
            </div>
          </div>
        )
      }
    )
  }

  return (
    <div className={recommedWrap}>
      <CardItem />
    </div>
  )
}

export default ReusmeAdd
