import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../components/styles/globals.css';
import Link from 'next/link';
import {MountainIcon} from 'lucide-react';
import React from 'react';
import {cn} from '@/lib/utils';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'UST Rankings',
  description: 'The Rankings of Instructors at HKUST. ',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'min-h-screen')}>
        <header className='flex h-16 w-full items-center px-4 md:px-6 bg-[#003366] text-white'>
          <Link className='mr-6' href='#'>
            <MountainIcon className='h-6 w-6'/>
            <span className='sr-only'>UST Rankings</span>
          </Link>
          <nav className='ml-auto flex gap-4 sm:gap-6'>
            <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
              How does it work?
            </Link>
            <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
              About
            </Link>
          </nav>
        </header>
        <main className='flex flex-col items-center space-y-8 text-center py-32'>
          {children}
        </main>
      </body>
    </html>
  );
}
