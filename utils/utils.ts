import fs from 'fs';
import matter from 'gray-matter';
import { ArticleInfo, ArticleMeta } from '../types/article';

export function ResolveImage(url: string, width: number, height: number) {
  const encodedUrl = encodeURIComponent("https://cdn.thinh.tech/" + url);
  return `https://imagecdn.app/v2/image/${encodedUrl}?width=${width}&height=${height}&format=webp`
}

export const getPosts = (pageIndex: number) => {
  const dirFiles = fs.readdirSync('./posts', {
    withFileTypes: true,
  });

  if(dirFiles.length > 0) {
    const rawposts = dirFiles
    .map((file): ArticleInfo | null => {
      if(!file.name.endsWith(".mdx") ) return null;
      const fileContent = fs.readFileSync(
        `./posts/${file.name}`,
        'utf-8'
      );
      
      const { data, content } = matter(fileContent);
      const returnedData: ArticleMeta = {
        title: data.title,
        description: data.description,
        tags: data.tags,
        date: data.date,
        author: data.author,
        length: data.length,
      };
      const returnedContent: string = content;
      const slug: string = file.name.replace(/.mdx$/, '');
      const res: ArticleInfo = { data: returnedData, content: returnedContent, slug }
      return res;
    })

    const posts: (ArticleInfo | null)[] = rawposts.filter((post: ArticleInfo | null) => {
      if(post) return post;
    })

    return posts.slice(0, pageIndex)
  } else return null;
};

export const getPost = (name: string) => {
  const fileContent = fs.readFileSync(
    `./posts/${name}.mdx`,
    'utf-8'
  );
  
  const { data, content } = matter(fileContent);
  const returnedData: ArticleMeta = {
    title: data.title,
    description: data.description,
    tags: data.tags,
    date: data.date,
    author: data.author,
    length: data.length,
  };
  const returnedContent: string = content;
  const slug: string = name.replace(/.mdx$/, '');
  const res: ArticleInfo = { data: returnedData, content: returnedContent, slug }
  return res;
}