import Background from '../../assets/Hero.svg'
import { BenefitsCardOne, BenefitsCardTwo, } from '../atoms/ServicesCard.jsx'
import { BsFillLightningChargeFill, BsFillGrid1X2Fill } from 'react-icons/bs'
import { RxTransparencyGrid } from 'react-icons/rx'
import { IoIosCheckmarkCircleOutline, IoIosChatbubbles} from 'react-icons/io'
import { RiBarChart2Fill } from 'react-icons/ri'
const Benefits = () => {
    return (
        <div className="pt-[7rem] md:pt-[8.5rem] pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 pb-14 md:pb-20 lg:pb-32"
        style={{background: `url("${Background}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            <div className='mb-[2rem] md:mb-[4rem]'>
                <h3>
                    <span className='text-[1.5rem] md:text-[3.5rem] text-[#808080] lg:text-[4.5rem]
                                    font-semibold'>
                                        So, why work
                    </span>
                    <br />
                    <span className='text-[1.5rem] md:text-[3.5rem] ml-[3rem] md:ml-[8rem] lg:ml-[14rem] text-[#2b2b2c]
                                    lg:text-[4.5rem] font-semibold'>
                                        with FRANKDEV?
                    </span>
                </h3>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-between pt-4 gap-10 md:gap-6 lg:gap-8'>
                <BenefitsCardTwo title="Speed" icon={<BsFillLightningChargeFill size={25}/>} texts="Receive your websites ASAP without compromising quality. Our model doesn’t require long meetings and dozens of emails, which gives us the ability to focus 98% of the time doing the actual work."/>
                <BenefitsCardOne title="Transparency" icon={<RxTransparencyGrid size={25} />} texts="Say bye-bye to budget uncertainties with our transparent and fixed pricing model. You’re free to pause or cancel anytime." />
                <BenefitsCardTwo title="Results" icon={<IoIosCheckmarkCircleOutline size={25} />} texts="Good websites is the one that performs well and leaves a memorable mark on your audience. So, we combine both worlds - performance and beauty." />
                <BenefitsCardOne title="Engagement" icon={<IoIosChatbubbles size={25}/>} texts="Even though we work asynchronously, we will update you daily on Slack (if you don’t mind) and do calls, when needed." />
                <BenefitsCardTwo title="Flexibility" icon={<BsFillGrid1X2Fill size={25}/>} texts="Once signed up, you’ll get your own easy-to-manage Trello board, where you can add and oversee all of your requests. No user limit, add as many people as you need" />
                <BenefitsCardOne title="Scalability" icon={<RiBarChart2Fill  size={25}/>} texts="Whether you're one-person business or a large company, our subscription plans scale with your needs." />
            </div>
        </div>
    )
}

export default Benefits;