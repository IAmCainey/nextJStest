import { supabase } from "../../utils/supabase";

import Head from "next/head";

export default function SingleBlog({ blog }) {
  return (
    <div className="max-w-4xl m-auto mt-10">
      <Head>
        <title>Testing | {blog.title}</title>
        <meta name="description" content={blog.meta_desc} />
      </Head>
      <div className="text-2xl capitalize border-l-8 border-l-purple-700 pl-3 pr-10 max-w-fit">
        {blog.title}
      </div>

      <div className="my-10">{blog.body}</div>

      <button className="py-2 px-3 rounded-md bg-red-600 text-gray-50 font-bold shadow-lg hover:bg-red-800 transition-all">
        Delete Post
      </button>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data: blogs } = await supabase.from("blog").select("slug");

  const paths = blogs.map(({ slug }) => ({
    params: {
      slug: slug.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const { data: blog } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .single();

  return {
    props: {
      blog,
    },
  };
};
