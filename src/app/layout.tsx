import AuthProvider from "./(components)/AuthProvider";
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
        <AuthProvider>
          <div className="m-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
