document.addEventListener("DOMContentLoaded", function () {
    const tabla = document.getElementById("tablaDonantes");
    const buscarSangre = document.getElementById("buscarSangre");

    const donantes = [
        { nombre: "Eduardo Valenzuela", edad: 32, telefono: "662-234-5678", tipoSangre: "A+", ubicacion: "Hermosillo" },
        { nombre: "Gabriela Ruiz", edad: 28, telefono: "662-345-6789", tipoSangre: "O-", ubicacion: "Caborca" },
        { nombre: "Fernando López", edad: 24, telefono: "662-456-7890", tipoSangre: "AB+", ubicacion: "Nogales" },
        { nombre: "Rosa Martínez", edad: 41, telefono: "662-567-8901", tipoSangre: "B+", ubicacion: "Obregón" },
        { nombre: "Alberto Sánchez", edad: 35, telefono: "662-678-9012", tipoSangre: "A-", ubicacion: "Navojoa" },
        { nombre: "Diana Gómez", edad: 29, telefono: "662-789-0123", tipoSangre: "O+", ubicacion: "Guaymas" },
        { nombre: "Raúl Castro", edad: 38, telefono: "662-890-1234", tipoSangre: "AB-", ubicacion: "San Luis Río Colorado" },
        { nombre: "Miriam Torres", edad: 27, telefono: "662-901-2345", tipoSangre: "B-", ubicacion: "Agua Prieta" },
        { nombre: "Esteban Flores", edad: 30, telefono: "662-012-3456", tipoSangre: "O+", ubicacion: "Hermosillo" },
        { nombre: "Patricia Mendoza", edad: 34, telefono: "662-123-4567", tipoSangre: "A+", ubicacion: "Caborca" },
        { nombre: "Ricardo Domínguez", edad: 26, telefono: "662-234-5678", tipoSangre: "O-", ubicacion: "Nogales" },
        { nombre: "Silvia Ortega", edad: 39, telefono: "662-345-6789", tipoSangre: "AB+", ubicacion: "Obregón" },
        { nombre: "Jesús Ramírez", edad: 31, telefono: "662-456-7890", tipoSangre: "B+", ubicacion: "Navojoa" },
        { nombre: "Santiago Córdova", edad: 15, telefono: "662-327-3755", tipoSangre: "A-", ubicacion: "Hermosillo" },
        { nombre: "David Aguilar", edad: 29, telefono: "662-678-9012", tipoSangre: "O+", ubicacion: "Hermosillo" },
        { nombre: "Beatriz Salazar", edad: 37, telefono: "662-789-0123", tipoSangre: "AB-", ubicacion: "Agua Prieta" },
        { nombre: "Miguel Esquivel", edad: 33, telefono: "662-890-1234", tipoSangre: "B-", ubicacion: "Hermosillo" },
        { nombre: "Norma Pacheco", edad: 28, telefono: "662-901-2345", tipoSangre: "O+", ubicacion: "Caborca" }
    ];

    // Mostrar los donantes en la tabla
    function mostrarDonantes(donantes) {
        tabla.innerHTML = "";
        donantes.forEach(donante => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${donante.nombre}</td>
                <td>${donante.edad}</td>
                <td>${donante.telefono}</td>
                <td>${donante.tipoSangre}</td>
                <td>${donante.ubicacion}</td>
            `;
            tabla.appendChild(fila);
        });
    }

    // Filtrar por tipo de sangre
    buscarSangre.addEventListener("change", function () {
        const tipoSangre = buscarSangre.value;
        if (tipoSangre === "") {
            mostrarDonantes(donantes);
        } else {
            const filtrados = donantes.filter(donante => donante.tipoSangre === tipoSangre);
            mostrarDonantes(filtrados);
        }
    });

    // Agregar un donante
    window.agregarDonante = function () {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const telefono = document.getElementById("telefono").value;
        const tipoSangre = document.getElementById("tipoSangre").value;
        const ubicacion = document.getElementById("ubicacion").value;

        if (nombre && edad && telefono && tipoSangre && ubicacion) {
            donantes.push({ nombre, edad, telefono, tipoSangre, ubicacion });
            mostrarDonantes(donantes);
            alert("Donante agregado con éxito");
        } else {
            alert("Por favor complete todos los campos.");
        }
    };

    mostrarDonantes(donantes);
});
