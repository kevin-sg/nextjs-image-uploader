import type { FC } from 'react';

type ProgressCardProps = {
	progressStatus: number;
};

export const ProgressCard: FC<ProgressCardProps> = ({ progressStatus }) => {
	const width = progressStatus.toString().concat('%');

	return (
		<div className='w-[402px] h-[144px] px-8 flex flex-col gap-8 justify-center items-center bg-white rounded-xl shadow-lg shadow-gray-200/80'>
			<h2 className='w-full capitalize text-xl text-left text-gray-600 font-semibold'>Uploading...</h2>
			<div className='relative w-full h-2 bg-red-50 rounded'>
				<div className='absolute inset-y-0 h-full bg-blue-500 transition-[width] rounded' style={{ width }} />
			</div>
		</div>
	);
};
