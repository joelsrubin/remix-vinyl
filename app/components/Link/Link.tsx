import { Link } from "@remix-run/react";

export function MyLink({ text = "", to = "" }: { text: string; to: string }) {
  return (
    <Link
      to={to}
      className="bg-green-200 p-5 rounded hover:bg-green-300 font-mono w-1/4 whitespace-no-wrap text-center text-xl"
      prefetch="intent"
    >
      {text}
    </Link>
  );
}
