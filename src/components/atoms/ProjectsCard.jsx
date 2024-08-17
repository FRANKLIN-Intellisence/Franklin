import { ButtonTwo } from './Button.jsx'
export const ProjectsCardOne = (props) => {
    return (
        <div className='pt-8 pb-8 pl-4 pr-4 w-full text-center rounded-[15px] bg-[#6edada]' >
            <div className='mb-6'>
                <h4 className='text-[1.5rem] md:text-[2.5rem] font-semibold '>{props.title}</h4>
            </div>
            <div className='mb-6'>
                <img src={props.image} alt="IMAGE" className='rounded-[10px] h-[10rem] md:h-[15rem] w-full lg:w-[90%]
                                                                lg:hover:scale-105 ease-in-out duration-500 m-auto'/>
            </div>
            <div>
                <ButtonTwo name="Live Link" link={props.link} type="button"/>
            </div>
        </div>
    )
}

export const ProjectsCardTwo = (props) => {
    return (
        <div className='pt-8 pb-8 pl-4 pr-4 w-full text-center rounded-[15px] bg-[#c3e26b]' >
            <div className='mb-6'>
                <h4 className='text-[1.5rem] md:text-[2.5rem] font-semibold '>{props.title}</h4>
            </div>
            <div className='mb-6'>
                <img src={props.image} alt="IMAGE" className='rounded-[10px] h-[10rem] md:h-[15rem] w-full lg:w-[90%]
                                                                lg:hover:scale-105 ease-in-out duration-500 m-auto'/>
            </div>
            <div>
                <ButtonTwo name="Live Link" link={props.link} type="button"/>
            </div>
        </div>
    )
}
