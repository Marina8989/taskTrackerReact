import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting at Work',
        day: 'Jun 22 at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Food Shopping',
        day: 'Jun 24 at 4:50pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Swimming Classes',
        day: 'Jun 25 at 9:30am',
        reminder: true
    },
])
   const deleteTask = (id) => {
       console.log('delete', id);
       setTasks(tasks.filter(task => {
         return task.id !== id;
       }))
   }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks shown'}
    </div>
  );
}

export default App;
