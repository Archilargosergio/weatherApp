import React from 'react';
import gitHubIcon from '../assets/github.png';
import linkedinIcon from '../assets/logotipo-de-linkedin.png';

const Footer = () => {
    return (
        <footer className='fixed bottom-0 mt-5 content-end w-full h-10'>
            <ul className='flex flex-row justify-end mx-2 mt-1 gap-4'>
                <li>
                    <a href="https://github.com/Archilargosergio" >
                        <img className='w-8 h-auto' src={gitHubIcon} alt="gitHubIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sergio-archila-largo-ab0b08177/">
                        <img className='w-8 h-auto' src={linkedinIcon} alt="linkedinIcon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;