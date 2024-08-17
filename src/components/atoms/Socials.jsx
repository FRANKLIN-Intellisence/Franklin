export const SocialsOne = (props) => {
    return (
        <a href={props.link} target="blank" className="cursor-pointer">
            <div className="relative h-[10rem] w-[11rem] md:hover:scale-110 text-[#2b2b2c] md:hover:text-[#1b7ced]
                            duration-700 ease-linear bg-[#eff0ee] p-[1rem] rounded-[10px]">
                <div className="absolute top-[1rem] left-[1rem]">
                    <h6>{props.icon}</h6>
                </div>
                <div className="absolute bottom-[1rem] right-[1rem]">
                    <h5 className="font-semibold text-[1.1rem]">{props.name}</h5>
                </div>
            </div>
        </a>
    )
}

export const SocialsTwo = (props) => {
    return (
        <a href={props.link} target="blank" className="cursor-pointer">
            <div className="relative h-[10rem] w-[11rem] md:hover:scale-110 text-[#2b2b2c] md:hover:text-[#fff]
                            duration-700 ease-linear bg-[#eff0ee] p-[1rem] rounded-[10px] md:hover:bg-[#1b1b1d]">
                <div className="absolute top-[1rem] left-[1rem]">
                    <h6>{props.icon}</h6>
                </div>
                <div className="absolute bottom-[1rem] right-[1rem]">
                    <h5 className="font-semibold text-[1.1rem]">{props.name}</h5>
                </div>
            </div>
        </a>
    )
}
