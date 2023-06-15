import NextImage from 'next/image';
import c from 'clsx';

import BackgroundSvg from 'public/background.svg';

import type { FC } from 'react';
import type { DropzoneInputProps } from 'react-dropzone';

type DropzoneProps = {
	isActive?: boolean;
	onInputProps: <T extends DropzoneInputProps>(props?: T) => T;
};

export const Dropzone: FC<DropzoneProps> = ({ isActive = false, onInputProps }) => {
	return (
		<div
			className={c(
				'w-full sm:w-[338px] h-full sm:h-[220px] relative transition-colors p-5 sm:p-0 flex flex-col justify-center items-center gap-4 sm:gap-10 border-2 border-dashed rounded-xl overflow-hidden',
				isActive ? 'border-pink-300 bg-pink-50' : 'border-blue-300 bg-slate-50',
			)}
		>
			<input {...onInputProps()} />

			<div className='relative w-[115px] h-[88px]'>
				<NextImage src={BackgroundSvg} fill alt='background upload' priority className='w-full h-full object-cover' />
			</div>

			<p className={c('text-xs sm:text-sm font-medium text-center', isActive ? 'text-pink-400' : 'text-gray-400')}>
				Drag & Drop your image here
			</p>
		</div>
	);
};
