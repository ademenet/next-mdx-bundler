import { bundleMDX } from "mdx-bundler";
import remarkPrism from "remark-prism";
import remarkMath from "remark-math";

const mdxToHtml = async (source) => {
  const { code } = await bundleMDX({
    source: source,
    xdmOptions: (options) => {
      options.remarkPlugins = [remarkPrism, remarkMath];
      return options;
    },
  });
  return code;
};

export default mdxToHtml;
