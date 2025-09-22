import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "お問い合わせ",
};

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="Contact" sub="お問い合わせ" />
            <Sheet>{children}</Sheet>
        </>
    );
}