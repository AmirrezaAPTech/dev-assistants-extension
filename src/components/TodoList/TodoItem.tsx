import React from 'react';

interface TodoItemProps {
  task: string;
  isChecked: boolean;
  onDelete: () => void;
  onToggleCheck: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, isChecked, onDelete, onToggleCheck }) => {
  return (
     <li className={`relative group ${isChecked ? 'opacity-40' : ''}`}>
      <div className="w-full border border-[#EEEEEE] p-2 rounded-xl flex justify-start items-center">
    <input
    checked={isChecked}
    onChange={onToggleCheck}
      type="checkbox"
      name={task}
      id={task}
      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:bg-opacity-50 checked:border-blue-500 focus:outline-none transition duration-200 cursor-pointer overflow-hidden flex-shrink-0"
    />
      <label htmlFor={task} className="pl-2 overflow-hidden pb-1 cursor-pointer">
        {task}
      </label>
      <button
       onClick={onDelete}
       className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 bg-opacity-0 group-hover:opacity-100 group-hover:bg-opacity-100 transition-opacity duration-150 bg-white p-1"
        >
        ✕
      </button>
      </div>
            </li>
  );
};

export default TodoItem;