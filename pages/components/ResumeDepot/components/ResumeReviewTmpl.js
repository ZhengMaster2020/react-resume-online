import { Modal, Tooltip } from 'antd';
import { CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import Image from 'next/image';

const ResumeReviewTmpl = props => {
	const { visible, onChange } = props;
	const onVisibleChange = visible => onChange(visible);
	const handleSelectTmpl = type => {
		console.log('sssss', type);
	};
	const myLoader = ({ src, width, quality }) => {
		return `https://files.wondercv.com/${src}?w=${width}&q=${quality || 75}`;
	};

	// 弹窗标题组件
	const Title = () => (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
				border: 'none',
			}}>
			<Tooltip title='使用该模板' color='#52c41a'>
				<CheckCircleTwoTone
					twoToneColor='#52c41a'
					style={{ fontSize: '24px', cursor: 'pointer', marginRight: '20px' }}
					onClick={() => handleSelectTmpl(false)}
				/>
			</Tooltip>
			<CloseCircleTwoTone
				twoToneColor='#ff7875'
				style={{ fontSize: '24px', cursor: 'pointer' }}
				onClick={() => onVisibleChange(false)}
			/>
		</div>
	);

	return (
		<Modal
			footer={null}
			visible={visible}
			closable={false}
			bodyStyle={{ paddingTop: 0 }}
			title={<Title />}
			onCancel={() => onVisibleChange(false)}>
			<div>
				<Image
					loader={myLoader}
					src={`develop-temp-cn@2x.png`}
					alt='Picture of the author'
					width={500}
					height={680}
				/>
			</div>
		</Modal>
	);
};

export default ResumeReviewTmpl;
