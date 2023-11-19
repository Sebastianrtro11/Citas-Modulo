import React from 'react';
import '../styles/index.css';

const CitasList = ({ citas }) => {
    return (
        <div className="container citas-container">
            <h2 className="text-2xl font-bold mb-4">Listado de Citas</h2>
            <ul className="list-disc pl-4">
                {citas.map((cita) => (
                    <li key={cita.id} className="mb-2">
                        {cita.fecha} - {cita.paciente} - {cita.tratamiento}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CitasList;
