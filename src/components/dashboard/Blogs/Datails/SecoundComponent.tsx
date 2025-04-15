
interface PropsTyps {
    title: string
}

const SecoundComponent = ({title}: PropsTyps) => {

  return (
    <div className="mt-10">
       <h2 className="text-[20px] text-[#15202E] font-[500]">{title}</h2>

       <p className="text-[#333] text-[16px] font-[400] mt-4">
        During World War II, the U.S. military built concrete bunkers all over
        the island of Oahu as defensive lookout posts guarding Hawaii, and most
        of them have amazing views of the coastline. These pillboxes have been
        abandoned ever since the war, but theyve turned into beloved hiking
        destinations because of the great scenery and history behind them. Heres
        my guide for all of the pillbox hikes in Oahu, including some hidden
        gems!
      </p>

      <p className="text-[#333] text-[16px] font-[400] mt-7">
      The first pillbox at Lanikai can be reached in about 15-20 minutes of hiking, and in my opinion it has the best views and photo spots of the whole hike.
      </p>


      <p className="text-[#333] text-[16px] font-[400] mt-7">
      Its a fun place to chill after hiking, and theres a nice ocean breeze so it doesnt feel too hot up there even in the middle of the day. From the first pillbox at Lanikai, its only a 10 minute walk to reach the second pillbox, which is bigger.
      </p>

      <p className="text-[#333] text-[16px] font-[400] mt-7">
      Its a fun place to chill after hiking, and theres a nice ocean breeze so it doesnt feel too hot up there even in the middle of the day. From the first pillbox at Lanikai, its only a 10 minute walk to reach the second pillbox, which is bigger.
      </p>


      <p className="text-[#333] text-[16px] font-[400] mt-7">
      Its a fun place to chill after hiking, and theres a nice ocean breeze so it doesnt feel too hot up there even in the middle of the day. From the first pillbox at Lanikai, its only a 10 minute walk to reach the second pillbox, which is bigger.
      </p>

      

      <div className="mt-10 space-y-1 ">
        <p className="text-[#333] text-[16px] font-[400]  ">Distance: <span>1 mile (1.6 km) roundtrip</span> </p>
        <p className="text-[#333] text-[16px] font-[400]  ">Elevation Gain: <span>1 Elevation Gain: 450 feet (140 m)</span> </p>
        <p className="text-[#333] text-[16px] font-[400] ">Difficulty:  <span>Easy</span> </p>
      </div>

      <p className="text-[#333] text-[16px] font-[400] mt-6 ">Reed More <span className="underline"> Lanikai Pillbox Hike</span> </p>
    </div>
  )
}

export default SecoundComponent