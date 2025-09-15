import React from 'react';

// Define the props for the ProcessCard component to ensure type safety.
interface ProcessCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-[297px] h-[297px] px-[15px] py-[13px] bg-[#F6F7F8] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] overflow-hidden rounded-[20px] outline outline-1 outline-[rgba(255,255,255,0.60)] outline-offset-[-1px] flex flex-col justify-start items-start gap-[10px]">
      <div className="relative flex flex-col justify-start items-start gap-[10px]">
        <div className="w-[79px] h-[79px] bg-[#D9D9D9] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]" />
        {icon && (
          <div className="w-20 h-20 absolute top-0 left-0 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <div className="self-stretch text-[#11406E] text-[32px] font-['Bricolage_Grotesque'] font-semibold">
        {title}
      </div>
      <div className="self-stretch flex-1 text-[#4B5563] text-base font-['Poppins'] font-normal">
        {description}
      </div>
    </div>
  );
};

export default ProcessCard;