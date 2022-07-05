import Head from "next/head";
import { AllPosts, Categories } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>tuankietcoder Blog</title>
        <meta
          name="description"
          content="A blog of Tran Tuan Kiet aka tuankietcoder"
        />
      </Head>
      <main>
        <AllPosts />
        <Categories />
      </main>
    </>
  );
}
