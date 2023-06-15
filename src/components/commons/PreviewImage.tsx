import NextImage from 'next/image';

import type { FC } from 'react';

type PreviewImageProps = {
	imageUrl: string;
};

export const PreviewImage: FC<PreviewImageProps> = ({ imageUrl = '' }) => {
	return (
		<div className='w-[338px] h-[220px] rounded-xl'>
			<div className='relative w-full h-full'>
				<NextImage
					src={imageUrl}
					fill
					alt='image'
					priority
					className='w-full h-full top-0 left-0 object-contain rounded-2xl'
					sizes='(min-width: 768px) 100%'
				/>
			</div>
		</div>
	);
};
