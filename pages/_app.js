import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// 1. Import the Script component from Next.js
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {/* 2. Add the Google Tag scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YC6T9E6S75"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YC6T9E6S75');
        `}
      </Script>

      {/* 2. Google reCAPTCHA Script */}
      <Script 
        src="https://www.google.com/recaptcha/api.js" 
        strategy="lazyOnload" 
      />

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default MyApp;