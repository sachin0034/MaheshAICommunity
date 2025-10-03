import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const OfferDetailsSection = (): JSX.Element => {
  // Define the benefits data to map over
  const benefits = [
    {
      title: "Craft your 3 hiring narratives and CV positioning",
    },
    {
      title: "AI-first approach to product interviews",
    },
    {
      title: "Mock interviews + live case breakdowns with Mahesh",
    },
    {
      title: "Learn what top AI hiring managers actually look for",
    },
    {
      title:
        "Access to real case studies, prompts, and agent flows used in top interviews",
    },
    {
      title:
        "Frameworks that helps crack AI PM roles at MAANG and Gen AI Startups",
    },
  ];

  return (
    <section className="w-full bg-[#ededed] py-12 lg:py-20">
      <div className="container mx-auto flex flex-col items-center gap-6 lg:gap-8 px-4">
        <div className="flex flex-col items-center gap-4 w-full">
          <Badge className="px-3.5 py-3 bg-[#deefdf] hover:bg-[#deefdf] text-[#017c1d] rounded-2xl">
            <span className="[font-family:'Onest',Helvetica] font-medium text-lg lg:text-2xl tracking-[-0.48px] leading-[21px]">
              What You&#39;ll Walk Away With
            </span>
          </Badge>

          <h2 className="[font-family:'Gambetta-Medium',Helvetica] font-normal text-3xl sm:text-4xl lg:text-[56px] text-center tracking-[-2.24px] leading-tight lg:leading-[67.2px]">
            <span className="font-medium tracking-[-1.25px]">This </span>
            <span className="[font-family:'Gambetta-Bold',Helvetica] font-bold tracking-[-1.25px]">
              Bootcamp
            </span>
            <span className="font-medium tracking-[-1.25px]">
              {" "}
              will give you
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 w-full mt-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl border-b border-[#dfdfdf] shadow-shadow-2xl"
            >
              <CardContent className="flex items-center justify-center p-3 pt-[23px] pb-6 h-[124px]">
                <p className="[font-family:'Manrope',Helvetica] font-bold text-[#0c0c0c] text-xl text-center tracking-[0] leading-[30px]">
                  {benefit.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
