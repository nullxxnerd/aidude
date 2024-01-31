import Link from "next/link";

function Form({ type, post, setPost, submiting, handleSubmit }) {
  return (
    <div className="flex justify-center">
      <section className="mt-10 mx-4 flex flex-start flex-col pb-4 shadow-2xl pt-10 px-8 rounded-2xl border-2 z-10 bg-white">
        <span className="font-bold text-4xl blue_gradient">{type} Post</span>
        <p className="text-sm opacity-75 mt-3 max-w-2xl">
          {type} Create and share your amazing prompts with the world, and let
          your imagination run wild with any AI-powered platform.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl flex flex-col gap-7 px-6"
        >
          <label>
            <span className="font-semibold text-gray-700 ">Your AI Prompt</span>
          </label>
          <textarea
            className="bg-white  text-black rounded-md p-4 postTextArea focus:border-blue-500 text-sm"
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="write your  prompt here"
            required
          ></textarea>
          <label>
            <span className="font-semibold text-gray-700 ">
              Tag <span>(#products,#webdeveloper,#idea)</span>
            </span>
          </label>
          <input
            className="bg-white text-black rounded-md p-4 postTextArea  focus:border-blue-500  text-sm"
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="#tag"
            required
          ></input>
          <div className="flex justify-end items-center gap-1  mb-5">
            <Link
              href="/"
              className="text-sm text-gray-600 p-3 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className=" p-3 rounded-lg bg-blue-700 shadow-2xl hover:bg-blue-300 hover:text-black  font-semibold text-white transition-all text-sm"
            >
              {submiting ? `${type}...` : type} Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
