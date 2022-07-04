import React, { useState, useEffect } from 'react';
import type {todoType} from "./LandingPage"

type todoFormProps = {
  onSubmit: (todo:any)=>void;
  username: string;
  closeModal: ()=>void;
  edit: todoType;
};
function TodoForm({ onSubmit, username, closeModal, edit }: todoFormProps) {
  const [input, setInput] = useState('');
  useEffect(() => {
    setInput(edit.text);
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    onSubmit({
      id: edit.id ? edit.id : Math.floor(Math.random() * 10000),
      username: username,
      text: input,
    });
    closeModal();
  };
  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a todo"
        value={input}
        className="basis-4/5 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-sm text-gray-900 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 "
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <button className="basis-1/5 group relative w-full flex justify-center px-3 py-2 border border-transparent text-md font-medium rounded-md text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {!edit.id ? 'Add' : 'Edit'}
      </button>
    </form>
  );
}

export default TodoForm;
