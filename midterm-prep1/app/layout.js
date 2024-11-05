import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Random Music Genres</title>
      </head>
      <body>{children}</body>
    </html>
  );
}