import type { FCC } from 'react';

export const Footer: FCC = () => {
	return (
		<div className='absolute bottom-0 font-mono'>
			<div className='mx-auto my-4'>
				<p className='text-xs sm:text-sm font-bold flex justify-center items-center gap-2 flex-col sm:flex-row'>
					<span className='text-gray-400'>&copy; {new Date().getFullYear()} Copyright</span>
					<span className='hidden md:block'>{'-'}</span>
					<span className='text-gray-400 indent-0'>
						Created by
						<a
							href={process.env.NEXT_PUBLIC_PROFILE_LINK || 'https://github.com/kevin-sg'}
							target='_blank'
							rel='noopener noreferrer'
							className='ml-1 text-gray-600 hover:text-blue-500 hover:transition-colors'
						>
							kevinSg
							<i className='fa-solid fa-arrow-up-right-from-square ml-1 text-xs'></i>
						</a>
					</span>
				</p>
			</div>
		</div>
	);
};
