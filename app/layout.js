export const metadata = {
  title: "My PDF Audio Blog",
  description: "Turn PDFs into Chinese notes and audio blogs"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "sans-serif", margin: 40 }}>
        <h1>📚 My PDF Audio Blog</h1>
        <nav style={{ marginBottom: 20 }}>
          <a href="/" style={{ marginRight: 16 }}>Home</a>
          <a href="/studio">Studio</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
