
import "../styles/globals.css";

export const metadata = {
  title: "DALL·E",
  description: "Experiment with DALL·E, an AI system by OpenAI",
  icons: {
    icon: [
      {
        url: "https://openailabs-site.azureedge.net/public-assets/d/83c9d0e8bc/favicon-32x32.png",
        size: "32x32",
      },
      {
        url: "https://openailabs-site.azureedge.net/public-assets/d/83c9d0e8bc/favicon-16x16.png",
        size: "16x16",
      },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      {
        url: "https://openailabs-site.azureedge.net/public-assets/d/83c9d0e8bc/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://openailabs-site.azureedge.net/public-assets/d/83c9d0e8bc/mask-icon.svg",
        color: "#000000",
      },
    ],
  },
  themeColor: "#fafafc",
  twitter: {
    card: "summary_large_image",
    title: "DALL·E",
    description: "Experiment with DALL·E, an AI system by OpenAI",
    siteId: "openai",
    creator: "@openai",
    images: ["https://cdn.openai.com/API/images/dall-e-2-og.jpg"],
  },
  openGraph: {
    title: "DALL·E",
    description: "Experiment with DALL·E, an AI system by OpenAI",
    type: "website",
    url: "https://dalle2clone.vercel.app",
    images: [
      {
        url: "https://cdn.openai.com/API/images/dall-e-2-og.jpg",
        width: 1200,
        height: 720,
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
