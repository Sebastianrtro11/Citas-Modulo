import React, { useState, useEffect } from 'react';
import './styles/index.css';
import FormularioCita from './components/FormularioCitas.js';
import CitasList from './components/CitasList.js';

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
        <FormularioCita
          formData={formData}
          handleInputChange={handleInputChange}
          agregarCita={agregarCita}
        />
      </div>

      <div>
        <CitasList citas={citas} />
      </div>
    </>
  );
}

export default App;
