import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
    src: [
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-100.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-200.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-300.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-500.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-600.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-700.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-800.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/vazirmatn-v16-arabic_latin-900.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-vazirmatn",
    display: "swap",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${vazirmatn.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
