import { Link } from "@remix-run/react";
import { ClipLoader } from "react-spinners";

export function MyLink({
  text = "",
  to = "",
  state = {},
}: {
  text: string;
  to: string;
  state: any;
}) {
  return (
    <Link
      to={to}
      className="bg-green-200 p-5 rounded hover:bg-green-300 font-mono w-1/4 whitespace-no-wrap text-center text-xl"
      prefetch="intent"
    >
      {state.state === "loading" && state.location.pathname === to ? (
        <ClipLoader />
      ) : (
        text
      )}
    </Link>
  );
}
