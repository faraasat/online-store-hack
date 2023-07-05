"use client";

const NextStudio = dynamic(() =>
  import("next-sanity/studio").then((mod) => mod.NextStudio)
);

import config from "@/sanity.config";
import dynamic from "next/dynamic";

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
