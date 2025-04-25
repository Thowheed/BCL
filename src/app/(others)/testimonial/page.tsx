import dynamic from 'next/dynamic';

const TestimonialCompo = dynamic(() => import('../../../Components/TestimonialCarosel'));


const Testimonial = () => {

    return (
        <div><TestimonialCompo /></div>
    )
}

export default Testimonial