import Header from "@/app/header";
import Sidebar from "./sidebar";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex flex-col w-screen min-h-screen">
          <Header />
          <div className="flex flex-row flex-grow overflow-x-auto">
            <Sidebar />
            <div className="flex-grow p-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
