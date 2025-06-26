import Footer from "@/components/Footer";
import ThemeRegistry from "@/components/ThemeRegistry";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Machine Learning Project Mentor",
  description:
    "Start Building Machine Learning Projects Using Just JavaScript!",
  openGraph: {
    type: "website",
    url: "https://aiprojectmentor.vercel.app/",
    title: "Machine Learning Project Mentor",
    description:
      "Start Building Machine Learning Projects Using Just JavaScript!",
    siteName: "Machine Learning Project Mentor",
    images: [
      { url: "https://aiprojectmentor.vercel.app/joinOurCommunityImage.jpg" },
    ],
  },
};

// hotjar:
//    (function (c, s, q, u, a, r, e) {
//         c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
//         c._hjSettings = { hjid: a };
//         r = s.getElementsByTagName('head')[0];
//         e = s.createElement('script');
//         e.async = true;
//         e.src = q + c._hjSettings.hjid + u;
//         r.appendChild(e);
//     })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6396330);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/b59ea57b-d006-4839-8915-5ac195d5675a.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
            `,
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
