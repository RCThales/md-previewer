import { ChangeEvent, useEffect } from "react";
import "./editor.css";
import { useDispatch } from "react-redux";
import { setText } from "../../../slices/textSlice";
import { initialMd } from "../../initial_md.ts";

const Editor = () => {
  useEffect(() => {
    dispatch(setText(initialMd));
  }, []);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setText(event?.target?.value));
  };

  return (
    <div className="editor_wrapper">
      <label id="editor_label" htmlFor="editor">
        EDITOR
      </label>
      <textarea
        defaultValue={initialMd}
        name="editor"
        id="editor"
        onChange={handleChange}
        cols={80}
        rows={50}
      ></textarea>
    </div>
  );
};

export default Editor;
