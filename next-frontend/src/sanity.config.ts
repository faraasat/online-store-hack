import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  // name: "default",
  title: "Xenrir",
  projectId: "m4fy6zkr",
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [deskTool()],
});
