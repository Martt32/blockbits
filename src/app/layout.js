import "./globals.css";

export const metadata = {
  title: "BlockBit | solana bot v.1",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
