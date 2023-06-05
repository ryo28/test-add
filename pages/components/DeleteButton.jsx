import { ResetText } from "./DraftStorage";
export function DeleteButton(props) {
 
  return (
    <div>
      <button className="mr-4 mb-4 block w-screen" onClick={props.deleteButton}>
        <div className="flex ">
          <div>💥</div>
          <div className="text-rose-600">削除</div>
        </div>
      </button>
    </div>
  );
}
