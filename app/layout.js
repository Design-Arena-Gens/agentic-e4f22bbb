import "./globals.css";

export const metadata = {
  title: "How to Play",
  description: "Interactive playbook for learning games quickly."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
