import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "GFG Website Official",
  description: "Official website for GeeksforGeeks student chapter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}