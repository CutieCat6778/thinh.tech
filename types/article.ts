import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ArticleMeta {
    title: string;
    description: string;
    tags: string[];
    date: string;
    author: string;
    length: number;
}

interface ArticleInfo {
    data: ArticleMeta;
    content: string | MDXRemoteSerializeResult;
    slug: string;
}

export type {
    ArticleMeta,
    ArticleInfo
}