import { MyLink } from "~/components/Link/Link";

export default function Index() {
  return (
    <div className="font-mono text-center text-xl mt-20">
      <h1>Vinyl Cup</h1>
      <ul className="mt-20 flex flex-col gap-10 items-center">
        <MyLink to="/library" text="Table View" />
        <MyLink to="/cards" text="Card View" />
      </ul>
    </div>
  );
}
