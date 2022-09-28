import matter from 'gray-matter'
import fs from 'fs'
import { FunctionComponent } from 'react'
import { ArticleMeta } from "../types/article";
import Main from '../pageComponents/main';

interface IProps {
  articles: ArticleMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <Main articles={articles}/>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync("uploads");
  
  let articles = files.map(file => {
      const data = fs
          .readFileSync(`uploads/${file}`)
          .toString();

      return {
          ...matter(data).data,
          slug: file.split('.')[0]
      };
  });

  return {
      props: {
          articles: articles
      }
  };
}

export default Home
