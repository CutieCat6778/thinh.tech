import { FunctionComponent } from "react";
import { ArticleInfo } from "../types/article";
import Main from "../pageComponents/main";
import { getPosts } from "../utils/utils";

interface IProps {
  posts: ArticleInfo[];
}

const Home: FunctionComponent<IProps> = ({ posts }) => {
  return <Main posts={posts} />;
};

export const getStaticProps = () => {
  const posts = getPosts(2);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
