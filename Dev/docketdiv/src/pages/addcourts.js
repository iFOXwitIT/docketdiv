import React from "react";
import DashboardSection from "components/DashboardSection";
import { requireAuth } from "util/auth.js";

function AddcourtsPage(props) {
  return (
    <DashboardSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      title="Add Courts"
      subtitle=""
    />
  );
}

export default requireAuth(AddcourtsPage);
