
interface TTitleSubTitle {
  title: string;
  subTitle: string;
}


const FirstComponent = ({title, subTitle}:TTitleSubTitle) => {

  
  return (
    <div>
      <div className="mt-10 flex items-center justify-between ">
        <div className="space-y-2">
          <h1 className="text-[28px] font-[500] text-[#15202E]">
            {title}
          </h1>
          {/* <div className="text-[#333] text-[16px] font-[400] flex gap-3">
            <span>Coxs Bazar, Bangladesh</span>
            <span>5 Days Trip</span>
          </div> */}
        </div>     
      </div>

      <p className="text-[#333] text-[16px] font-[400] mt-7"> {subTitle} </p>
    </div>
  );
};

export default FirstComponent;
