import Image from "next/image";
import SignInButton from "@/components/SignInButton";
import Feed from "@/components/Feed";
export default function Home() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <section className="w-full flex flex-col flex-center mt-10 ">
        <div className="leading-main">
          <h1 className="text-center leading-main mt-6 text-black font-bold tracking-wide leading-10 text-6xl">
            Discover & Share
            <br className="max-md:hiddne" />
            <span className="text-center blue_gradient my-2 block ">
              AI-Powered Prompts
            </span>
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-center mt-5   text-gray-600 lg:text-base text-xl 2xl:text-lg max-w-2xl">
            🤖 {"let's"} learn about and use AI to solve complex challenges and
            improve our lives. 💡 So, {"let's"} stay composed and explore how AI
            can enhance our experiences. 🚀
          </p>
        </div>
      </section>
      <div className="my-16 mx-4  flex justify-center">
        <div className=" max-w-5xl">
          <Feed />
        </div>
      </div>
    </>
  );
}
