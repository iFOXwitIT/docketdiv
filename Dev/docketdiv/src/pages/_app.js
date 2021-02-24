import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics.js";
import { AuthProvider } from "util/auth.js";
import { ThemeProvider } from "util/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <>
          <Navbar
            color="default"
            logo="https://dl.airtable.com/.attachmentThumbnails/02c0a5308cc5d4170c9b677925b11c03/6fdb35ab"
            logoInverted="https://dl.airtable.com/.attachmentThumbnails/a97885166ca4ff580a9c35cd506ea88e/45bd5d6e"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2021 DocketCalendar"
            logo="https://dl.airtable.com/.attachmentThumbnails/02c0a5308cc5d4170c9b677925b11c03/6fdb35ab"
            logoInverted="https://dl.airtable.com/.attachmentThumbnails/a97885166ca4ff580a9c35cd506ea88e/45bd5d6e"
            sticky={true}
          />
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
