import { useState } from 'react'
import { ButtonOne } from '../atoms/Button.jsx'
import Logo from '../../assets/Avatar.jpg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Styles.css'

const Lists = () => {
    return(
        <>
            <li className='p-0 lg:p-[0.125rem]'>
                <a href="/About" className="text-[1.1rem] text-[#504d4d] hover:text-[#2b2b2c] font-semibold duration-700
                                        flex items-start justify-center w-[100%] pt-2 pb-2 ease-in-out mb-1 lg:mb-0 
                                        lg:hover:bg-[none] hover:bg-[#eff0ee] p-0 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1
                                        rounded-none lg:rounded-[10px]">
                    About
                </a>
            </li>
            <li className='p-0 lg:p-[0.125rem]'>
                <a href="/Services" className='text-[1.1rem] text-[#504d4d] hover:text-[#2b2b2c] font-semibold duration-700
                                        flex items-start justify-center w-[100%] pt-2 pb-2 ease-in-out mb-1 lg:mb-0
                                        lg:hover:bg-[none] hover:bg-[#eff0ee] p-0 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1
                                        rounded-none lg:rounded-[10px]'>
                    Skills/Services
                </a>
            </li>
            <li className='p-0 lg:p-[0.125rem]'>
                <a href="/Projects" className='text-[1.1rem] text-[#504d4d] hover:text-[#2b2b2c] font-semibold duration-700
                                        flex items-start justify-center w-[100%] pt-2 pb-2 ease-in-out mb-1 lg:mb-0
                                        lg:hover:bg-[none] hover:bg-[#eff0ee] p-0 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1
                                        rounded-none lg:rounded-[10px]'>
                    Projects
                </a>
            </li>
            <li className='p-0 lg:p-[0.125rem]'>
                <a href="/Benefits" className='text-[1.1rem] text-[#504d4d] hover:text-[#2b2b2c] font-semibold duration-700
                                        flex items-start justify-center w-[100%] pt-2 pb-2 ease-in-out mb-1 lg:mb-0
                                        lg:hover:bg-[none] hover:bg-[#eff0ee] p-0 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1
                                        rounded-none lg:rounded-[10px]'>
                    Benefits
                </a>
            </li>
            <li className='p-0 lg:p-[0.125rem]'>
                <a href="/Faqs" className='text-[1.1rem] text-[#504d4d] hover:text-[#2b2b2c] font-semibold duration-700
                                        flex items-start justify-center w-[100%] pt-2 pb-2 ease-in-out mb-1 lg:mb-0
                                        lg:hover:bg-[none] hover:bg-[#eff0ee] p-0 lg:pl-1 lg:pr-1 lg:pt-1 lg:pb-1
                                        rounded-none lg:rounded-[10px]'>
                    FAQs
                </a>
            </li>
        </>
    )
}

const Nav = () => {
    const [Sidebar, setSidebar] = useState(false);
    return(
        <nav className="flex flex-row bg-[#eff0ee] items-center justify-between pt-4 pb-4 pl-6 pr-6 lg:pl-14 
                        z-[1000] opacity-[90%] fixed top-0 left-0 right-0 md:pl-12 md:pr-12 lg:pr-14">
            <div className='flex flex-row items-center gap-2'>
                <img src={Logo} alt="LOGO" className='h-[3.5rem] w-[3.5rem] rounded-[50%] cursor-pointer' />
                <h1 className='text-[1rem] md:text-[1.5rem] text-[#2b2b2c] font-[600] cursor-pointer lg:hidden'>
                    FRANKLIN <span className='text-[#7b2683]'>OKOHU</span>
                </h1>
            </div>

            <div className='hidden lg:block'>
                <ul className="flex flex-row items-center gap-[2rem] bg-[#cabcbc] pb-[0.1rem]
                                rounded-[10px] pt-[0.1rem] pl-8 pr-8">
                    <Lists />
                </ul>
            </div>

            <div className='hidden lg:block'>
                <ButtonOne name="Contact Me" type="button" link="#Contact" />
            </div>

            <div className='lg:hidden'>
                {Sidebar ? <RiCloseLine size={30} className='cursor-pointer' onClick={() => setSidebar(false)}/>
                : <RiMenu3Line size={30} className='cursor-pointer' onClick={() => setSidebar(true)}/>}
                {Sidebar && (
                    <div className='fixed top-[5.5rem] right-0 left-0 bottom-0 block bg-[#00000066] z-[500]'
                            onClick={() => setSidebar(false)}>
                        <ul className='fixed pt-2 pb-4 w-[100%] md:w-[35%] top-[5.5rem] right-0 text-center bg-[#cabcbc] 
                                       z-[2000] scale-up-tr' onClick={() => setSidebar(true)}>
                            <Lists />
                            <ButtonOne name="Contact Me" type="button" link='#Contact'/>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav;
