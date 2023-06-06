import { useMemo, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { SaveAsDraftButton } from "./SaveAsDraftButton";

export const ActionButton = (props) => {
  const [action, setAction] = useState(props.isClicked);
  useMemo(() => {
    setAction(props.isClicked);
  }, [props.isClicked]);

  const deleteButton = () => {
    props.setTextBoxValue("");
    props.handelClickCancel();
  };
  return (
    <div
      className={`fixed top-2/3 bg-slate-600 w-full rounded-2xl duration-300 ease-out z-20 ${
        action ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="relative top-32 mx-5">
        <button
          className="border w-full  rounded-full"
          onClick={props.handelClickCancel}
        >
          キャンセル
        </button>
      </div>

      <div className="h-screen ml-5">
        <DeleteButton deleteButton={deleteButton} />
        <SaveAsDraftButton
          textBoxValue={props.textBoxValue}
          setTextBoxValue={props.setTextBoxValue}
          deleteButton={deleteButton}
          draftStorage={props.draftStorage}
          setDraftStorage={props.setDraftStorage}
        />
      </div>
    </div>
  );
};
