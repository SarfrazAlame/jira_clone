import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader>
        <CardTitle>
            Welcome back!
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default SignInCard;
