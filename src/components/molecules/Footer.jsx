import { ButtonTwo } from '../atoms/Button.jsx'
import { SocialsOne,SocialsTwo } from '../atoms/Socials.jsx'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react';

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}


const Footer = () => {
    const [currentDate, setCurrentDate] = useState(getDate());
    return (
        <div className="bg-[#808080] pl-8 pr-8 md:pl-14 md:pr-14 lg:pl-16 lg:pr-16 pt-[3rem] lg:pt-[5rem]">
            <div className="rounded-[50px] w-full lg:w-[70%] m-auto bg-[#eff0ee] p-4 md:p-8 text-center lg:p-8 mb-10 lg:mb-20">
                <span className="block text-[2rem] lg:text-[5rem]">
                    Let me bring your
                </span>
                <span className="block text-[2rem] lg:text-[5rem] mb-8" id='Contact'>
                    Designs to life...
                </span>
                <ButtonTwo name="Start right now" type='button' link="mailto:franklinsolaty@gmail.com" />
            </div>
            <hr className='mb-[2rem]' />
            <div className='flex flex-col lg:flex-row lg:items-start justify-between mb-8 lg:mb-20'>
                <div>
                    <h1 className='text-[2rem] lg:text-[3rem] font-bold mb-4 lg:mb-0'>FRANKDEV</h1>
                </div>
                <div>
                    <div className='mb-[2.5rem] lg:mb-[4rem]'>
                        <h3 className='text-[0.95rem] md:text-[1.2rem] font-semibold'>Have any questions? Reach out!</h3>
                        <h3 className='text-[0.95rem] md:text-[1.1rem] font-semibold'>We reply fast</h3>
                        <h4 className='text-[1.05rem] md:text-[1.5rem] mt-2 font-semibold'>franklinsolaty@gmail.com</h4>
                    </div>
                    <div className='flex flex-col gap-[2rem] md:gap-8'>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <SocialsOne name="LinkedIn" link="https://linkedin.com/in/franklinokohu" icon={<FaLinkedin size={30}/>}/>
                            <SocialsTwo name="Github" link="https://github.com/FRANKLIN-Intellisence" icon={<FaGithub size={30}/>}/>
                        </div>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <SocialsTwo name="Twitter-X" link="https://twitter.com/franklinokohu" icon={<BsTwitterX  size={30}/>}/>
                            <SocialsOne name="Facebook" link="https://facebook.com/franklinokohu" icon={<FaFacebook size={30}/>}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between p-4">
                <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-4 text-center mb-4">
                    <a href="" className="text-[1.1rem] font-semibold">Privacy Policy</a>
                    <a href="" className="text-[1.1rem] font-semibold">Terms & Conditions</a>
                </div>
                <div className="text-[0.75rem] lg:text-[1.2rem] md:text-[0.9rem]">
                    <p className="font-semibold">© FRANKDEV<span>{currentDate}</span><span onClick={() => setCurrentDate('')}></span>. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;