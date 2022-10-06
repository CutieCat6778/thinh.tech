import { FunctionComponent } from 'react'
import { ArticleInfo } from "../types/article";
import Main from '../pageComponents/main';
import { getPosts } from '../utils/utils';

interface IProps {
  posts: ArticleInfo[];
}

const Home: FunctionComponent<IProps> = ({ posts }) => {
  return (
    <Main posts={posts}/>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://www.thinh.tech/api/get-posts')
  const posts: ArticleInfo[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home