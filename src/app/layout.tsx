'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';
import { ToastContainer } from 'react-toastify';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <div className="container">
          {children}
        </div>
        <AppFooter />
        <ToastContainer />
      </body>
    </html>
  );
}
