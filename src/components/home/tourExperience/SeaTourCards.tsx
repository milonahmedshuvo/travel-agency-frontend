import TourExperienceCard from "@/components/card/tourExCard/TourExCard"
import img1 from '../../../assets/card/tourexperience/img1.jpg'
import img2 from '../../../assets/card/tourexperience/img2.jpg'
import img3 from '../../../assets/card/tourexperience/img3.jpg'
import img4 from '../../../assets/card/tourexperience/img4.jpg'
import img5 from '../../../assets/card/tourexperience/img5.jpg'
import img6 from '../../../assets/card/tourexperience/img6.jpg'


const products = [
    {
      id: '1',
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '2',
      imageUrl:img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '3',
      imageUrl:img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '4',
      imageUrl:img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '5',
      imageUrl:img5,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '6',
      imageUrl:img6,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '7',
      imageUrl:img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: '8',
      imageUrl:img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
  ];

const TabSeaTourCards = () => {


    

  return (
    
    <div>
        {/* tour card  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {products.map((product, index) => (
          <div key={index}>
            <TourExperienceCard
               id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              day={product.day}
              ratting={product.ratting}
            ></TourExperienceCard>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default TabSeaTourCards;