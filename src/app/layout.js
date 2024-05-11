import { Inter } from "next/font/google";
import "./globals.css";
import "flowbite";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import NavbarComponent from "@/components/NavbarComponent";
// import SidebarComponent from "@/components/SidebarComponent";
// import { useEffect, useState } from "react";

// ... (import statements)

export default function RootLayout({ children }) {
  // const [isMobile, setIsMobile] = useState(false);

  // const toggleSidebar = () => {
  //   setIsMobile(!isMobile);
  // };

  // useEffect(() => {
  //   // Check if the screen width is below a certain threshold for mobile
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
  //   };

  //   // Initial check on component mount
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4777990936225991"
          crossorigin="anonymous"
        />
        <Script />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-NRVXF4XMS6"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NRVXF4XMS6');
          `}
        </Script>

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PD252XPF');
          `}
        </Script>

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4777990936225991"
     crossorigin="anonymous"></Script>
      </head>

      <body className="">
        <div className="h-screen overflow-y-auto">
          {children}
          {/* <NavbarComponent isMobile={isMobile} />
          <div className="flex">
            {isMobile ? null : (
              // Render sidebar for desktop
              <div className="w-64">
                <SidebarComponent />
              </div>
            )}
            <div className="flex-1">{children}</div>
          </div> */}
        </div>
        <SpeedInsights />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PD252XPF"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
