import React from 'react';
import '../styles/index.css';

const FormularioCita = ({ formData, handleInputChange, agregarCita }) => {
    return (
        <div className="container">
            <div className="form-container">
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
    );
};

export default FormularioCita;
