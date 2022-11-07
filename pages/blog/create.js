import { supabase } from "../../utils/supabase";

export default function CreatePost() {
  return (
    <>
      <div className="max-w-4xl m-auto my-10">
        <form action="">
          <div className="flex gap-3 items-center justify-between">
            <label htmlFor="title" className="text-2xl">
              Title
            </label>
            <input type="text" name="title" />
          </div>
          <div className="flex gap-3 items-center justify-between">
            <label htmlFor="slug" className="text-2xl">
              Slug
            </label>
            <input type="text" name="slug" />
          </div>
          <div className="flex gap-3 items-center justify-between">
            <label htmlFor="meta_desc" className="text-2xl">
              Meta Description
            </label>
            <input type="text" name="meta_desc" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="body" className="text-2xl">
              Blog Post
            </label>
            <textarea name="body" className="w-2/3" rows="10"></textarea>
          </div>

          <div className="mt-20 flex justify-around">
            <button>Create</button>
            <button type="reset" className="bg-red-600 hover:bg-red-500">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
