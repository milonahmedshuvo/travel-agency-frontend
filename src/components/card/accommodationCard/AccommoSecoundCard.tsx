/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Card } from 'antd';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
const {  } = Card;


interface CustomCardProps {
  id: string,
  imageUrl: string,
  title: string;
  price: string | number
  ratting: string,
  address: string,
  kitchenValue: string | number
  bedRoomValue: string | number
  bathroomValue: string | number
  livingRoomValue: string | number
}


const AccommodationSecoundCard: React.FC<CustomCardProps> = ({ imageUrl, title, price,  ratting, address, id, kitchenValue, bedRoomValue, bathroomValue, livingRoomValue }) => {
  return (
    <Card
      hoverable
      className="w-full rounded-lg border !border-none !hover:shadow-sm "
      cover={ <div className='overflow-hidden'>
            <Link href={`/acommodation/${id}`} > 
            <img alt={title} src={imageUrl} className='w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-125' />
            </Link>
      </div> }
    >
      <div className='flex flex-col justify-between'>
        <h2 className='font-medium text-[#15202E] text-[20px] poppins mt-[-10px]'>{title}</h2>
        <h2 className='font-[300] text-[#525252] text-[18px] poppins mt-3'>{address}</h2>


          <div className='flex justify-between items-center mt-4 border-t border-b border-[#EBEBEB] py-2.5'>
               <div className='flex flex-col items-center '>
                  <span className='font-[300]  text-[15px] xl:text-[13px] poppins text-[#101010]'>kitchen</span>
                  <span className='font-[300]  text-[15px] poppins text-[#101010]'>{kitchenValue}</span>
               </div>
               <div className='flex flex-col items-center border-l-[2px] border-[#38B6FF] justify-center w-1/4'>
                  <span className='font-[300]  text-[15px] xl:text-[13px]  poppins text-[#101010] pl-1'>Bed Room</span>
                  <span className='font-[300]  text-[15px] poppins text-[#101010]'>{bedRoomValue}</span>
               </div>
               <div className='flex flex-col items-center border-l-[2px] border-[#38B6FF] justify-center w-1/4'>
                  <span className='font-[300]  text-[15px] xl:text-[13px] poppins text-[#101010] pl-1'>bathroom</span>
                  <span className='font-[300]  text-[15px] poppins text-[#101010]'>{bathroomValue}</span>
               </div>
               <div className='flex flex-col items-center border-l-[2px] border-[#38B6FF] justify-center w-1/4'>
                  <span className='font-[300]  text-[15px] xl:text-[12px] poppins text-[#101010] pl-1'>living room</span>
                  <span className='font-[300]  text-[15px] poppins text-[#101010]'>{livingRoomValue}</span>
               </div>
          </div>




        <div className='flex justify-between items-center mt-3'>
            <span className='text-[24px] text-[#FF914D] font-[500] poppins'>{price}</span>
            <span className='text-[18px] text-[#525252] font-[300] poppins flex items-center gap-1.5'> <FaStar className='text-[#FFB525] text-sm'></FaStar> {ratting}</span>
        </div>
      </div>
    </Card>
  );
};

export default AccommodationSecoundCard;
