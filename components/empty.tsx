import React from "react";
import Image from "next/image";

interface emptyprops {
  label: string;
}
const Empty = ({ label }: emptyprops) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="empty" fill src="/empty1.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
