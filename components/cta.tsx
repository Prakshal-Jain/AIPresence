import Script from "next/script"

export function CTA() {
  return (
    <section id="waitlist" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Join the Early Access Waitlist
            </h2>
            <p className="text-balance text-lg text-muted-foreground">
              {"Be among the first businesses to appear natively in AI conversations. Limited spots available."}
            </p>
          </div>

          <div style={{ width: "100%", height: "700px" }} id="my-cal-inline-15min" />
        </div>
      </div>

      <Script id="cal-embed" strategy="afterInteractive">
        {`
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          
          Cal("init", "15min", {origin:"https://app.cal.com"});
          
          Cal.ns["15min"]("inline", {
            elementOrSelector:"#my-cal-inline-15min",
            config: {"layout":"month_view"},
            calLink: "prakshal-jain/15min",
          });
          
          Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>
    </section>
  )
}
