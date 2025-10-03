import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CommunityBenefitsSection = (): JSX.Element => {
  // Define benefits data for mapping
  const benefits = [
    {
      icon: "/figmaAssets/email-all-stacked--email-all-stacked-inbox-messages.png",
      iconWidth: "w-[50px]",
      iconHeight: "h-[39px]",
      iconTop: "top-[5px]",
      iconLeft: "left-0",
      title: "Weekly Updates",
      description:
        "Learning prompts, recaps, and curated insights delivered to your inbox with Weekly newsletter",
    },
    {
      icon: "/figmaAssets/video-camera-replacement--video-camera-replacement-cut-jump.png",
      iconWidth: "w-[43px]",
      iconHeight: "h-[50px]",
      iconTop: "top-0",
      iconLeft: "left-1",
      title: "Free Community Sessions",
      description: "Learn about the latest and greatest AI Tools and topics",
    },
    {
      icon: "/figmaAssets/slack.png",
      iconWidth: "w-[45px]",
      iconHeight: "h-[45px]",
      iconTop: "top-[3px]",
      iconLeft: "left-[3px]",
      title: "Largest AI PM Slack Community",
      description: "Connect with 3500+ AI PMs and AI Enthusiasts",
    },
    {
      isCustomIcon: true,
      title: "Monthly Live AMAs",
      description:
        "Get your questions answered by industry experts and thought leaders",
    },
    {
      icon: "/figmaAssets/youtube--youtube-clip-social-video.png",
      iconWidth: "w-[49px]",
      iconHeight: "h-[42px]",
      iconTop: "top-1",
      iconLeft: "left-0",
      title: "YouTube Archive",
      description:
        "Access to all past sessions, tutorials, and expert interviews",
    },
  ];

  return (
    <section className="w-full bg-[#ededed] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section with decorative element */}
        <div className="relative flex flex-col items-center mb-12 lg:mb-16">
          <div className="absolute w-[200px] sm:w-[250px] lg:w-[301px] h-[50px] sm:h-[60px] lg:h-[70px] top-[-7px] right-0 sm:right-[calc(50%-125px)] lg:right-[calc(50%-150px)] " />
          <h2 className="relative [font-family:'Gambetta-Medium',Helvetica] font-medium text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[56px] text-center tracking-[-1.2px] sm:tracking-[-1.8px] lg:tracking-[-2.24px] leading-[1.2] px-4">
            What You Get With the Community
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((benefit, index) => (
            <Card key={index} className="rounded-2xl bg-white">
              <CardContent className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 lg:p-10">
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {benefit.isCustomIcon ? (
                    // Custom icon for AMA
                    <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex-shrink-0">
                      <div className="relative w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] top-0.5 left-0.5">
                        <div className="relative w-[39px] h-[39px] sm:w-[49px] sm:h-[49px] -top-0.5 -left-0.5 bg-[url(/figmaAssets/vector-1.svg)] bg-[100%_100%]">
                          <img
                            className="absolute w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] top-[26px] sm:top-[33px] left-[17px] sm:left-[22px]"
                            alt="Container"
                            src="/figmaAssets/container-1.png"
                          />
                          <img
                            className="absolute w-3 h-[15px] sm:w-4 sm:h-[19px] top-2 sm:top-3 left-[13px] sm:left-[17px]"
                            alt="Ellipse"
                            src="/figmaAssets/ellipse-1845.svg"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard icon
                    <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex-shrink-0">
                      <img
                        className={`absolute ${benefit.iconWidth?.replace('w-[50px]', 'w-[40px] sm:w-[50px]')?.replace('h-[50px]', 'h-[40px] sm:h-[50px]')?.replace('h-[39px]', 'h-[31px] sm:h-[39px]')?.replace('h-[42px]', 'h-[34px] sm:h-[42px]')?.replace('w-[43px]', 'w-[34px] sm:w-[43px]')?.replace('w-[45px]', 'w-[36px] sm:w-[45px]')?.replace('w-[49px]', 'w-[39px] sm:w-[49px]')} ${benefit.iconHeight?.replace('h-[50px]', 'h-[40px] sm:h-[50px]')?.replace('h-[39px]', 'h-[31px] sm:h-[39px]')?.replace('h-[42px]', 'h-[34px] sm:h-[42px]')?.replace('h-[45px]', 'h-[36px] sm:h-[45px]')} ${benefit.iconTop} ${benefit.iconLeft}`}
                        alt={benefit.title}
                        src={benefit.icon}
                      />
                    </div>
                  )}
                  <h3
                    className={`flex-1 [font-family:'Gambetta-Semibold',Helvetica] font-normal text-mainblack-100 text-lg sm:text-xl lg:text-2xl tracking-[-0.8px] sm:tracking-[-0.96px] leading-6`}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#454545cc] text-sm sm:text-base tracking-[-0.14px] leading-6">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
