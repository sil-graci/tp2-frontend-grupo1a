// Los hitos de TP1 conservan el texto de bitacora.html (versión entregada).

export const BITACORA = [
  {
    id: 'tp1-1',
    etapa: 'TP1',
    titulo: 'Organización de archivos y diseño visual',
    decision:
      'Separamos los archivos según lo pedido: el index.html y los perfiles en la carpeta raíz, los estilos en css/, los scripts en js/ y las fotos en img/. Para mantener la coherencia visual definimos variables de CSS (en :root y [data-theme="dark"]) con los colores principales, fuentes (Space Grotesk e IBM Plex Sans) y tamaños.',
    dificultad:
      'Al cambiar entre modo claro y modo oscuro, varias tarjetas perdían contraste o los textos no se leían bien sobre el fondo.',
    solucion:
      'Vinculamos los fondos, bordes y textos a las variables CSS correspondientes. Así, al alternar el botón de tema, toda la página se actualiza de manera uniforme y guarda la preferencia del usuario en localStorage.',
  },
  {
    id: 'tp1-2',
    etapa: 'TP1',
    titulo: 'Navegación fluida y enlaces internos',
    decision:
      'Cumplimos con la consigna de no obligar a usar el botón "Atrás" del navegador. En cada perfil pusimos enlaces para volver a la portada, regresar al perfil anterior o pasar al siguiente.',
    dificultad:
      'Como la barra de navegación superior era fija (position: sticky), al hacer clic en los enlaces del menú la barra tapaba el título de la sección donde aterrizaba la pantalla.',
    solucion:
      'Agregamos scroll-margin-top: 90px en las secciones, para que la cabecera fija no tape ningún título.',
  },
  {
    id: 'tp1-3',
    etapa: 'TP1',
    titulo: 'Diseño adaptable en los tres breakpoints (400px, 900px y 1200px)',
    dificultad:
      'En pantallas de celulares chicos (400px), los enlaces del menú se salían de la pantalla y el formulario de contacto con el mapa generaban scroll horizontal.',
    solucion:
      'Usamos CSS Grid y Flexbox con media queries. En 900px el formulario y el mapa pasan a una columna. En 400px el menú se ordena de forma vertical y los botones se acomodan sin desbordar el ancho.',
  },
  {
    id: 'tp1-4',
    etapa: 'TP1',
    titulo: 'Ajuste de la imagen del encabezado (Hero)',
    dificultad:
      'La imagen de la portada (hero-bg.png) tiene tonos oscuros y líneas de circuitos brillantes. En modo oscuro se veía bien, pero en modo claro oscurecía demasiado la portada y no combinaba con el fondo.',
    solucion:
      'En modo claro aplicamos un degradado suave por encima con linear-gradient, para aclarar el fondo sin perder el brillo de las líneas tecnológicas.',
  },
  {
    id: 'tp1-5',
    etapa: 'TP1',
    titulo: 'Interactividad con JavaScript y formulario de contacto',
    decision:
      'Para no copiar cinco veces el mismo código, armamos un solo archivo perfil.js. Usamos el atributo data-member en el botón de cada HTML para que el script reconozca al integrante y muestre su frase al hacer clic.',
    dificultad:
      'Con Live Server, al presionar "Enviar mensaje" el navegador intentaba enviar los datos a un servidor que no existe y mostraba un error de página caída.',
    solucion:
      'Configuramos el formulario con action="mailto:..." y enctype="text/plain", para que no dependa de un backend y abra la aplicación de correo del usuario con el mensaje preparado.',
  },
  {
    id: 'tp2-1',
    etapa: 'TP2',
    titulo: 'Plan de migración a React',
    decision:
      'Partimos de una copia del proyecto de TP1 y, antes de tocar nada, se hizo un análisis de solo lectura contra los 15 criterios de la consigna. Elegimos Vite + React (JavaScript) + React Router, con CSS plano reutilizando las variables del TP1, y avanzar por etapas probando cada una.',
    dificultad:
      'La imagen del avatar de Elías tenía tildes en el nombre (ícono_Elías.jpeg), lo que puede fallar al desplegar en Vercel (Linux).',
    solucion:
      'Al copiar las imágenes a la app nueva normalizamos todos los nombres a minúsculas y sin tildes (avatar-elias.jpeg).',
  },
  {
    id: 'tp2-2',
    etapa: 'TP2',
    titulo: 'Sidebar compartida, rutas y tema claro/oscuro',
    decision:
      'La barra superior del TP1 pasó a una sidebar lateral compartida con la identidad de DevStudio, enlaces con sección activa y un panel en móvil que se cierra al navegar, con el botón de cierre, tocando el fondo o con Escape. El tema claro/oscuro pasó de dos scripts a un ThemeContext.',
    dificultad:
      'Al correr el linter, el archivo del contexto de tema (que mezclaba el contexto y el componente proveedor) tuvo que reorganizarse.',
    solucion:
      'Separamos el tema en tres archivos: ThemeContext.js, ThemeProvider.jsx y el hook useTheme.js.',
  },
  {
    id: 'tp2-3',
    etapa: 'TP2',
    titulo: 'Portada y perfiles como componentes reutilizables',
    decision:
      'Los cinco HTML de perfil se reemplazaron por una sola página (/integrantes/:id) que lee los datos de teamData.js. MemberCard, MediaCard y TagList se reutilizan con props. Cada perfil recibió una interacción distinta sobre su propio contenido.',
    dificultad:
      'La ubicación de Judith figuraba distinta en el TP1: Buenos Aires en la tarjeta de portada y Tucumán en su perfil. Además, en la primera versión las frases de cada integrante aparecían siempre visibles, cuando en el TP1 se mostraban al hacer clic.',
    solucion:
      'Confirmamos con Judith que es de Tucumán y unificamos el dato. Recuperamos el comportamiento original de la frase con un componente QuoteReveal (botón para mostrar y ocultar).',
  },
  {
    id: 'tp2-4',
    etapa: 'TP2',
    titulo: 'Catálogo local en JSON con búsqueda y filtro',
    decision:
      'Definimos un catálogo de 24 herramientas y tecnologías del desarrollo web, en 6 categorías, en lugar de "casos de éxito" de clientes, para no inventar datos. Cada registro tiene un detalle que se despliega, más búsqueda por texto y filtro por categoría con mensaje de sin resultados y botón para restablecer.',
    dificultad:
      'Al revisar el contenido generado encontramos una etiqueta con un error de tipeo ("Reactivad") y frases exageradas o poco precisas sobre algunas herramientas.',
    solucion:
      'Corregimos la etiqueta y reescribimos esas frases con afirmaciones que se pueden sostener.',
  },
  {
    id: 'tp2-5',
    etapa: 'TP2',
    titulo: 'API pública con estados de carga y error',
    decision:
      'Elegimos la API pública de Dev.to (sin clave) por su relación con el desarrollo web. Antes de implementarla comprobamos desde la consola del navegador que respondía sin bloqueos. La página muestra un mensaje mientras carga, otro ante un error, y permite actualizar y reintentar.',
    dificultad:
      'Para probar el error, simular "Sin conexión" en las herramientas del navegador dejó fuera a toda la aplicación de desarrollo, y Chrome mostró su pantalla de sin internet.',
    solucion:
      'Probamos el error cambiando a propósito la URL de la API por una inexistente. Apareció el mensaje con el botón Reintentar, y al restaurar la URL volvieron los artículos.',
  },
  {
    id: 'tp2-6',
    etapa: 'TP2',
    titulo: 'Control de versiones y uso de herramientas de IA',
    decision:
      'Fuimos guardando un commit por etapa en un repositorio local, sin subirlo a GitHub hasta tener el proyecto listo, para poder volver atrás si algo fallaba.',
    dificultad:
      'Durante el desarrollo se agotó el cupo semanal de uso de los modelos del agente de programación antes de terminar una etapa.',
    solucion:
      'Continuamos una parte del trabajo con otra herramienta de IA, pegando y probando el código manualmente, y lo registramos para la declaración de uso de IA.',
  },
];