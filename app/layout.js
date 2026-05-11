import "./globals.css";

export const metadata = {
  title: "Humanevals",
  description:
    "A video-first marketplace where recruiters answer one question on video and get discovered by hiring teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
