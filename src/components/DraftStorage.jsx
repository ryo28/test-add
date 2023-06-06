export function DraftStorage(props) {
  const liElements = props.draftStorage.map((item, index) => (
    <li key={index} className="mt-2 ml-2 border-b">
      <button>{item}</button>
    </li>
  ));
  return (
    <div
      className={`h-screen  fixed w-screen bg-zinc-400  ${
        props.draftSwitch ? "translate-y-5" : "translate-y-full"
      } 
      }`}
    >
      <ul>{liElements}</ul>
    </div>
  );
}
