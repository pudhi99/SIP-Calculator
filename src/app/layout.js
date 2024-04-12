import { Inter } from "next/font/google";
import "./globals.css";
import "flowbite";
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
      </body>
    </html>
  );
}
