export const ServicesCardPartsOne = (props) => {
    return (
        <div className=" rounded-[25px] p-2 bg-[#6edada] text-center">
            <h6 className="text-[1rem] md:text-[1.2rem]">{props.name}</h6>
        </div>
    )
}

export const ServicesCardPartsTwo = (props) => {
    return (
        <div className=" rounded-[25px] p-2 bg-[#c3e26b] text-center">
            <h6 className="text-[1rem] md:text-[1.2rem]">{props.name}</h6>
        </div>
    )
}
