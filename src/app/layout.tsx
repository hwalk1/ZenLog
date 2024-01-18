import Nav from "./(components)/Nav";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
