import { Button } from 'antd';
import { useState } from 'react';
import {
	recommedWrap,
	recommedItem,
	recommedItemDesc,
	recommedItemImg,
	recommedItemTitle,
	recommedItemText,
	recommedItemBtn,
} from '../../../../styles/ResumeAdd.module.css';
import { tmplDataSource } from '../../../../mocks/add-resume.js';
import ResumeReviewTmpl from './ResumeReviewTmpl';

// 新建简历组件
const ReusmeAdd = () => {
	let [tmplDataArr, setIsMoveOver] = useState(tmplDataSource);
	const [isPreview, setPreview] = useState(false);

	const handleShowPreview = isShow => {
		setPreview(isShow);
	};

	const onVisibleChange = visible => {
		console.log(visible, 'kpkkk');
		setPreview(visible);
	};

	// 鼠标移入移出显示以及隐藏按钮模块
	const handleShowBtn = (idx, isShowBtn) => {
		tmplDataSource[idx].isShowBtn = isShowBtn;
		setIsMoveOver(JSON.parse(JSON.stringify(tmplDataSource)));
	};

	//    鼠标移入移出改变按钮类型模块
	const handleBtnBgColor = options => {
		const { idx, zhBtnType, enBtnType } = options;
		tmplDataSource[idx].zhBtnType = zhBtnType;
		tmplDataSource[idx].enBtnType = enBtnType;
		setIsMoveOver(JSON.parse(JSON.stringify(tmplDataSource)));
	};

	// card模板组件
	const CardItem = () => {
		return tmplDataArr.map(({ src, title, des, isShowBtn, zhBtnType, enBtnType }, idx) => {
			return (
				<div
					key={title}
					className={recommedItem}
					onMouseEnter={() => handleShowBtn(idx, false)}
					onMouseLeave={() => handleShowBtn(idx, true)}>
					<div className={recommedItem} style={{ display: isShowBtn ? 'flex' : 'none' }}>
						<img src={src} className={recommedItemImg} />
						<div className={recommedItemDesc}>
							<p className={recommedItemTitle}>{title}</p>
							<p className={recommedItemText}>{des}</p>
						</div>
					</div>

					<div className={recommedItemBtn} style={{ display: isShowBtn ? 'none' : 'grid' }}>
						<Button
							danger
							type={zhBtnType}
							onClick={() => handleShowPreview(true)}
							onMouseEnter={() => handleBtnBgColor({ idx, enBtnType, zhBtnType: 'primary' })}
							onMouseLeave={() => handleBtnBgColor({ idx, enBtnType, zhBtnType: 'default' })}>
							中文模板
						</Button>
						<Button
							danger
							type={enBtnType}
							onMouseEnter={() => handleBtnBgColor({ idx, zhBtnType, enBtnType: 'primary' })}
							onMouseLeave={() => handleBtnBgColor({ idx, zhBtnType, enBtnType: 'default' })}>
							英文模板
						</Button>
					</div>
				</div>
			);
		});
	};

	return (
		<div className={recommedWrap}>
			<CardItem />
			{isPreview && <ResumeReviewTmpl visible={isPreview} onChange={onVisibleChange} />}
		</div>
	);
};

export default ReusmeAdd;
