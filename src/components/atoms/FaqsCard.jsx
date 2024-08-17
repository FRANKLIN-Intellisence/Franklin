import { useState } from 'react'
import '../molecules/Styles.css'

export const FaqsCard = (props) => {
    const [Answer, setAnswer] = useState(false);


    return (
            <div className='pb-1'>
                <button className='font-semibold text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem] w-full text-left' 
                        onClick={Answer ? () => setAnswer(false) : () => setAnswer(true) }>
                        {props.question}
                </button>
                {Answer && (
                    <div className='p-2 md:p-4 bg-[#c3e26b] rounded-[10px] scale-up-ver-top'>
                        <p className='text-[0.95rem] md:text-[1.1rem] lg:text-[1.2rem] scale-up-tr'>
                            {props.answer}
                        </p>
                    </div>
                )}
                <hr className='Horizontal mb-1 md:mb-2 mt-1 md:mt-2'/>
            </div>
    )
}

