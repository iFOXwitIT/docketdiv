import React from "react";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import TestimonialsSection from "components/TestimonialsSection";
import NewsletterSection from "components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Conquer Your Calendar."
        subtitle="Instantly fill your calendar with every deadline related to your case"
        image="https://dl.airtable.com/.attachmentThumbnails/d35fb6725aa937c0cd76ce07bf16b8b3/f0204a24"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <TestimonialsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle="*People might be affiliated with DocketCalendar"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest court clippings and rule updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
