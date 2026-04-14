import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal gap-3 footer-center bg-[#244D3F] text-white p-10">
            <div className='container mx-auto'>
                <aside>
                    <h1 className='text-6xl font-bold mb-3'>KeenKeeper</h1>
                    <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </aside>
                <nav>
                    <h3 className='text-xl font-bold mb-2'>Social Links</h3>
                    <div className="grid grid-flow-col gap-4">
                        <a className='bg-gray-300 rounded-full text-black p-2 text-[18px]'>
                            <FaInstagram />
                        </a>
                        <a className='bg-gray-300 rounded-full text-black p-2 text-[18px]'>
                            <FaFacebookSquare />
                        </a>
                        <a className='bg-gray-300 rounded-full text-black p-2 text-[18px]'>
                            <FaXTwitter />
                        </a>
                    </div>
                </nav>
                <hr />
                <div className='flex justify-between border-t border-gray-400 w-full pt-3'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <a href="#">Privacy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;