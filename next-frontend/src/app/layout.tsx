import { Metadata } from "next";

import {
  Mochiy_Pop_One,
  Sansita,
  Averia_Serif_Libre,
  Pridi,
} from "next/font/google";

import "./globals.css";

const mochiy = Mochiy_Pop_One({
  variable: "--mochiy-font",
  subsets: ["latin"],
  preload: true,
  weight: "400",
});

const sansita = Sansita({
  variable: "--sansita-font",
  subsets: ["latin"],
  preload: true,
  weight: ["400", "700", "800", "900"],
});

const averia = Averia_Serif_Libre({
  variable: "--averia-font",
  subsets: ["latin"],
  preload: true,
  weight: ["400", "700", "300"],
});

const pridi = Pridi({
  variable: "--pridi-font",
  subsets: ["latin"],
  preload: true,
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xenrir.vercel.app"),
  title: "Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
  description:
    "Welcome to Xenrir, the ultimate fashion destination for trendsetters who want to redefine their style and unlock incredible rewards along the way! Our cutting-edge platform revolutionizes the fashion industry, empowering customers to discover unique pieces and establish their fashion prowess with verifiable authenticity. Step into a world where self-expression meets innovation, where every wardrobe choice is a statement waiting to be made. At Xenrir, we believe in more than just fashion – we believe in a community that thrives on individuality. With our innovative tokenization technology, you can now take ownership of your favorite fashion items and showcase your personal style like never before. Say goodbye to impersonal transactions and hello to a world where your fashion choices are celebrated and rewarded. But that's not all – with Xenrir, fashionistas can also earn rewards by lending, borrowing, and staking their tokens, creating a dynamic ecosystem that rewards both creativity and investment. Unlock a world of possibilities and be part of the fashion revolution that transcends boundaries. Don't settle for ordinary fashion experiences or generic styles. Join Xenrir today and let your wardrobe reflect your true essence. It's time to level up your fashion game and embrace the limitless possibilities of style",
  keywords:
    "online fashion store, fashion destination, trendy clothing, stylish apparel, fashion revolution, unique fashion pieces, authentic fashion items, fashion community, personal style, fashion tokenization, verifiable ownership, fashion rewards, fashion innovation, trendsetter, fashion statement, self-expression, fashion ecosystem, fashion investment, fashionistas, fashion game, fashion choices, fashion empowerment, fashion celebration, fashion boundaries, fashion experience, fashion styles, men's clothing, women's clothing, men's fashion, women's fashion, trendy outfits, designer clothing, fashion trends, fashion inspiration, fashion influencers, fashion bloggers, fashion tips, fashion accessories, jewelry, handbags, shoes, sunglasses, hats, scarves, watches, belts, socks, dresses, skirts, tops, blouses, shirts, t-shirts, pants, jeans, shorts, jackets, coats, suits, activewear, swimwear, athleisure, formal wear, casual wear, evening wear, party wear, beachwear, lingerie, loungewear, plus-size fashion, petite fashion, sustainable fashion, eco-friendly fashion, bohemian fashion, streetwear, vintage fashion, retro fashion, high fashion, luxury fashion, affordable fashion, online shopping, fashion sales, fashion discounts, fashion deals, fashion promotions, fashion clearance, fashion inspiration, fashion trends, fashion forward, fashion-conscious, fashion-forward individuals, fashion wardrobe, fashion styling, fashion makeover, fashion essentials, fashion must-haves, fashion influencers, fashion bloggers, fashion influencers, fashion advice, fashion tips, fashion hacks, fashion events, fashion shows, fashion exhibitions, fashion industry, fashion designers, fashion brands, fashion labels, fashion collections, fashion lookbooks, fashion editorial, celebrity fashion, red carpet fashion, runway fashion, fashion photography, fashion models, fashion accessories, fashion jewelry, fashion watches, fashion bags, fashion shoes, fashion hats, fashion scarves, fashion belts, fashion sunglasses, fashion socks, fashion dresses, fashion skirts, fashion tops, fashion blouses, fashion shirts, fashion t-shirts, fashion pants, fashion jeans, fashion shorts, fashion jackets, fashion coats, fashion suits, fashion activewear, fashion swimwear, fashion athleisure, fashion formal wear, fashion casual wear, fashion evening wear, fashion party wear, fashion beachwear, fashion lingerie, fashion loungewear, fashion plus-size clothing, fashion petite clothing, sustainable fashion, eco-friendly fashion, bohemian fashion, fashion streetwear, fashion vintage clothing, fashion retro clothing, high fashion, luxury fashion, affordable fashion, online shopping, fashion sales, fashion discounts, fashion deals, fashion promotions, fashion clearance, fashion inspiration, fashion trends",
  openGraph: {
    title: "Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
    description:
      "Welcome to Xenrir, the ultimate fashion destination for trendsetters who want to redefine their style and unlock incredible rewards along the way! Our cutting-edge platform revolutionizes the fashion industry, empowering customers to discover unique pieces and establish their fashion prowess with verifiable authenticity. Step into a world where self-expression meets innovation, where every wardrobe choice is a statement waiting to be made. At Xenrir, we believe in more than just fashion – we believe in a community that thrives on individuality. With our innovative tokenization technology, you can now take ownership of your favorite fashion items and showcase your personal style like never before. Say goodbye to impersonal transactions and hello to a world where your fashion choices are celebrated and rewarded. But that's not all – with Xenrir, fashionistas can also earn rewards by lending, borrowing, and staking their tokens, creating a dynamic ecosystem that rewards both creativity and investment. Unlock a world of possibilities and be part of the fashion revolution that transcends boundaries. Don't settle for ordinary fashion experiences or generic styles. Join Xenrir today and let your wardrobe reflect your true essence. It's time to level up your fashion game and embrace the limitless possibilities of style",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Xenrir Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "logo.png",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${mochiy.variable} ${sansita.variable} ${averia.variable} ${pridi.variable} w-full h-full bg-[color:var(--bg-1)]`}
      >
        <main className="flex flex-col w-full overflow-hidden min-h-[100vh] h-auto">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
