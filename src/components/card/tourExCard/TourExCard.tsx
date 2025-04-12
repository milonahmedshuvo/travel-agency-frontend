/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Card } from 'antd';
import Image, { StaticImageData } from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const {  } = Card;

interface CustomCardProps {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  price: string;
  day: string,
  ratting: string
}


const TourExperienceCard: React.FC<CustomCardProps> = ({ imageUrl, title, price, day, ratting, id }) => {


  return (
    <Card
      hoverable
      className="w-full rounded-lg border !border-none hover:shadow-lg"
    //   style={{ width: 340,}}
      cover={<div className='overflow-hidden'> <Link href={`/toursExperience/${id}`}>
        <Image width={500} height={500} quality={75} priority alt={title} src={imageUrl.src} className=' w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-125'  />
        </Link>
      </div>}
    >
      <div>
        <h2 className='font-medium text-[#15202E]  text-[16px] sm:text-[22px] md:text-[20px] poppins mt-[-10px]'>{title}</h2>
        <div className='flex justify-between items-center mt-4'>
            <span className='text-[24px] text-[#FF914D] font-[500] poppins'>{price}</span>
            <span className='text-[16px] text-[#525252] font-[300] poppins'>{day}</span>
            <span className='text-[18px] text-[#525252] font-[300] poppins flex items-center gap-1.5'> <FaStar className='text-[#FFB525] text-sm'></FaStar> {ratting}</span>
        </div>
      </div>
    </Card>
  );
};

export default TourExperienceCard;
