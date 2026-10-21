export const COMPONENT_TREE = {
  nombre: "App",
  archivo: "src/App.jsx",
  nota: "Raíz de la aplicación. main.jsx la monta dentro de <StrictMode>.",
  hijos: [
    {
      nombre: "ThemeProvider",
      archivo: "src/context/ThemeProvider.jsx",
      nota: "Comparte el tema claro/oscuro con toda la app (ThemeContext) y lo guarda en localStorage.",
      hijos: [
        {
          nombre: "BrowserRouter",
          archivo: "react-router-dom",
          nota: "Habilita la navegación por URL. Routes y Route deciden qué página se muestra.",
          hijos: [
            {
              nombre: "Layout",
              archivo: "src/components/layout/Layout.jsx",
              nota: "Estructura compartida de todas las rutas: barra móvil, sidebar, contenido y pie.",
              hijos: [
                {
                  nombre: "ThemeToggle",
                  archivo: "src/components/common/ThemeToggle.jsx",
                  props: "showLabel (opcional)",
                  nota: "Botón de tema de la barra superior móvil.",
                },
                {
                  nombre: "Sidebar",
                  archivo: "src/components/layout/Sidebar.jsx",
                  props: "isOpen, onClose",
                  nota: "Menú lateral con NavLink a todas las secciones y a los 5 perfiles.",
                  hijos: [
                    {
                      nombre: "ThemeToggle",
                      archivo: "src/components/common/ThemeToggle.jsx",
                      props: "showLabel",
                      nota: "El mismo componente, reutilizado en el pie de la sidebar.",
                    },
                  ],
                },
                {
                  nombre: "Outlet",
                  archivo: "react-router-dom",
                  nota: "Punto donde se dibuja la página que corresponde a la URL.",
                  hijos: [
                    {
                      nombre: "HomePage",
                      archivo: "src/pages/HomePage.jsx",
                      ruta: "/",
                      nota: "Portada del equipo.",
                      hijos: [
                        {
                          nombre: "MemberCard (×5)",
                          archivo: "src/components/common/MemberCard.jsx",
                          props: "member",
                          nota: "Una tarjeta por integrante, con enlace a su perfil.",
                        },
                      ],
                    },
                    {
                      nombre: "ProfilePage",
                      archivo: "src/pages/ProfilePage.jsx",
                      ruta: "/integrantes/:id",
                      nota: "Una sola página para los 5 perfiles; toma los datos de teamData.js según el id.",
                      hijos: [
                        {
                          nombre: "QuoteReveal",
                          archivo: "src/components/profile/QuoteReveal.jsx",
                          props: "frase",
                          nota: "Botón que muestra u oculta la frase del integrante.",
                        },
                        {
                          nombre: "TagList",
                          archivo: "src/components/common/TagList.jsx",
                          props: "tags, className",
                          nota: "Habilidades del integrante.",
                        },
                        {
                          nombre: "Interacción propia (una por perfil)",
                          archivo: "src/components/profile/",
                          props: "member",
                          nota: "AdrianaInteraction, EliasInteraction, JudithInteraction, MagaliInteraction o SilviaInteraction, según el id.",
                          hijos: [
                            {
                              nombre: "MediaCard",
                              archivo: "src/components/common/MediaCard.jsx",
                              props: "item, actionSlot (opcional)",
                              nota: "Usada dentro de las interacciones de Adriana, Judith, Magalí y Silvia. La de Elías es una consola sin tarjetas.",
                            },
                          ],
                        },
                        {
                          nombre: "MediaCard (×3 películas, ×3 discos)",
                          archivo: "src/components/common/MediaCard.jsx",
                          props: "item",
                          nota: "Listado de obras favoritas del integrante.",
                        },
                      ],
                    },
                    {
                      nombre: "ContactPage",
                      archivo: "src/pages/ContactPage.jsx",
                      ruta: "/contacto",
                      nota: "Página de contacto del equipo.",
                      hijos: [
                        {
                          nombre: "ContactSection",
                          archivo: "src/components/home/ContactSection.jsx",
                          nota: "Formulario (mailto), dirección, mapa de OpenStreetMap y enlace a WhatsApp.",
                        },
                      ],
                    },
                    {
                      nombre: "CatalogPage",
                      archivo: "src/pages/CatalogPage.jsx",
                      ruta: "/proyectos",
                      nota: "Catálogo del JSON local (catalogo.json) con búsqueda y filtro.",
                      hijos: [
                        {
                          nombre: "SearchBar",
                          archivo: "src/components/catalog/SearchBar.jsx",
                          nota: "Búsqueda por texto.",
                        },
                        {
                          nombre: "FilterBar",
                          archivo: "src/components/catalog/FilterBar.jsx",
                          nota: "Filtro por categoría.",
                        },
                        {
                          nombre: "CatalogCard (×24)",
                          archivo: "src/components/catalog/CatalogCard.jsx",
                          nota: "Una tarjeta por registro, con detalle desplegable.",
                          hijos: [
                            {
                              nombre: "TagList",
                              archivo: "src/components/common/TagList.jsx",
                              props: "tags",
                              nota: "Etiquetas de cada herramienta.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nombre: "ApiPage",
                      archivo: "src/pages/ApiPage.jsx",
                      ruta: "/api-externa",
                      nota: "Consulta la API pública de Dev.to con el hook useFetchApi (carga, error y reintento).",
                      hijos: [
                        {
                          nombre: "LoadingSpinner",
                          archivo: "src/components/common/LoadingSpinner.jsx",
                          props: "text",
                          nota: "Se muestra mientras carga.",
                        },
                        {
                          nombre: "ErrorAlert",
                          archivo: "src/components/common/ErrorAlert.jsx",
                          props: "message, onRetry",
                          nota: "Se muestra si la consulta falla, con botón Reintentar.",
                        },
                        {
                          nombre: "ArticleCard (hasta ×9)",
                          archivo: "src/components/api/ArticleCard.jsx",
                          props: "article",
                          nota: "Un artículo devuelto por la API.",
                          hijos: [
                            {
                              nombre: "TagList",
                              archivo: "src/components/common/TagList.jsx",
                              props: "tags",
                              nota: "Etiquetas del artículo.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nombre: "TreePage",
                      archivo: "src/pages/TreePage.jsx",
                      ruta: "/arbol-renderizado",
                      nota: "Esta misma página: dibuja este árbol a partir de componentTreeData.js.",
                      hijos: [
                        {
                          nombre: "TreeNode (recursivo)",
                          archivo: "src/components/tree/TreeNode.jsx",
                          props: "node, level, defaultOpen",
                          nota: "Se dibuja a sí mismo por cada hijo del nodo.",
                        },
                      ],
                    },
                    {
                      nombre: "BitacoraPage",
                      archivo: "src/pages/BitacoraPage.jsx",
                      ruta: "/bitacora",
                      nota: "Registros de bitacoraData.js, con filtro por etapa y desplegables (<details>).",
                      hijos: [
                        {
                          nombre: "Campo (×3 por registro)",
                          archivo: "src/pages/BitacoraPage.jsx",
                          props: "label, texto",
                          nota: "Componente auxiliar definido en el mismo archivo: Decisión, Dificultad y Solución.",
                        },
                      ],
                    },
                    {
                      nombre: "NotFoundPage",
                      archivo: "src/pages/NotFoundPage.jsx",
                      ruta: "* (cualquier otra URL)",
                      nota: "Página 404 con botón para volver al inicio.",
                    },
                  ],
                },
                {
                  nombre: "Footer",
                  archivo: "src/components/layout/Footer.jsx",
                  nota: "Pie de página compartido.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};