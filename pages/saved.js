import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

function saved() {
  return (
    <Layout>
      <h1 className="font-medium text-5xl text-gray-300 mb-4">Saved posts</h1>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  );
}

export default saved;
