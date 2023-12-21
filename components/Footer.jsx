import React from 'react'
import { getPages } from '@/services'
import Link from 'next/link';

const Footer = async () => {
    const pageLinks = await getPages();

  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
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
        <form>
            <header className="footer-title">Newsletter</header> 
            <fieldset className="form-control w-80">
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label> 
            <div className="join">
                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                <button className="btn btn-primary join-item">Subscribe</button>
            </div>
            </fieldset>
        </form>
    </footer>
  )
}

export default Footer