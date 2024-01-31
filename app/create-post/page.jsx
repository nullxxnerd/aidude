"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const Page = () => {
  const [submiting, setSubmiting] = useState();
  const { data: session } = useSession();

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const router = useRouter();
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmiting(false);
    }
  };
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submiting={submiting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};
export default Page;
