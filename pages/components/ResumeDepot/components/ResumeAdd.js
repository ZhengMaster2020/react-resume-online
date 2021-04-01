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

const tmplDataArr = [
  {
    src: 'https://files.wondercv.com/cvsvuetpl-college.png',
    title: '零经验实习',
    des: '学生找实习或全职工作，有一定实习经历的同学',
    isShowBtn: true,
    zhBtnType: 'default',
    enBtnType: 'default',
  },
]

const CardItem = () => {
  tmplDataArr.map(({ src, title, des, isShowBtn, zhBtnType, enBtnType }) => {
    return (
      <div
        className={recommedItem}
        onMouseOver={() => handleShowBtn(isShowBtn)}
        onMouseOut={() => handleHiddenBtn(isShowBtn)}
      >
        <div
          id="zero"
          className={recommedItem}
          style={{ display: isShowBtn ? 'flex' : 'none' }}
        >
          <img src={src} className={recommedItemImg} />
          <div className={recommedItemDesc}>
            {' '}
            s<p className={recommedItemTitle}>{title}</p>
            <p className={recommedItemText}>{des}</p>
          </div>
        </div>

        <div
          className={recommedItemBtn}
          style={{ display: isShowBtn ? 'none' : 'grid' }}
        >
          <Button
            danger
            id="zh"
            type={isMoveOver ? 'primary' : 'default'}
            onMouseOver={() => handleShowBtn('zero')}
            onMouseOut={() => handleHiddenBtn('zero')}
          >
            中文模板
          </Button>
          <Button
            danger
            id="en"
            type={false ? 'primary' : 'default'}
            onMouseOver={() => handleShowBtn('zero')}
            onMouseOut={() => handleHiddenBtn('zero')}
          >
            英文模板
          </Button>
        </div>
      </div>
    )
  })
}

// 新建简历
const ReusmeAdd = () => {
  let [isMoveOver, setIsMoveOver] = useState(true)
  const handleShowBtn = (curItem) => {
    console.log('0000', curItem)
    setIsMoveOver(false)
  }
  const handleHiddenBtn = (curItem) => {
    console.log('1111', curItem)
    setIsMoveOver(true)
  }

  return (
    <div className={recommedWrap}>
      <div
        className={recommedItem}
        onMouseOver={() => handleShowBtn('zero')}
        onMouseOut={() => handleHiddenBtn('zero')}
      >
        <div
          id="zero"
          className={recommedItem}
          style={{ display: isMoveOver ? 'flex' : 'none' }}
        >
          <img src="" className={recommedItemImg} />
          <div className={recommedItemDesc}>
            <p className={recommedItemTitle}>零经验实习</p>
            <p className={recommedItemText}>
              学生找实习或全职工作，有一定实习经历的同学
            </p>
          </div>
        </div>

        <div
          className={recommedItemBtn}
          style={{ display: isMoveOver ? 'none' : 'grid' }}
        >
          <Button
            danger
            id="zh"
            type={isMoveOver ? 'primary' : 'default'}
            onMouseOver={() => handleShowBtn('zero')}
            onMouseOut={() => handleHiddenBtn('zero')}
          >
            中文模板
          </Button>
          <Button
            danger
            id="en"
            type={false ? 'primary' : 'default'}
            onMouseOver={() => handleShowBtn('zero')}
            onMouseOut={() => handleHiddenBtn('zero')}
          >
            英文模板
          </Button>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>

      <div className={recommedItem}>
        <img
          src="https://files.wondercv.com/cvsvuetpl-college.png"
          className={recommedItemImg}
        />
        <div className={recommedItemDesc}>
          <p className={recommedItemText}>
            学生找实习或全职工作，有一定实习经历的同学
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReusmeAdd
