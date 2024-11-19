import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <form onSubmit={(e)=> {handleSubmit(e)}} className="flex items-center justify-center text-lg gap-x-2">
      <input
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text"
        className="w-[400px] rounded-lg h-9 py-2 px-3 outline-none border-none"
      />
      <button
        type="submit"
        className="px-3 py-1 rounded-lg bg-blue-800 font-bold text-white"
      >
        Create
      </button>
    </form>
  );
};

export default InputField;
