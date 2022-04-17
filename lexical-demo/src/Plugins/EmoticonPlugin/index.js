import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { TextNode } from "lexical";
import { $createEmojiNode } from "../../Nodes/EmojiNode";

const emoticonTransform = (node) => {
  const textContent = node.getTextContent();
  // When you type :), we will replace it with an emoji node
  if (textContent === ":)") {
    node.replace($createEmojiNode("emoji happysmile", "😀"));
  }
};

const useEmoticons = (editor) => {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      emoticonTransform
    );
    return () => {
      removeTransform();
    };
  }, [editor]);
};

function EmoticonPlugin() {
  const [editor] = useLexicalComposerContext();
  useEmoticons(editor);
  return null;
}

export default EmoticonPlugin;
