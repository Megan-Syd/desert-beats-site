import { Metadata } from "next";
import FAQPageClient from "./FaqPageClient";

export const metadata : Metadata = {
    title: 'FAQ | Desert Beats',
}

export default function FAQPage() {
    return <FAQPageClient />;
  }