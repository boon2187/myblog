import { visit } from "unist-util-visit";

export default function remarkImagesNext() {
  return (tree) => {
    visit(tree, "image", (node) => {
      const { url, alt } = node;
      // ここでImageコンポーネントのHTMLを生成
      const imageHtml = `<Image src="${url}" alt="${alt}" width="640" height="480" />`;
      node.type = "html";
      node.value = imageHtml;
    });
  };
}
