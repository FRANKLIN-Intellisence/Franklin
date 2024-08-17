export const ButtonOne = (props) => {
    return (
        <a href={props.link}>
            <button type={props.type} className="hover:bg-[#7b2683] text-[1.1rem] font-semibold border-none
                                                md:hover:scale-110 duration-1000 pt-2 pb-2 pl-8 pr-8 rounded-[10px] text-[#fff] 
                                                ease-in bg-[#504d4d] mt-4 md:mt-6 lg:mt-0">
                {props.name}
            </button>
        </a>
    )
}

export const ButtonTwo = (props) => {
    return (
        <a href={props.link} target="blank">
            <button type={props.type} className="hover:bg-[#7b2683] text-[1.1rem] font-semibold border-none
                                                md:hover:scale-110 duration-1000 pt-2 pb-2 pl-8 pr-8 rounded-[10px] text-[#fff] 
                                                ease-in bg-[#504d4d] mt-4 md:mt-6 lg:mt-0">
                {props.name}
            </button>
        </a>
    )
}
