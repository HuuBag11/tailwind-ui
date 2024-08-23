import React from "react";

interface ItemSearchProps{
    text?: string;
    bg?: string;
    icon?: React.ReactNode;
}

export const ItemSearch: React.FC<ItemSearchProps> = ({text,bg,icon}) => {
  return (
    <div className="rounded-[8px] w-full text-4 duration-300 ease-in font-medium hover:shadow-xl  h-[108px] shadow-md flex flex-col items-center justify-center" style={{ backgroundColor: bg }}>
      {icon}
      {text}
    </div>
  );
};
