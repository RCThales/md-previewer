import "./preview.css";
import { useSelector } from "react-redux";
import { marked } from "marked";
import "highlight.js/styles/default.css"; // Choose a style
import hljs from "highlight.js";
import { useEffect } from "react";

marked.setOptions({
  breaks: true,
});

const Preview = () => {
  const text = useSelector((state: any) => state.text.value);
  const parsedMarkdown = marked(text);

  useEffect(() => {
    hljs.highlightAll();
  }, [parsedMarkdown]);

  return (
    <div className="preview_wrapper">
      <label id="preview_label" htmlFor="preview">
        PREVIEW
      </label>

      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{
          __html: parsedMarkdown as string | TrustedHTML,
        }}
        id="preview"
      ></div>
    </div>
  );
};

export default Preview;
