const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // para leer el archivo de citas
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        // aqui se convierte el archivo a un objeto JSON
        let citas = [];
        if (data) {
            citas = JSON.parse(data);
        }

        // se agrega una nueva cita el arreglo
        citas.push(nuevaCita);

        // se escribe el archivo con la nueva cita y las anteriores y muestra un mensaje de éxito o error
        fs.writeFile('./citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar la cita:', err);
            } else {
                console.log('Cita registrada con éxito.');
            }
        });
    });
};

// la función para leer las citas registradas
const leer = () => {
    
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        // se convierte el archivo a un objeto JSON
        const citas = JSON.parse(data || '[]');
        console.log('Citas registradas:', citas);
    });
};

module.exports = { registrar, leer };
