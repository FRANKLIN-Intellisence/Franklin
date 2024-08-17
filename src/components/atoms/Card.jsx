export const CardOne = (props) => {
    return (
        <div className="flex flex-col pt-[7rem] lg:pt-8 gap-16 lg:flex-row lg:items-start justify-between">
            <div className="w-full m-auto lg:w-[40%] lg:mt-[5rem]">
                <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[5rem] text-[#2b2b2c] font-sans font-bold mb-2">{props.head}</h1>
                <p className="w-[90%] text-[1.25rem] md:text-[1.5rem] text-[#464949] font-sans font-semibold">{props.sentence}</p>
            </div>
            <div className="w-[100%] m-auto lg:w-[40%] md:w-[60%]">
                <img src={props.image} alt="Image" className="w-full m-auto rounded-[20px] lg:rounded-[30px]" />
            </div>
        </div>
    )
}

export const CardTwo = (props) => {
    return (
        <div className="flex flex-col pt-[0.5rem] lg:pt-8 gap-12 lg:flex-row lg:place-items-start justify-between">
            <div className="w-[95%] m-auto lg:w-[40%] lg:mt-[1rem]">
                <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] text-[#2b2b2c] font-sans 
                                font-bold mb-2 md:mb-4">
                                    {props.head}
                </h1>
                <p className="w-[90%] text-[1.25rem] md:text-[1.5rem] text-[#464949] font-sans font-semibold">{props.sentence}</p>
            </div>
            <div className="w-[100%] m-auto lg:w-[40%] md:w-[60%]">
                <img src={props.image} alt="Image" className="w-full m-auto rounded-[20px] lg:rounded-[30px]" />
            </div>
        </div>
    )
}
