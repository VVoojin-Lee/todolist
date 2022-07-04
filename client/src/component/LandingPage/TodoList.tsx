import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Modal from '../Modal/Modal';

import { useSelector } from 'react-redux';
import { RootState } from '../../_reducers';
import type {todoType} from "./LandingPage"

type todoListProps = {
  todos: object[];
  completeTodo: (id:number)=>void;
  deleteTodo: (id:number,username:string)=>void;
  editTodo: (todo:todoType)=>void;
};

function TodoList({
  todos,
  completeTodo,
  deleteTodo,
  editTodo,
}: todoListProps) {
  const [edit, setEdit] = useState({
    id: null,
    username: '',
    text: '',
  });
  const user = useSelector((state: RootState) => state.user_reducer.loginUser);

  const editHandler = (todo: todoType) => {
    if (user.username === todo.username) {
      setEdit({ id: todo.id, username: todo.username, text: todo.text });
      openModal();
    } else {
      alert('아이디가 다릅니다');
    }
  };
  const completeHandler = (todo: todoType) => {
    if (user.username === todo.username) {
      completeTodo(todo.id);
    }
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {todos.map((todo: any, index: number) => (
        <div className="rounded-md" key={index}>
          <div className="group relative w-full flex justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-t-md text-white bg-slate-700">
            <div className="flex-auto">{todo.username}</div>
            <button onClick={() => editHandler(todo)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-5"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button onClick={() => deleteTodo(todo.id, todo.username)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-5"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            key={todo.id}
            onClick={() => completeHandler(todo)}
            //className="flex appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-md "
            className={
              todo.isComplete
                ? 'h-24 px-3 py-2 bg-slate-500 rounded-b-md text-base  line-through text-slate-800'
                : 'h-24 px-3 py-2 bg-slate-500 rounded-b-md text-base  text-white'
            }
          >
            {todo.text}
          </div>
        </div>
      ))}
      <Modal open={modalOpen} closeModal={closeModal} header="Edit Todo">
        <TodoForm
          onSubmit={editTodo}
          username={user ? user.username : null}
          closeModal={closeModal}
          edit={edit}
        ></TodoForm>
      </Modal>
    </div>
  );
}

export default TodoList;
