import { MyLink } from "~/components/Link/Link";

export default function Cards() {
  return (
    <>
      <h1 className="font-mono text-center text-xl mt-20">Card View</h1>
      <nav className="flex justify-center mt-4">
        <MyLink to="/" text="Home" />
      </nav>
    </>
  );
}
