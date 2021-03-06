import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalTreeView from "@lexical/react/LexicalTreeView";
import "./index.scss";

function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <LexicalTreeView
      viewClassName="tree-view-output"
      timeTravelPanelClassName="debug-timetravel-panel"
      timeTravelButtonClassName="debug-timetravel-button"
      timeTravelPanelSliderClassName="debug-timetravel-panel-slider"
      timeTravelPanelButtonClassName="debug-timetravel-panel-button"
      editor={editor}
    />
  );
}

export default TreeViewPlugin;
