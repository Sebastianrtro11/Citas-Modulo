import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitasList = () => {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/citas')
            .then((response) => {
                setCitas(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="mt-4">
            <h2  className="text-2xl font-bold mb-4">Listado de Citas</h2>
            <ul className="list-disc pl-4">
                {citas.map((cita) => (
                    <li key={cita.id} className="mb-2">{cita.fecha} - {cita.paciente} - {cita.tratamiento}</li>
                ))}
            </ul>
        </div>
    );
};

export default CitasList;
