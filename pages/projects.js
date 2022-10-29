import { supabase } from "../utils/supabase";

export default function Projects({ projects }) {
  return (
    <div className="max-w-4xl m-auto mt-10 flex flex-col gap-10">
      <h1>projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col">
          <div className="blogTitle">
            <div>{project.name}</div>{" "}
            <div>
              <button>View</button>
            </div>
          </div>
          <div className="blogBody">{project.body}</div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  return {
    props: {
      projects,
    },
  };
};
