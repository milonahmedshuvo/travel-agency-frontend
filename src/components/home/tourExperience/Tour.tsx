import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import img1 from '../../../assets/card/tourexperience/img1.jpg'
import img2 from '../../../assets/card/tourexperience/img2.jpg'
import img3 from '../../../assets/card/tourexperience/img3.jpg'
import img4 from '../../../assets/card/tourexperience/img4.jpg'
import img5 from '../../../assets/card/tourexperience/img5.jpg'
import img6 from '../../../assets/card/tourexperience/img6.jpg'


const TourExperience = () => {

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




  return (
    <div className="custom-container">
      <h1 className="font-semibold text-[48px] ">
        Find Your <span className="text-[#FF914D]">Perfect Experience</span>{" "}
      </h1>
      <p className="text-[#333333] text-[16px] font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>


        {/* button group  */}
      <div className="flex flex-wrap gap-3.5 lg:gap-4 mt-6">
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
          Sea Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
          Land Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
          Cultural Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
          Gastro & Wine Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
          Gastro & oliva oil Tour
        </button>
      </div>


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

        {/* <CustomCard imageUrl="https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996" title="Cox's Bazar, Bangladesh" price="$400" day="5 Days Trip" ratting="5.0" ></CustomCard> */}
      </div>
    </div>
  );
};

export default TourExperience;
