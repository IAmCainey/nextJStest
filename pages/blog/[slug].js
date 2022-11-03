import { supabase } from "../../utils/supabase";

export default function SingleBlog({ blog }) {
  return (
    <div className="max-w-4xl m-auto mt-10">
      <div className="first-letter:text-purple-500 text-2xl capitalize border-b-2 border-l-8 pl-3 pr-10 max-w-fit">
        {blog.title}
      </div>

      <div className="my-10">{blog.body}</div>
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
