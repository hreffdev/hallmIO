import type { Metadata } from 'next'
import { title } from 'lib/layout.shared'
import type { Page } from './source'

export function createMetadata(override: Metadata): Metadata {
	return {
		...override,
		openGraph: {
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			url: 'https://docs.hallm.io',
			images: '/banner.png',
			siteName: title,
			...override.openGraph,
		},
		twitter: {
			card: 'summary_large_image',
			creator: '@hreffdev',
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			images: '/banner.png',
			...override.twitter,
		},
	}
}

export function getPageImage(page: Page) {
	const segments = [...page.slugs, 'image.webp']
	return {
		segments,
		url: `/og/${segments.join('/')}`,
	}
}

export const baseUrl ='http://localhost:3031'
