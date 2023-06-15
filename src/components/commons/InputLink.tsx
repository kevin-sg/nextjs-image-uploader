import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

import type { FC } from 'react';

type InputLinkProps = {
	value: string;
};

export const InputLink: FC<InputLinkProps> = ({ value = 'Not Value' }) => {
	return (
		<div className='relative w-full'>
			<label className='relative bg-green-300'>
				<input
					type='text'
					disabled
					value={value}
					readOnly
					className='w-full h-10 text-sm text-gray-500 truncate pr-24 bg-gray-100 pl-2 border border-gray-300 rounded-lg overflow-hidden cursor-not-allowed'
				/>

				<button
					type='button'
					title='Press to copy'
					className='absolute top-1/2 -translate-y-1/2 block right-1 bg-blue-500 hover:bg-blue-600 transition-colors text-gray-50 text-sm w-20 h-8 rounded-lg shadow-xl shadow-blue-500/50'
					onClick={() => {
						const isCopy = copy(value || '');
						if (isCopy) {
							toast.success('Copy to clipboard', { theme: 'light' });
						}
					}}
				>
					Copy link
				</button>
			</label>
		</div>
	);
};
