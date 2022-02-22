import { bundleMDX } from "mdx-bundler";

const mdxToHtml = async (source) => {
  const { code } = await bundleMDX({
    source: source,
  });
  return code;
};

export default mdxToHtml;
