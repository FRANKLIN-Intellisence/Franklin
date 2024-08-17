import { ServicesCardPartsOne } from './ServicesCardParts.jsx'
import { ServicesCardPartsTwo } from './ServicesCardParts.jsx'
import Laptop from '../../assets/LAPTOP.jpg'
import Skills from '../../assets/SKILLS.png'
export const ServicesCardOne = (props) => {
    return (
        <div className='flex flex-col gap-[5rem] p-4 md:p-8 rounded-[20px] bg-[#eef0ee]'>
            <div className='flex flex-row items-start justify-between'>
                <h3 className='text-[1.5rem] md:text-[2.5rem] font-semibold'>{props.title}</h3>
                <img src={Skills} alt="Laptop" className='h-[5rem] md:h-[7rem] rounded-[10px]' />
            </div>
            <div className='flex flex-row gap-4 md:gap-4 flex-wrap'>
                <ServicesCardPartsOne name="HTML5" />
                <ServicesCardPartsOne name="CSS3" />
                <ServicesCardPartsOne name="JavaScript" />
                <ServicesCardPartsOne name="Tailwind" />
                <ServicesCardPartsOne name="React.JS" />
                <ServicesCardPartsOne name="Git" />
                <ServicesCardPartsOne name="Github" />
                <ServicesCardPartsOne name="Responsive Design" />
                <ServicesCardPartsOne name="Terminal" />
            </div>
        </div>
    )
}

export const ServicesCardTwo = (props) => {
    return (
        <div className='flex flex-col gap-[5rem] p-4 md:p-8 rounded-[20px] bg-[#eef0ee]'>
            <div className='flex flex-row itams-start justify-between'>
                <h3 className='text-[1.5rem] md:text-[2.5rem] font-semibold'>{props.title}</h3>
                <img src={Laptop} alt="Brand" className='h-[5rem] md:h-[7rem] rounded-[10px]' />
            </div>
            <div className='flex flex-row gap-4 md:gap-4 flex-wrap'>
                <ServicesCardPartsTwo name="Landing Pages" />
                <ServicesCardPartsTwo name="Multipage websites" />
                <ServicesCardPartsTwo name="Blogs" />
                <ServicesCardPartsTwo name="SEO" />
                <ServicesCardPartsTwo name="Animations & interactions" />
                <ServicesCardPartsTwo name="Hosting" />
                <ServicesCardPartsTwo name="Webflow" />
            </div>
        </div>
    )
}


export const BenefitsCardOne = (props) => {
    return (
        <div className='p-4 flex flex-col gap-4 border-[1px] rounded-[15px] bg-[#c3e26b]'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='font-semibold text-[1.8rem] p-0 m-0'>{props.title}</h3>
                <h6 className='p-0 m-0'>{props.icon}</h6>
            </div>
            <hr />
            <div className='text-[1.1rem]'>
                <p>{props.texts}</p>
            </div>
        </div>
    )
}

export const BenefitsCardTwo = (props) => {
    return (
        <div className='p-4 flex flex-col gap-4 border-[1px] rounded-[15px] bg-[#6edada] w-full'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='font-semibold text-[1.8rem] p-0 m-0'>{props.title}</h3>
                <h6 className='p-0 m-0'>{props.icon}</h6>
            </div>
            <hr />
            <div className='text-[1.1rem]'>
                <p>{props.texts}</p>
            </div>
        </div>
    )
}
