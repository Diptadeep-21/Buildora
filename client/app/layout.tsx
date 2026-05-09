import "./globals.css";

import AuthProvider from "@/context/AuthContext";

import {
  AppConfigProvider,
} from "@/context/AppConfigContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body>

        <AuthProvider>

          <AppConfigProvider>

            {children}

          </AppConfigProvider>

        </AuthProvider>

      </body>

    </html>
  );
}