import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const TodoListWidget: React.FC = () => {
  const [tasks, setTasks] = useState<{ task: string; isChecked: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask.trim(), isChecked: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCheckTask = (index: number) => {
    const updatedTasks = tasks.map((item, i) => 
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );
    setTasks(updatedTasks);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => { 
    if (event.key === 'Enter') { 
      addTask(); 
    } 
  }; 

   const uncheckedTasks = tasks.filter(task => !task.isChecked);
   const checkedTasks = tasks.filter(task => task.isChecked);
 
   return (
     <div className="text-black shadow-lg col-span-1 w-full xl:h-auto h-[20rem] rounded-2xl bg-white flex flex-col justify-start">
       <div className="px-4 py-3 border-b border-b-[#EEEEEE]">
         <h3 className="text-xl font-semibold">Todo List</h3>
       </div>
       <div className="h-full max-h-[39rem] overflow-y-auto no-scrollbar">
         <ul className="mb-4 p-3 flex flex-col gap-y-3">
           {/* Render unchecked tasks */}
           {uncheckedTasks.map((task, index) => (
           task.task && <TodoItem
               key={index}
               task={task.task}
               isChecked={task.isChecked}
               onDelete={() => deleteTask(tasks.indexOf(task))}
               onToggleCheck={() => toggleCheckTask(tasks.indexOf(task))}
             />
           ))}
           {/* Render checked tasks at the bottom */}
           {checkedTasks.map((task, index) => (
             task.task &&  <TodoItem
               key={index}
               task={task.task}
               isChecked={task.isChecked}
               onDelete={() => deleteTask(tasks.indexOf(task))}
               onToggleCheck={() => toggleCheckTask(tasks.indexOf(task))}
             />
           ))}
         </ul>
       </div>
       <div className="flex border-t border-t-[#EEEEEE]">
         <div className="px-4 py-3 border-t border-t-[#EEEEEE] relative w-full">
           <input
             value={newTask}
             onChange={e => setNewTask(e.target.value)}
             onKeyPress={handleKeyPress}
             type="text"
             className="border-2 focus:border-none w-full rounded-md h-8 pl-2 pr-5"
             placeholder="Add new todo"
           />
           <div 
             onClick={addTask} 
             className="absolute top-3 right-6 text-xl text-[#666666] cursor-pointer">
             +
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default TodoListWidget;