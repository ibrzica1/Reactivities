
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/activities')
    .then(response => {
      console.log('API Response:', response.data);
      setActivities(response.data)
    })
  }, [])

  return (
    
    <div>
       <h1>Reactivities</h1>
       <ul>
       {activities.map((activity:any) => (
        <li key={activity.id}>
          {activity.Title}
        </li>
       ))}
       </ul>
    </div>
  )
}

export default App
