
import Accommodation from '@/components/home/accommodation/Accommodation';
import Banner from '@/components/home/banner/Banner';
import ProductCarousel from '@/components/home/carousel/Carousel';
import MultiFilterForm from '@/components/home/multipuleFilter/MultiFilterForm';
import TestimonialSection from '@/components/home/testimonial/testimonial';
import TourExperience from '@/components/home/tourExperience/Tour';
import Vehicle from '@/components/home/vehicle/Vehicle';





const page = () => {

  return (
    <div>
    
       <Banner></Banner>
       <MultiFilterForm></MultiFilterForm>
       <ProductCarousel></ProductCarousel>

       <TourExperience/>
       <Accommodation/>
       <Vehicle/>
       
      <TestimonialSection></TestimonialSection>

      
    
    </div>
  )
}

export default page;