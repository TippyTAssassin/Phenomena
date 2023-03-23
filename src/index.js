import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';



const App = () => {
    const [reports, setReports] =useState([]);
    const [title, setTitle] =useState('');

    useEffect(() => {
        const getReports = async() => {
            const response = await axios.get('/api/reports');
            console.log(response.data.reports);
        }
        getReports();
    }, [])
    const onChange = (event) => {
      const name =event.target.name;
      const value = event.target.value;
      if(name == 'title') {
        setTitle(value);
      }

    }
    const createReport = (event) => {
      event.preventDefault()
    }
return (
    <>
    <h1>Phenomena</h1>
    <ul>
    {
      reports.map((report, i) => {
        return <li key={i}>{report.title}</li>
      })
    }
    </ul>
    
    <form>
      <input
       value={title }
       onChange= { onChange }
       name= 'title'
       placeholder='title'
       />
    </form>
    

    </>
)
}
const root = createRoot(document.getElementById('root'));
root.render(<App />)