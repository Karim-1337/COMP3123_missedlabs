import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [studentInfo] = useState({
    studentId: '101488793',
    studentName: 'Karim Karabayev',
    courseTitle: 'Welcome to Fullstack Development - I',
    labTitle: 'React JS Programming Week09 Lab exercise',
    college: 'George Brown College, Toronto'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '15px 0'}}>{studentInfo.courseTitle}</h1>
        <h2 style={{fontSize: '1.3rem', fontWeight: 'bold', margin: '8px 0'}}>{studentInfo.labTitle}</h2>
        <p style={{fontSize: '1rem', margin: '4px 0'}}>{studentInfo.studentId}</p>
        <p style={{fontSize: '1rem', margin: '4px 0'}}>{studentInfo.studentName}</p>
        <p style={{fontSize: '1rem', margin: '15px 0 0 0'}}>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
