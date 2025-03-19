import TourExperienceCard from "@/components/card/tourExCard/TourExCard";

const TourExperience = () => {
  const products = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/water-landscape-scenery-natural-blue-ancient_1417-1224.jpg?t=st=1742365428~exp=1742369028~hmac=a09a1022f5ebe058034a43b18dd88effe7dde3dd729dc419787deff50fde3e83&w=996",
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

      <div className="flex flex-col md:flex-row gap-3.5 lg:gap-4 mt-6">
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5">
          Sea Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5">
          Land Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5">
          Cultural Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5">
          Gastro & Wine Tours
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5">
          Gastro & oliva oil Tour
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {products.map((product, index) => (
          <div key={index}>
            <TourExperienceCard
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
