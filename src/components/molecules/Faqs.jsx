import Background from '../../assets/About.svg'
import { FaqsCard } from '../atoms/FaqsCard.jsx'
const Faqs = () => {
    return (
        <div className="pt-[7rem] md:pt-[8.5rem] pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 pb-14 md:pb-20 lg:pb-32"
        style={{background: `url("${Background}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} >
            <div className='mb-[2rem] md:mb-[2.5rem]'>
                <h3>
                    <span className='text-[1.5rem] md:text-[3.5rem] text-[#808080] lg:text-[4.5rem]
                                    font-semibold'>
                                        Frequently asked
                    </span>
                    <br />
                    <span className='text-[1.5rem] md:text-[3.5rem] ml-[5rem] md:ml-[12rem] lg:ml-[20rem] text-[#2b2b2c]
                                    lg:text-[4.5rem] font-semibold'>
                                        questions
                    </span>
                </h3>
            </div>
            <div className='flex flex-col bg-[#6edada] p-2 md-p-8 rounded-[10px]'>
                <FaqsCard question="How do I receive my websites?"
                    answer="In your Trello board, each card with a request that you add has a comment section where communication around this request will be happening.That's where we will update you on the progress, ask questions, receive your feedback and notify you when your website is complete. You'll also have the link to the hosted site and a drive with the code files."/>
                <FaqsCard question="Can I hire you to develop for multiple clients for my agency?"
                    answer="Definitely! We love to work with agencies. Our subscription is not limited to the amount of your clients, we can work with them all under a single subscription, completing one or two requests at a time, depending on your plan."/>
                <FaqsCard question="Can all types of requests be completed in a 24-72h?"
                    answer="Usually some requests take under a week to complete. However, more complex requests may require more time. We often split such requests into stages and update you on them every working day."/>
                <FaqsCard question="Is there any websites work you don't do?"
                    answer="Yes. As our focus is on Frontend web development, we don't build Backend for websites or mobile apps."/>
            </div>
        </div>
    )
}

export default Faqs;