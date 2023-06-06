import { useMemo } from "react";

export function SaveAsDraftButton(props) {
  useMemo(() => {
    console.log(props.draftStorage);
  }, [props.draftStorage]);
  const saveAsDraft = () => {
    props.setDraftStorage((prevArray) => {
      return [...prevArray, props.textBoxValue];
    });
    props.deleteButton();
  };
  return (
    <div>
      <button className="block w-screen" onClick={saveAsDraft}>
        <div className="flex">
          <div>🖊</div>
          <div>下書きを保存</div>
        </div>
      </button>
    </div>
  );
}
