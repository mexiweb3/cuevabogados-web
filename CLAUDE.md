# CLAUDE.md - CuevAbogados Website

## Proyecto

Landing page profesional para **CuevAbogados** (Javier Cueva Ancira y Asociados, S.C.), despacho de derecho laboral patronal en Monterrey con 78 años de trayectoria.

**URLs:**
- Producción: https://cuevabogados.vercel.app
- GitHub: https://github.com/mexiweb3/cuevabogados-web

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 15.5.9 | Framework (App Router) |
| React | 19.0.0 | UI Library |
| TypeScript | 5.7.0 | Tipado |
| Tailwind CSS | 3.4.16 | Estilos |
| Framer Motion | 11.x | Animaciones |
| Supabase | 2.90.1 | Backend (futuro) |
| Vercel | - | Hosting |

## Tipografía

| Fuente | Uso | Variable CSS |
|--------|-----|--------------|
| Montserrat | Logo/Marca | `--font-montserrat` |
| Playfair Display | Headings | `--font-playfair` |
| Inter | Body text | `--font-inter` |

## Paleta de Colores

```css
/* Primarios */
--navy-500: #1B3A5F;    /* Fondo principal */
--gold-500: #C9A227;    /* Acentos */
--cream: #FDFBF7;       /* Fondos alternos */
--charcoal: #2C2C2C;    /* Texto body */
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing principal
│   ├── globals.css             # Estilos globales
│   └── (marketing)/            # Páginas secundarias
│       ├── servicios/
│       ├── nosotros/
│       ├── equipo/
│       ├── contacto/
│       └── analisis-gratuito/
├── components/
│   └── landing/cuevabogados/   # Componentes de la landing
│       ├── Navbar.tsx          # Header con scroll spy
│       ├── Hero.tsx            # Hero con stats animados
│       ├── ClientLogos.tsx     # Logos de clientes
│       ├── Services.tsx        # 6 servicios con badges
│       ├── Experience.tsx      # Timeline y stats
│       ├── Testimonials.tsx    # 3 testimoniales
│       ├── Team.tsx            # 4 miembros del equipo
│       ├── FAQ.tsx             # 6 preguntas frecuentes
│       ├── Contact.tsx         # Formulario + mapa
│       ├── Footer.tsx          # Footer
│       └── WhatsAppButton.tsx  # Floating button
└── lib/
    ├── fonts.ts                # Configuración de fuentes
    └── utils.ts                # Utilidades (cn)
```

## Datos del Cliente

### Información de Contacto (REAL)
- **Teléfono:** 81 8354 7998
- **WhatsApp:** 52 81 8345 6789
- **Email:** contacto@cuevabogados.mx
- **Dirección:** Mirador 111 Sur, Col. Mirador, C.P. 64070, Monterrey, N.L.
- **Horario:** L-V 9:00-18:00, Sáb con cita

### Equipo
| Nombre | Rol | Experiencia |
|--------|-----|-------------|
| Javier Cueva Ancira | Director General | +38 años |
| Javier Cueva Rodríguez | Director Jurídico | +17 años |
| Raúl Mauricio Cueva | Director Administrativo | 19 años |
| Ricardo Cueva Acosta | COO | +16 años |

### Clientes Conocidos
- Walmart
- Home Depot
- Osram
- Mars
- Regal-Beloit

## Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Deploy a Vercel
vercel --prod
```

## Características Implementadas

### UX/UI
- [x] Mobile-first responsive design
- [x] Scroll spy en navbar
- [x] Animaciones con Framer Motion
- [x] Stats con counter animado
- [x] WhatsApp floating button con tooltip
- [x] Formulario con estados (loading, success)
- [x] FAQ accordion
- [x] Google Maps embed

### Secciones
- [x] Hero con testimonial inline
- [x] Logos de clientes
- [x] Servicios con badges "Más solicitado"
- [x] Timeline de experiencia
- [x] Testimoniales con rating
- [x] Equipo con LinkedIn
- [x] FAQ
- [x] Contacto con mapa

## Pendientes / Roadmap

### Próximas mejoras
- [ ] Integrar formulario con Supabase
- [ ] Fotos reales del equipo
- [ ] Logos reales de clientes
- [ ] Google Analytics / Plausible
- [ ] Schema.org para SEO
- [ ] Página de blog/noticias

### Integración con LexFlow
Este sitio es el showcase del cliente piloto para **LexFlow** (SaaS de gestión legal). Ver `/home/davidiego2/Documents/_active/lexflow/` para el proyecto principal.

## Historial de Commits

```
75cccf1 UX: Major landing page improvements and real data
9ab5c87 Feat: Add complete CuevAbogados landing page
541345d Initial commit: CuevAbogados website
```

## Notas

- El logo (`public/logo-cuevabogados.jpeg`) es el oficial del despacho
- La fuente del logo es similar a **Gotham Bold** / **Montserrat Bold**
- WhatsApp es el canal preferido para contacto en México
