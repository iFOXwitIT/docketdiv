import React from "react";
import PricingSection from "components/PricingSection";

function PricingPage(props) {
  return (
    <PricingSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      title="Pricing"
      subtitle="Choose a plan...any plan, we're watching you."
    />
  );
}

export default PricingPage;
