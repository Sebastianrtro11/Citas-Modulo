import './index.css'; 
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
  );

function App() {
  
  const [formData, setFormData] = useState({
    fecha: '',
    paciente: '',
    tratamiento: '',
  });

  const [citas, setCitas] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const agregarCita = async () => {
    try {
      const response = await fetch('http://localhost:3000/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Cita agregada:', data);

      consultarCitas();
    } catch (error) {
      console.error('Error al agregar cita:', error);
    }
  };

  const consultarCitas = async () => {
    try {
      const response = await fetch('http://localhost:3000/citas');
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al consultar citas:', error);
    }
  };

  useEffect(() => {
    consultarCitas();
  }, []); 

  return (
    <>
    <div>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Agregar Cita</h2>
        <label>Fecha:</label>
        <input
          type="text"
          name="fecha"
          value={formData.fecha}
          onChange={handleInputChange}
        />
        <label>Paciente:</label>
        <input
          type="text"
          name="paciente"
          value={formData.paciente}
          onChange={handleInputChange}
        />
        <label>Tratamiento:</label>
        <input
          type="text"
          name="tratamiento"
          value={formData.tratamiento}
          onChange={handleInputChange}
        />
        <button onClick={agregarCita}>Agregar Cita</button>
        </div>
      </div>

      {}
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Lista de Citas</h2>
        <ul>
          {citas.map((cita) => (
            <li key={cita.id}>
              {cita.fecha} - {cita.paciente} - {cita.tratamiento}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
}

export default App;


