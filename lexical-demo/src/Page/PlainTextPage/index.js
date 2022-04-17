import { $getRoot, $getSelection } from "lexical";
import LexicalComposer from "@lexical/react/LexicalComposer";
import PlainTextPlugin from "@lexical/react/LexicalPlainTextPlugin";
import ContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import OnChangePlugin from "@lexical/react/LexicalOnChangePlugin";
import EmojiNode from "../../Nodes/EmojiNode";
import MyCustomAutoFocusPlugin from "../../Plugins/MyCustomAutoFocusPlugin";
import EmoticonPlugin from "../../Plugins/EmoticonPlugin";
import TreeViewPlugin from "../../Plugins/TreeViewPlugin";
import "./index.scss";


export const Placeholder = () => {
  return <div className="editor-placeholder">输入一些纯文本...</div>;
};

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

const editorConfig = {
  theme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode],
};

const onChange = (editorState) => {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
    console.log(root, selection);
  });
};

const Editor = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <EmoticonPlugin />
        <TreeViewPlugin />
        <MyCustomAutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};

function PlainTextPage() {
  return (
    <div className="plain-text-container">
      <h1>纯文本例子</h1>
      <p>注意: 这是Lexical的实验性构建</p>
      <Editor />
    </div>
  );
}

export default PlainTextPage;
