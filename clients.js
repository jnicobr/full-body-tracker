let clientes = [
  { id: 1, nombre: "Cliente 1", celular: "123-456-7890" },
  { id: 2, nombre: "Cliente 2", celular: "987-654-3210" }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Obtener todos los clientes
    res.status(200).json(clientes);
  } else if (req.method === "POST") {
    // Crear un nuevo cliente
    const { nombre, celular } = req.body;
    const nuevoCliente = { id: clientes.length + 1, nombre, celular };
    clientes.push(nuevoCliente);
    res.status(201).json(nuevoCliente);
  } else {
    res.status(405).end(); // Método no permitido
  }
}
