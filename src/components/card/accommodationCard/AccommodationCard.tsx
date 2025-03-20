/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Card } from 'antd';
import { FaStar } from "react-icons/fa";
import { StaticImageData } from 'next/image';
const {  } = Card;


interface CustomCardProps {
  imageUrl: StaticImageData;
  title: string;
  price: string;
  ratting: string,
  address: string,
}


const AccommodationCard: React.FC<CustomCardProps> = ({ imageUrl, title, price,  ratting, address }) => {
  return (
    <Card
      hoverable
      className="w-full rounded-lg border !border-none !hover:shadow-sm "
      cover={ <div className='overflow-hidden'>
            <img alt={title} src={imageUrl.src} className='w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-125' />
      </div> }
    >
      <div className='flex flex-col justify-between'>

        <h2 className='font-medium text-[#15202E] text-[20px] poppins mt-[-10px]'>{title}</h2>
        <h2 className='font-[300] text-[#525252] text-[18px] poppins mt-3'>{address}</h2>
        <div className='flex justify-between items-center mt-3'>
            <span className='text-[28px] text-[#FF914D] font-[500] poppins'>{price}</span>
            <span className='text-[18px] text-[#525252] font-[300] poppins flex items-center gap-1.5'> <FaStar className='text-[#FFB525] text-sm'></FaStar> {ratting}</span>
        </div>
      </div>
    </Card>
  );
};

export default AccommodationCard;
