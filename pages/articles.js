import { supabase } from "../utils/supabase";

export default function Blog({ blogs }) {
  return (
    <div className="max-w-4xl m-auto mt-10 flex flex-col gap-10">
      <h1>blog</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="flex flex-col">
          <div className="blogTitle">
            <div>{blog.title}</div>{" "}
            <div>
              <button>View</button>
            </div>
          </div>
          <div className="blogBody">{blog.body}</div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: blogs } = await supabase.from("blog").select("*");

  return {
    props: {
      blogs,
    },
  };
};
