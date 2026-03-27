import "./globals.css";

export const metadata = {
  title: "APEXIZ Client Hours Portal",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="layout">
          <aside className="sidebar">
            <img src="https://www.apexiz.com/images/apexiz-logo.png" className="logo"/>
            
            <nav>
              <a href="/">Dashboard</a>
              <a href="/logs">Time Logs</a>
              <a href="/admin">Admin</a>
            </nav>
          </aside>

          <main className="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}