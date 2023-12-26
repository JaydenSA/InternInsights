import React from 'react'
import { getPages } from '@/services'
import Link from 'next/link';

const Footer = async () => {
    const pageLinks = await getPages();

  return (
    <footer className="footer p-10 bg-[#232536] text-white">
        <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <header className="footer-title">Legal</header> 
            {pageLinks.map((page, index) => (
                <Link href={`/pages/${page.slug}`} index={index}>{page.title}</Link>
            ))}
        </nav> 
    </footer>
  )
}

export default Footer