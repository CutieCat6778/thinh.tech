interface ArticleMeta {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    date: string;
    author: string;
    length: number;
}

interface ArticleInfo {
    meta: ArticleMeta;
    content: string;
}

export type {
    ArticleMeta,
    ArticleInfo
}