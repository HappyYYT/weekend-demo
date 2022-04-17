import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "../Page/MainMenu";
import PlainTextPage from "../Page/PlainTextPage";
import RichTextPage from "../Page/RichTextPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/plain" element={<PlainTextPage />} />
        <Route path="/rich" element={<RichTextPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
