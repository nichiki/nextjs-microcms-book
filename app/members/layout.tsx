import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "メンバー",
};

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="Members" sub="メンバー" />
            <Sheet>{children}</Sheet>
        </>
    );
}