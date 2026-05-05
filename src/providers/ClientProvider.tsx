"use client";

import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

const SendToTop = dynamic(() => import("../app/SendToTop"), {
  ssr: false,
});

export default function ClientProviders() {
  return (
    <>
      <NextTopLoader color="#2563eb" height={3} showSpinner={false} />

      <SendToTop />

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}
