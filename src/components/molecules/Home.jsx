import { CardOne } from '../atoms/Card.jsx'
import Avatar from '../../assets/Avatar.jpg'
import Hero from '../../assets/Hero.svg'
const home = () => {
    return (
        <div className='pt-8 lg:pt-[10rem] pb-[8rem] pl-8 pr-8 md:pl-14 md:pr-14 lg:pl-16 lg:pr-16 bg-[#eff0ee]'
            style={{background: `url("${Hero}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
            <CardOne 
                sentence={"A Result-Oriented Frontend Website Developer passionate about building creative, interactive and stunning user-interface...."} 
                head={"FRANKDEV"} 
                image={Avatar}
            />
        </div>
    )
}

export default home;