import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://www.friendsofislandpark.com/';
const socialMetaData = {
    title: 'Friends of Island Park | Reclaiming the Brattleboro-Hinsdale Greenway',
    description:
        'Help Friends of Island Park create a premier greenway connecting Brattleboro, VT and Hinsdale, NH. Join walkers, bikers, and the community.',
};

const urbanistSans = Urbanist({
    variable: '--font-urbanist-sans',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
    themeColor: '#247a47',
};

export const metadata: Metadata = {
    title: {
        default:
            'Friends of Island Park | Reclaiming Island Park Greenway between Brattleboro, VT & Hinsdale, NH',
        template: '%s | Friends of Island Park',
    },
    description:
        'Friends of Island Park works to create a premier greenway on Island Park, bridging Hinsdale, NH, and Brattleboro, VT, for walkers, hikers, bikers, anglers, and the community.',
    keywords: [
        'Island Park',
        'Brattleboro',
        'Vermont',
        'Hinsdale',
        'New Hampshire',
        'greenway',
        'walking',
        'biking',
        'recreation',
        'community',
        'non-profit',
        'historical',
        'truss bridges',
        'Anna Hunt Marsh bridge',
        'Charles Dana bridge',
        'John Storrs',
        'Hinsdale Island',
    ],
    openGraph: {
        title: socialMetaData.title,
        description: socialMetaData.description,
        siteName: 'Friends of Island Park',
        type: 'website',
        url: siteUrl,
    },
    twitter: {
        card: 'summary_large_image',
        title: socialMetaData.title,
        description: socialMetaData.description,
    },
    robots: {
        follow: true,
        index: true,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element {
    return (
        <html
            className={`${urbanistSans.variable} h-full antialiased`}
            lang='en'
        >
            <body>{children}</body>
        </html>
    );
}
