/**
 * ============================================================
 *  api.js — Capa de servicios para comunicarse con el Backend
 * ============================================================
 *
 *   React (puerto 5173) → /api/materiales → Vite Proxy → Spring Boot (puerto 8080)
 *
 * ¿Cómo crear una nueva llamada API?
 *   1. Crea una función async que llame a fetch('/api/tu-endpoint').
 *   2. Si es GET, solo necesitas el URL.
 *   3. Si es POST, agrega method, headers y body (JSON).
 *   4. Siempre verifica response.ok y lanza un error si falla.
 *   5. Exporta la función y úsala en tus componentes con useEffect o en handlers.
 */

const BASE_URL = '/api';

// ─────────────────────────────────────────────────────────────
// MATERIALES — Inventario
// ─────────────────────────────────────────────────────────────

/**
 * GET /api/materiales
 * Obtiene la lista completa del inventario.
 * Disponible para: ESTUDIANTE y PROFESOR.
 * @returns {Promise<Array>} Lista de materialResponseDTO
 */
export async function getMateriales() {
  const response = await fetch(`${BASE_URL}/materiales`);
  if (!response.ok) {
    throw new Error(`Error al obtener materiales: ${response.status}`);
  }
  return response.json();
}

/**
 * GET /api/materiales/:id
 * Busca un material específico por su ID.
 * Útil para ver dónde está un ítem (Estudiante o Profesor).
 * @param {number} id - ID del material
 * @returns {Promise<Object>} materialResponseDTO
 */
export async function getMaterialById(id) {
  const response = await fetch(`${BASE_URL}/materiales/${id}`);
  if (!response.ok) {
    throw new Error(`Material con ID ${id} no encontrado`);
  }
  return response.json();
}

/**
 * POST /api/materiales
 * Crea un nuevo material en el inventario.
 * SOLO para PROFESOR (Admin).
 *
 * @param {Object} materialData - Datos del nuevo material
 * @param {string} materialData.name        - Nombre del material
 * @param {string} materialData.condition   - Estado: "Bueno", "Regular", "Malo"
 * @param {string} materialData.date        - Fecha de préstamo (YYYY-MM-DD)
 * @param {string} materialData.returndate  - Fecha de devolución (YYYY-MM-DD)
 * @param {number|null} materialData.usuarioId - ID del usuario que lo tiene (opcional)
 * @returns {Promise<Object>} materialResponseDTO creado
 */
export async function crearMaterial(materialData) {
  const response = await fetch(`${BASE_URL}/materiales`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(materialData),
  });
  if (!response.ok) {
    throw new Error(`Error al crear material: ${response.status}`);
  }
  return response.json();
}

// ─────────────────────────────────────────────────────────────
// USUARIOS
// ─────────────────────────────────────────────────────────────

/**
 * GET /api/usuarios
 * Obtiene la lista de todos los usuarios registrados.
 * Pensado para el panel de administración del Profesor.
 * @returns {Promise<Array>} Lista de usuarioResponseDTO
 */
export async function getUsuarios() {
  const response = await fetch(`${BASE_URL}/usuarios`);
  if (!response.ok) {
    throw new Error(`Error al obtener usuarios: ${response.status}`);
  }
  return response.json();
}

/**
 * GET /api/usuarios/:id
 * Busca un usuario específico por su ID.
 * Útil para ver los datos de un usuario concreto.
 * @param {number} id - ID del usuario
 * @returns {Promise<Object>} usuarioResponseDTO
 */
export async function getUsuarioById(id) {
  const response = await fetch(`${BASE_URL}/usuarios/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    throw new Error(`Error al buscar usuario: ${response.status}`);
  }
  return response.json();
}

/**
 * POST /api/usuarios
 * Registra un nuevo usuario (Estudiante o Profesor).
 *
 * @param {Object} usuarioData - Datos del nuevo usuario
 * @param {string} usuarioData.nombre     - Nombre completo
 * @param {string} usuarioData.documento  - Número de documento
 * @param {string} usuarioData.correo     - Correo electrónico
 * @param {string} usuarioData.rol        - "ESTUDIANTE" o "PROFESOR"
 * @returns {Promise<Object>} usuarioResponseDTO creado
 */
export async function registrarUsuario(usuarioData) {
  const response = await fetch(`${BASE_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuarioData),
  });
  if (!response.ok) {
    throw new Error(`Error al registrar usuario: ${response.status}`);
  }
  return response.json();
}

/**
 * POST /api/auth/login
 * Inicia sesión con usuario (correo/documento) y contraseña (documento).
 * @param {string} usuario - Correo o documento
 * @param {string} contrasena - Documento
 * @returns {Promise<Object>} Datos del usuario logueado
 */
export async function loginUsuario(usuario, contrasena) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ usuario, contrasena }),
  });
  if (!response.ok) {
    throw new Error(response.status === 401 ? 'Credenciales incorrectas' : `Error al iniciar sesión: ${response.status}`);
  }
  return response.json();
}

/**
 * GET /api/auth/verify/:id
 * Verifica el rol de un usuario y devuelve si es Admin o Estudiante.
 * @param {number} idUsuario - ID del usuario
 * @returns {Promise<Object>} { rol, isAdmin, isStudent }
 */
export async function verificarRol(idUsuario) {
  const response = await fetch(`${BASE_URL}/auth/verify/${idUsuario}`);
  if (!response.ok) {
    throw new Error(`Error al verificar rol: ${response.status}`);
  }
  return response.json();
}

/**
 * POST /api/auth/register
 * Registra un nuevo usuario a través del endpoint dedicado de autenticación.
 * @param {Object} usuarioData
 * @returns {Promise<Object>}
 */
export async function registrarUsuarioAuth(usuarioData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuarioData),
  });
  if (!response.ok) {
    throw new Error(`Error al registrar usuario: ${response.status}`);
  }
  return response.json();
}
