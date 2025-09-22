import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ dk?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const [{ slug }, { dk }] = await Promise.all([params, searchParams]);
    const data = await getNewsDetail(slug, {
        draftKey: dk,
    });

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: [data?.thumbnail?.url ?? ''],
        },
    };
}

export default async function Page({ params, searchParams }: Props) {
    const [{ slug }, { dk }] = await Promise.all([params, searchParams]);
    const data = await getNewsDetail(slug, {
        draftKey: dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}