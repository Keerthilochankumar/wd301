import React from 'react';
import TaskCard from "./TaskCard";

interface Task {
  title: string;
  completed: boolean;
  dueDate: string;
  completedAtDate?: string;
  assigneeName: string;
}

function App() {
  return (
    <main>
      <div className="font-serif bg-white">
        <div className="pt-12 ml-10">
          <h1 className='font-bold text-2xl '>Smarter Tasks</h1>
          <h5 className='flex'>Project:<p className='ml-2'>Final year project(revamp college website)</p></h5>
        </div>
        <div className="flex ml-5 mt-6 h-[60%] w-[80%] justify-center gap-10">
          <div className='w-[90%] h-fit flex flex-col border-4 rounded-2xl border-blue-500 items-center gap-6'>
            <div className='w-full flex justify-center mt-6'>
              <h1 className='text-2xl'>Pending</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 pb-4'>
              <TaskCard title={"Build Website with static content"} completed={false} dueDate={"7th April"} assigneeName={"Rohit S"} />
              <TaskCard title={"Add a blog"} completed={false} dueDate={"10th April"} assigneeName={"Mehul A"} />
            </div>
          </div>

          <div className='w-[90%] h-fit flex flex-col border-4 rounded-2xl border-blue-500 items-center gap-6'>
            <div className='w-full flex justify-center mt-6'>
              <h1 className='font-bold text-3xl'>Done</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 pb-4'>
              <TaskCard title={"Design a mockup"} completed={true} dueDate={"20th April"} completedAtDate={"2th April"} assigneeName={"Rohit M"} />
              <TaskCard title={"Get approval from principal"} completed={true} dueDate={"1th April"} completedAtDate={"31th March"} assigneeName={"Mohan M"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
