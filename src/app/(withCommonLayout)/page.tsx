
import Banner from '@/components/home/banner/Banner';
import ProductCarousel from '@/components/home/carousel/Carousel';
import MultiFilterForm from '@/components/home/multipuleFilter/MultiFilterForm';
import TourExperience from '@/components/home/tourExperience/Tour';





const page = () => {

  return (
    <div>
    
       <Banner></Banner>
       <MultiFilterForm></MultiFilterForm>
       <ProductCarousel></ProductCarousel>

       <TourExperience/>
    
    </div>
  )
}

export default page;