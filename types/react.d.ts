import type { FC, PropsWithChildren } from 'react';

declare module 'react' {
	export type FCC<P = {}> = FC<PropsWithChildren<P>>;
}
