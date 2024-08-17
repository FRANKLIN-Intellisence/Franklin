import Background from '../../assets/Hero.svg'
import { ProjectsCardOne, ProjectsCardTwo} from '../atoms/ProjectsCard.jsx'
import METABNB from '../../assets/METABNB.png'
import HUDDLE from '../../assets/HUDDLE.png'
import MC from '../../assets/MC.png'
import Portfolio from '../../assets/PORTFOLIO.png'
const Projects = () => {
    return (
        <div className="pt-[8rem] md:pt-[8.5rem] pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16"
            style={{background: `url("${Background}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}} >
            <div className='mb-6'>
                <h3>
                    <span className='text-[2rem] md:text-[3.5rem] text-[#808080] lg:text-[4.5rem]
                                    font-semibold'>
                                        Check out some
                    </span>
                    <br />
                    <span className='text-[2rem] md:text-[3.5rem] ml-12 md:ml-[8rem] lg:ml-[10rem] text-[#2b2b2c]
                                    lg:text-[4.5rem] font-semibold'>
                                        of my work
                    </span>
                </h3>
            </div>
            <div className='flex flex-col items-center gap-8 pt-8 md:pt-16 pb-[7rem] lg:pb-[10rem]'>
                <div className='flex flex-col items-center gap-8 md:grid grid-cols-2 lg:gap-[3rem] lg:justify-between w-full'>
                    <ProjectsCardOne title="METABNB" link="https://franklin-intellisence.github.io/PRESENTATION/" image={METABNB}/>
                    <ProjectsCardTwo title="MC PERFUMES" link="https://final-sigma-umber.vercel.app/" image={MC} />
                </div>
                <div className='flex flex-col items-center gap-8 md:grid grid-cols-2 lg:gap-[3rem] lg:justify-between w-full'>
                    <ProjectsCardTwo title="HUDDLE" link="https://huddle-six-sand.vercel.app/" image={HUDDLE}/>
                    <ProjectsCardOne title="PORTFOLIO" link="https://github.com/FRANKLIN-Intellisence" image={Portfolio} />
                </div>
            </div>
        </div>
    )
}

export default Projects;