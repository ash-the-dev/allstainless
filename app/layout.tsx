export const metadata = {
  title: "All Stainless Installations | Coming Soon",
  description: "Book a site visit while our new website is under construction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}