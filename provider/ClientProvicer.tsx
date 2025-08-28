"use client";

import NextTopLoader from "nextjs-toploader";

function ClientProvider() {
  return (
    <>
      <NextTopLoader
        showSpinner={false}
        crawlSpeed={200}
        height={3}
        crawl={true}
        color="transparent"
      />

      <style jsx global>{`
        #nprogress .bar {
          background: linear-gradient(to right, #9333ea, #fb923c) !important;
        }
      `}</style>
    </>
  );
}

export { ClientProvider };
