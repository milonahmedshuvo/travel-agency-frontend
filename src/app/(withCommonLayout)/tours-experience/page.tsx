import TourExperience from '@/components/tour/tour-experience';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Hvarlocalguide - Tour Experiences",
  description: "Hvar Local Travel Agency",
};

const TourExperiencePage = () => {
  return (
    <div>
      <TourExperience/>
    </div>
  );
};

export default TourExperiencePage;