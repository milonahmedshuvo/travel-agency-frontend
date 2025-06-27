import { useEffect, useState } from "react";
// import img1 from "../../../assets/card/tourexperience/img1.jpg";
import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
// import { useGetSeaTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { TTourPackage } from "@/components/lib/types";
import CustomPagination from "@/components/others/pagination/CustomPagination";
import Loading from "@/components/shared/loading/Loading";
import { getBaseUrl } from "@/config/base-url";

interface Component5Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}



const SeaTourItems = ({scrollRef}:Component5Props) => {

  const [newPage, setNewPage] = useState(1);
  // const { data, isLoading } = useGetSeaTourQuery("");
  // if (isLoading) {
  //   return <Loading />;
  // }
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourMeta, setTourMeta] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  }>({
    page: 1,
    limit: 12,
    total: 100,
    totalPage: 10,
  });

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log({token})
        const response = await fetch(
          `${getBaseUrl()}/tour-packages?limit=12&category=SEA_TOUR&page=${newPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`, // optional
            },
          }
        );

        const data = await response.json();
        setTours(data?.data || []);
        setTourMeta(data?.meta);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [newPage]);

  if (loading) {
    return <Loading />;
  }

  console.log("pagination current page:", newPage);

  return (
    <section ref={scrollRef} className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Find Your <span className="text-[#FF914D]">Perfect Experience</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {tours?.map((product: TTourPackage, index: number) => (
          <div key={index}>
            <TourExperienceCard
              id={product.id}
              imageUrl={product.images?.[1]?.url}
              title={product.title}
              price={`$${product.price}`}
              day={`${product.duration} Days Trip`}
              ratting={"5.0"}
            ></TourExperienceCard>
          </div>
        ))}
      </div>

      {/* Handle Pagination here  */}
      {/* <Pagination total={40} defaultCurrent={1} /> */}

      {/* call custom pagination handle here  */}
      <CustomPagination
        meta={tourMeta}
        onPageChange={(newPage) => {
          console.log("Go to page:", newPage);
          // fetch new data here
          setNewPage(newPage);
        }}
      />
    </section>
  );
};

export default SeaTourItems;
