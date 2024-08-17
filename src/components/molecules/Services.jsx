import Background from '../../assets/About.svg'
import { ServicesCardOne } from '../atoms/ServicesCard.jsx'
import { ServicesCardTwo } from '../atoms/ServicesCard.jsx'
const Services = () => {
    return (
        <div className="pt-[7rem] md:pt-[8.5rem] pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16"
        style={{background: `url("${Background}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} >
            <div className='mb-[2rem] md:mb-[4rem]'>
                <h3>
                    <span className='text-[2rem] md:text-[3.5rem] text-[#808080] lg:text-[4.5rem]
                                    font-semibold'>
                                        My Skills and
                    </span>
                    <br />
                    <span className='text-[2rem] md:text-[3.5rem] md:ml-[10rem] lg:ml-[16rem] text-[#2b2b2c]
                                    lg:text-[4.5rem] font-semibold'>
                                        specialty include
                    </span>
                </h3>
            </div>
            <div className='pt-2 flex flex-col gap-10 lg:flex-row items-center justify-between pb-10 md:pb-[7rem] w-full'>
                <div className='w-full'>
                    <ServicesCardOne title="Skills"/>
                </div>
                <div className='w-full'>
                    <ServicesCardTwo  title="Services"/>
                </div>
            </div>
        </div>
    )
}

export default Services;