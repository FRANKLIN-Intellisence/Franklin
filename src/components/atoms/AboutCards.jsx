export const AboutCardsOne = (props) => {
    return (
        <div className="p-4 md:p-8 flex flex-col gap-20 md:hover:scale-105 duration-1000
                        w-full bg-[#6edada] rounded-[10px] md:rounded-[20px] ease-in-out">
            <div className="flex flex-row gap-2 md:gap-4 items-center">
                <h6>{props.icon}</h6>
                <h2 className="text-[1.2rem] md:text-[2rem] font-semibold">{props.title}</h2>
            </div>
            <div>
                <p className="text-[1.1rem] md:text-[1.5rem]">{props.text}</p>
            </div>
        </div>
    )
}

export const AboutCardsTwo = (props) => {
    return (
        <div className="p-4 md:p-8 flex flex-col gap-20 md:hover:scale-105 duration-1000
                        w-full bg-[#c3e26b] rounded-[10px] md:rounded-[20px] ease-in-out">
            <div className="flex flex-row gap-2 md:gap-4 items-center">
                <h6>{props.icon}</h6>
                <h2 className="text-[1.2rem] md:text-[2rem] font-semibold">{props.title}</h2>
            </div>
            <div>
                <p className="text-[1.1rem] md:text-[1.5rem]">{props.text}</p>
            </div>
        </div>
    )
}


