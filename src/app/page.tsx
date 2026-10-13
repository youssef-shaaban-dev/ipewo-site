import Link from "next/link";

export default function RootPage() {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content="0; url=/ar/" />
        <title>فلاتر التكييف المركزي وتنقية الهواء في مصر | إبيو IPEWO</title>
        <meta
          name="description"
          content="تصنيع وتوريد فلاتر التكييف المركزي وHEPA وULPA وحلول تنقية الهواء للشركات والقطاعات الحيوية في مصر."
        />
        <link rel="canonical" href="https://ipewofilters.com/ar/" />
        <link rel="alternate" hrefLang="ar" href="https://ipewofilters.com/ar/" />
        <link rel="alternate" hrefLang="en" href="https://ipewofilters.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://ipewofilters.com/ar/" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif", backgroundColor: "#f8fafc" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.location.pathname === '/' || window.location.pathname === '') { window.location.replace('/ar/'); }`,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
          <p style={{ color: "#334155", fontSize: "18px", fontWeight: "bold" }}>
            جاري تحويلك للموقع... / Redirecting to website...
          </p>
          <Link
            href="/ar"
            style={{ color: "#2563eb", textDecoration: "underline", fontSize: "16px", marginTop: "10px" }}
          >
            اضغط هنا إذا لم يتم التحويل تلقائياً / Click here if not redirected
          </Link>
        </div>
      </body>
    </html>
  );
}
