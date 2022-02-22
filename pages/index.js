import React from "react";
import { getMDXComponent } from "mdx-bundler/client";

import mdxToHtml from "../lib/mdx";

function MyMDXComponent({ source }) {
  const Component = React.useMemo(() => getMDXComponent(source), [source]);
  return (
    <div>
      <Component />
    </div>
  );
}

export default function Home({ source }) {
  return (
    <div>
      <h1>MDX-Bundler demo</h1>
      <MyMDXComponent source={source} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mdxSource = `
  # Wahoo

  $\\alpha$

  \`\`\`python
  print("Hello")
  \`\`\`
  
  Here's a **neat** demo:
  `.trim();

  const source = await mdxToHtml(mdxSource);
  console.log("source", source);
  return {
    props: {
      source,
    },
  };
};
