
import Banner from '@/components/home/banner/Banner';
import ProductCarousel from '@/components/home/carousel/Carousel';
import MultiFilterForm from '@/components/home/multipuleFilter/MultiFilterForm';
import React from 'react'

const page = () => {

  return (
    <div>
    
       <Banner></Banner>
       <MultiFilterForm></MultiFilterForm>
       <ProductCarousel></ProductCarousel>
    
    </div>
  )
}

export default page;