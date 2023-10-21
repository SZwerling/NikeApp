import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
   return (
      <section className="max-container">
         <h3 className="font-palanquin text-center text-4xl font-bold">
            What Our<span className="text-coral-red"> Customers</span> Say
         </h3>
         <p className="m-auto info-text mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their
            exceptional experience with us
         </p>
         <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review}/>
          ))}
         </div>
      </section>
   );
};

export default CustomerReviews;

// {
//   imgURL: customer1,
//   customerName: 'Morich Brown',
//   rating: 4.5,
//   feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
// },
