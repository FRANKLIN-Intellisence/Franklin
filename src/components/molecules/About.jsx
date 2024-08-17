import Background from '../../assets/About.svg'
import { CardTwo } from '../atoms/Card.jsx'
import { AboutCardsOne, AboutCardsTwo } from '../atoms/AboutCards.jsx'
import { HiOutlineVideoCamera } from 'react-icons/hi2'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { IoReload } from 'react-icons/io5'
import Profile from '../../assets/Profile.jpg'
const About = () => {
    return (
        <div className='pt-[8rem] md:pt-[10rem] pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 pb-10 lg:pb-20'
            style={{background: `url("${Background}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} >
            <div className='mb-[5rem] md:mb-20 lg:mb-32'>
                <CardTwo head="Get to know me!" sentence="I'm Franklin Okohu. A Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects page. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me." 
                            image={Profile}/>
            </div>
            <div className='md:h-[18rem] lg:p-[4rem] opacity-[85%] bg-[#eef0ee] mb-10 rounded-[10px]
                            lg:rounded-[20px] lg:h-[28rem] md:mb-[7rem] h-[8rem] p-2 md:p-[2rem] '>
                <h2 className='text-[0.95rem] mt-4 md:text-[2.5rem] lg:text-[3.5rem] text-[#808080] font-extrabold mb-6 lg:mb-14'>
                    Code, but in a more 
                </h2>
                <h2 className='text-[0.95rem] md:text-[2.5rem] lg:text-[3.5rem] text-[#2b2b2c] font-bold ml-1 lg:ml-[5rem]
                                md:ml-10'>
                    efficient and simplified way...
                </h2>
            </div>
            <div className='flex flex-col items-center gap-10 lg:gap-[5rem]'>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='text-[1.2rem] md:text-[2.2rem] lg:text-[3rem] text-[#2b2b2c] font-bold'>HERE IS HOW YOU GET IT:</h1>       
                </div>    
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <AboutCardsOne text="Select one of our plans and book a free discovery call to learn how we can work together. If all good, we'll kick off in the same day." 
                        title="Start right away!"  icon={<HiOutlineVideoCamera size={30} />}/>
                    <AboutCardsTwo text="Request as many websites as you want and sit back, as we develop your websites and deliver first drafts in under a week." 
                        title="Request Websites"  icon={<FaWandMagicSparkles size={30} />}/>
                    <AboutCardsOne text="Even though we always do our best to hit the goal with the first take, you can ask for as many iterations as needed. No additional costs." 
                        title="Finilize"  icon={<IoReload size={30}/>}/>
                </div>
            </div>
            <div className='w-full lg:w-[70%] mt-10 lg:mt-20'>
                <h4 className='text-[1.5rem] md:text-[2rem] lg:text[2.5rem]'>
                    At FRANKDEV, we go beyond the ordinary to ensure satisfaction of every step of the processes, 
                    as our subscription model is designed with you <span className='hidden lg:inline rounded-[10px] bg-[#eef0ee]'>🫵</span> in mind.
                </h4>
            </div>
        </div>
    )
}

export default About;