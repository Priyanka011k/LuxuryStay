// import React, { useEffect, useState } from 'react';

// function ApiPage() {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://localhost:3500/api/students');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div>
//       <div style={{ backgroundColor: '#f5f5f5', padding: '10px', marginBottom: '20px' }}>
//         <h1 style={{ color: 'blue', fontSize: '32px', display: 'block', textAlign: 'center',}}>API Page</h1>
//       </div>
//       <h2>Student List</h2>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {!error && students.length === 0 && <p>Loading...</p>}
//       {students.length > 0 && (
//         <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th>Roll No</th>
//               <th>Name</th>
//               <th>Class</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.rollno}>
//                 <td>{student.rollno}</td>
//                 <td>{student.name}</td>
//                 <td>{student.class}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default ApiPage;



