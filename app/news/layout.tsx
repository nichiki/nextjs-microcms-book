import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ニュース",
};

type Props = {
    children: React.ReactNode;
}

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    );
}