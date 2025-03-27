"use client";
import Image from "next/image";
import img1 from '../../assets/blog/Group.png'



export default function OurStory() {


  return (
    <section className="custom-container px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between">

      <div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Story – 
            {/* <span className="text-[#FF914D] underline mt-11 ">Who We Are</span> */}
          </h2>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 ">
            <span className="text-[#FF914D] underline mt-11 ">Who We Are</span>
          </h2>

          <p className="mt-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            Founded by passionate travelers, we believe every journey should be
            unique and unforgettable.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="max-w-lg text-gray-600 dark:text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-blue-500">🚀</span>
              From sunset boat tours in Santorini to historical deep dives in
              Rome, we curate each tour with passion and local expertise. Our
              mission is to provide authentic and immersive travel experiences
              that go beyond the ordinary.
            </p>
          </div>
        </div>
      </div>

      <div >
          <Image src={img1} width={500} height={500} alt="groupimage" />
      </div>

    </section>
  );
}
