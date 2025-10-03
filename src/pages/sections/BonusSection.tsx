import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const BonusSection = (): JSX.Element => {
  // Data for bonus perks cards
  const bonusPerks = [
    {
      title: "Free access to curated AI PM interview prompts & case banks",
      description:
        "Comprehensive collection of real interview questions and scenarios",
    },
    {
      title: "Access to Mahesh's resume and story-building templates",
      description:
        "Proven templates that helped land roles at top tech companies",
    },
    {
      title: "Portfolio review and async resume critique",
      description:
        "Personalized feedback to optimize your application materials",
    },
    {
      title: "Optional participation in pitch day to showcase your build",
      description: "Present your project to peers and get valuable feedback",
    },
    {
      title: "Lifetime updates for future versions of the Bootcamp",
      description:
        "Stay current with evolving AI PM interview trends and practices",
    },
  ];

  return (
    <section className="w-full bg-[#ededed] py-12 lg:py-20">
      <div className="container mx-auto max-w-[1284px] px-4">
        <div className="flex flex-col items-center gap-6 lg:gap-8 mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[67.2px] tracking-[-2.24px] text-center">
            <span className="[font-family:'Gambetta-Bold',Helvetica] font-bold tracking-[-1.25px]">
              Bonus
            </span>
            <span className="[font-family:'Gambetta-Medium',Helvetica] font-medium tracking-[-1.25px]">
              {" "}
              Perks
            </span>
          </h2>
          <p className="[font-family:'Manrope',Helvetica] text-lg lg:text-xl text-mainblack-80 tracking-[-0.20px] leading-[27px] text-center px-4">
            Additional value included with your enrollment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonusPerks.map((perk, index) => (
            <Card key={index} className="bg-white rounded-2xl">
              <CardContent className="flex flex-col gap-6 p-10">
                <h3 className="[font-family:'Gambetta-Semibold',Helvetica] text-2xl text-mainblack-100 tracking-[-0.96px] leading-6">
                  {perk.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] text-sm text-[#454545cc] tracking-[-0.14px] leading-6">
                  {perk.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
