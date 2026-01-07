import type { Route } from "./+types/home";
import Library from "../compLibrary/library";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Component Library" },
    { name: "description", content: "View of created compnents!" },
  ];
}

export default function CompLibrary() {
  return <Library />;
}