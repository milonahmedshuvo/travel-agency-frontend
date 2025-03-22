import AccommodationCard from "@/components/card/accommodationCard/AccommodationCard";
import img1 from '../../../assets/card/accommodation/img1.jpg'
import img2 from '../../../assets/card/accommodation/img2.jpg'
import img3 from '../../../assets/card/accommodation/img3.jpg'
import img4 from '../../../assets/card/accommodation/img4.jpg'
import img5 from '../../../assets/card/accommodation/img5.jpg'
import img6 from '../../../assets/card/accommodation/img6.jpg'


const Accommodation = () => {

    const products = [
        {
          id: '1',
          imageUrl: img1,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          day: "5 Days Trip",
          ratting: "5.0",
          address: "Cox Bazar, Bangladesh"
        },
        {
            id: '2',
            imageUrl: img2,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '3',
            imageUrl: img3,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '4',
            imageUrl: img4,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '5',
            imageUrl: img5,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '6',
            imageUrl: img6,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '7',
            imageUrl: img5,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          {
            id: '8',
            imageUrl: img2,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
            address: "Cox Bazar, Bangladesh"
          },
          
      ];




  return (
    <div className="custom-container">

        <h1 className="font-semibold text-[48px] ">Featured <span className="text-[#FF914D]">Accommodations</span></h1>
          <p className="text-[#333333] text-[16px] font-normal mt-1.5">Hit the open road and explore in style with the perfect bike, scooter, car, boat tour for your needs.</p>

     
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {
            products.map((product, index) =><div key={index}>
                <AccommodationCard id={product.id} imageUrl={product.imageUrl} title={product.title} address={product.address} price={product.price} ratting={product.ratting} ></AccommodationCard>
            </div>)
          }
          </div>

    </div>
  )
}

export default Accommodation