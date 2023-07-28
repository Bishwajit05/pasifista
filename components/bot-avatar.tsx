import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-6 w-8">
      <AvatarImage className="p-1" src="/logo1.png" />
    </Avatar>
  );
};

export default BotAvatar;
