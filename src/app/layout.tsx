"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/styles/theme";
import Header from "@/components/Header/Header"

const metadata = {
  title: "Stonesthrow Clone",
  description: "Mimicking the Stonesthrow website with Next.js and Material UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
