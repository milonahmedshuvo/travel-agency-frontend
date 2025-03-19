/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Card } from 'antd';

const {  } = Card;

interface CustomCardProps {
  imageUrl: string;
  title: string;
  price: string;
  day: string,
  ratting: string
}

const TourExperienceCard: React.FC<CustomCardProps> = ({ imageUrl, title, price, day, ratting }) => {
  return (
    <Card
      hoverable
      className="w-full rounded-lg border !border-none !shadow-none "
    //   style={{ width: 340,}}
      cover={<img alt={title} src={imageUrl} />}
    >
      <div>
        <h2 className='font-medium text-[#15202E] text-[20px] poppins mt-[-10px]'>{title}</h2>
        <div className='flex justify-between items-center mt-'>
            <span className='text-[30px] text-[#FF914D] font-[500] poppins'>{price}</span>
            <span className='text-[21px] text-[#525252] font-[300] poppins'>{day}</span>
            <span className='text-[21px] text-[#525252] font-[300] poppins'>{ratting}</span>
        </div>
      </div>
    </Card>
  );
};

export default TourExperienceCard;
