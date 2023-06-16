import { Roboto_Mono, Poppins } from 'next/font/google';
import c from 'clsx';

import type { FCC } from 'react';

const poppins = Poppins({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

const robotoMono = Roboto_Mono({
	weight: ['100', '200', '300', '400'],
	subsets: ['latin'],
	variable: '--font-roboto-mono',
});

export const Main: FCC = ({ children }) => {
	return (
		<main
			className={c(
				'w-full flex min-h-screen justify-center items-center flex-col gap-2 md:gap-10',
				poppins.variable,
				robotoMono.variable,
				'font-sans',
			)}
		>
			{children}
		</main>
	);
};
