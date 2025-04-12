/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Card } from 'antd';
import Image, { StaticImageData } from 'next/image';
import { FaStar } from 'react-icons/fa';
const {  } = Card;



interface VehicleCardProps {
  imageUrl: StaticImageData;
  title: string;
  price: string;
  time: string,
  ratting: string
}


const VehicleCard: React.FC<VehicleCardProps> = ({ imageUrl, title, price, time, ratting }) => {




  return (
    <Card
      hoverable
      className="w-full rounded-lg border !border-none !hover:shadow-sm"
      cover={<div className='overflow-hidden'>
        <Image  width={500} height={500} quality={75} priority alt={title} src={imageUrl.src} className=' w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-125'  />
      </div>}
    >
      <div>
        <h2 className='font-medium text-[#15202E] text-[16px] sm:text-[22px] md:text-[20px] poppins mt-[-10px]'>{title}</h2>
        <div className='flex justify-between items-center mt-4'>
            <span className='text-[28px] text-[#FF914D] font-[500] poppins'>{price}</span>
            <span className='text-[18px] text-[#525252] font-[300] poppins'>{time}</span>
            <span className='text-[18px] text-[#525252] font-[300] poppins flex items-center gap-1.5'> <FaStar className='text-[#FFB525] text-sm'></FaStar> {ratting}</span>
        </div>
      </div>
    </Card>
  );
};

export default VehicleCard;
