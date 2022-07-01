import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MyLink } from "~/components/Link/Link";
import { Table } from "~/components/Table/Table";

export const loader = async () => {
  const KEY = "QjMwskBJVDuuVwHxmJuI";
  const SECRET = "oJQZXITXAiAYDBdzvOUgdKIoWnTLvlQn";
  const USERNAME = "joelsrubin";

  const res = await fetch(
    `https://api.discogs.com/users/${USERNAME}/collection/folders/0/releases?&key=${KEY}&secret=${SECRET}`
  );

  return json(await res.json());
};

export default function Library() {
  const albums = useLoaderData<Info>();

  return (
    <div>
      <h1 className="font-mono text-center text-xl mt-20">vinyl</h1>
      <nav className="flex justify-center mt-4">
        <MyLink to="/" text="Home" />
      </nav>
      <Table items={albums.releases} />
    </div>
  );
}
