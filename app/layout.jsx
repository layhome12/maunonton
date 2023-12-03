import "@/assets/css/globals.css";

export const metadata = {
  title: "Mau Nonton",
  description: "Tempat nonton asyik tanpa iklan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
