import React from 'react'

const Header = async () => {
  return (
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl" href='/'>InternInsights</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Store</a></li>            
            </ul>
        </div>
    </div>
  )
}

export default Header