import { intersperse } from "../utils";
import { Fragment } from "react";

export default function Breadcrumbs({ separator, children, ...props }) {
  return (
    <div className="flex gap-2 text-gray-500 font-light text-sm">
      {intersperse(
        children,
        (separator = <span className="text-gray-200">{separator}</span>)
      ).map((e, i) => (
        <Fragment key={i}>{e}</Fragment>
      ))}
    </div>
  );
}
