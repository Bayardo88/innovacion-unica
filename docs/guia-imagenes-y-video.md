# Guía: imágenes y videos de YouTube para los proyectos

Esta guía explica cómo preparar y agregar fotos y videos a una ficha del **Archivo de Innovación de UNICA**. Sirve tanto para el panel (`/admin`) como para editar los archivos a mano.

---

## 1. Antes de empezar: permisos

- Usá solo fotos que el equipo haya tomado o que tengan permiso de uso.
- Si en la foto se reconoce a una persona, tiene que estar de acuerdo con que se publique.
- Si la foto es de otra persona, completá el campo **Crédito**.

---

## 2. Cómo preparar las imágenes

| | Portada | Galería |
|---|---|---|
| **Formato** | Horizontal **4:3** (ej. 1600 × 1200 px) | Horizontal **4:3** (ej. 1200 × 900 px) |
| **Tipo de archivo** | **WebP** (recomendado) o JPG | WebP o JPG |
| **Peso** | Menos de **500 KB** | Menos de **300 KB** cada una |
| **Cantidad** | 1 | Entre 2 y 6 |

**Por qué 4:3:** las tarjetas, la portada y la galería se muestran en 4:3. Una foto vertical o panorámica se recorta por los bordes, así que dejá lo importante en el centro.

**Qué fotos funcionan mejor:**
- Para la **portada**: el prototipo, el resultado o el equipo trabajando. Una sola idea clara.
- Para la **galería**: el proceso (bocetos, pruebas, talleres), el resultado y el contexto de uso.
- Evitá capturas de pantalla con mucho texto chico, logos sueltos y collages.

**Cómo achicar y convertir las fotos (gratis):**
- **Squoosh** (en el navegador): https://squoosh.app. Arrastrá la foto, elegí *WebP*, calidad 75–80 y, en *Resize*, ancho 1600 px para la portada o 1200 px para la galería.
- En Mac también sirve **Vista Previa → Exportar**, aunque solo convierte a JPG.

### Nombres de archivo

Todas las imágenes se guardan en la misma carpeta (`public/proyectos/`). Para que no se mezclen, empezá **cada nombre con el nombre del proyecto**: en minúsculas, con guiones y sin tildes ni espacios.

```
agua-limpia-ya-portada.webp
agua-limpia-ya-01.webp
agua-limpia-ya-02.webp
```

❌ Evitá nombres como `IMG_4032.JPG`, `foto final (2).png` o `portada.webp`, que puede repetirse entre proyectos.

### Texto alternativo (alt): obligatorio

Describe la imagen para quien no puede verla (lectores de pantalla) y también sirve si la imagen no carga. Escribí **qué se ve**, en una oración:

- ✅ "Tres estudiantes prueban el sensor de agua instalado en un lavamanos del campus."
- ✅ "Boceto en papel de las pantallas de la aplicación."
- ❌ "Foto 1", "Imagen del proyecto", "portada"

El **pie de foto** (caption) es opcional y se ve debajo de la imagen. Sirve para dar contexto: *"Prueba con estudiantes del turno noche, octubre 2026."*

---

## 3. Agregar imágenes desde el panel (recomendado)

1. Entrá a https://unica-innovacion.netlify.app/admin/ y abrí el proyecto, o creá uno con **Proyectos → Nuevo**.
2. **Portada:** en *Imagen de portada → Imagen*, elegí **Subir** y seleccioná el archivo. Completá el **Texto alternativo**. Dejá vacío *Ilustración de ejemplo*: es solo para los proyectos de muestra.
3. **Galería:** en *Imágenes*, hacé clic en **Añadir imagen** por cada foto. Subí el archivo y completá el texto alternativo y, si querés, el pie y el crédito.
4. Para cambiar el orden de la galería, arrastrá las imágenes desde el ícono ═.
5. Hacé clic en **Guardar**. El sitio se actualiza en 1–2 minutos.

> Si una imagen ya está subida, en vez de *Subir* podés elegirla de la biblioteca de medios.

## 4. Agregar imágenes a mano (archivo Markdown)

1. Copiá las imágenes a `public/proyectos/`.
2. En el archivo del proyecto (`src/content/projects/<proyecto>.md`), escribí la ruta **sin** `public`, empezando con `/proyectos/`:

```yaml
cover:
  src: "/proyectos/agua-limpia-ya-portada.webp"
  alt: "Tres estudiantes prueban el sensor de agua en un lavamanos."

gallery:
  - src: "/proyectos/agua-limpia-ya-01.webp"
    alt: "Circuito del sensor sobre una mesa de trabajo."
    caption: "Primer prototipo funcional."
  - src: "/proyectos/agua-limpia-ya-02.webp"
    alt: "Carcasa impresa en 3D junto al grifo."
    credit: "Foto: Daniela Soto"
```

3. Hacé commit y push. Ojo con las mayúsculas: `Portada.WEBP` y `portada.webp` no son el mismo archivo para el sitio publicado.

**Si un proyecto todavía no tiene fotos:** dejá la portada solo con `alt` y sin `src`. El sitio muestra una ilustración en su lugar, y podés agregar las fotos más adelante. Si no hay galería, escribí `gallery: []`.

---

## 5. Videos de YouTube

El sitio no aloja videos: se usa un **enlace de YouTube**. En la ficha aparece la miniatura con un botón de reproducción, y el video solo se carga cuando la persona hace clic, así la página no se vuelve lenta.

### Preparar el video en YouTube

- **Visibilidad:** **Público** o **No listado**. *No listado* solo lo ve quien tiene el enlace, y funciona perfecto en el sitio. ❌ **Privado** no funciona.
- En la configuración del video, dejá activada la opción **Permitir insertar** (viene activada por defecto).
- Si se puede, agregá **subtítulos**. YouTube los genera automáticamente y conviene revisarlos.

### Copiar el enlace

En YouTube: **Compartir → Copiar**. Cualquiera de estos formatos sirve:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://youtu.be/dQw4w9WgXcQ
https://www.youtube.com/shorts/dQw4w9WgXcQ
```

❌ No sirven los enlaces de la versión móvil (`https://m.youtube.com/…`): cambiá `m.` por `www.`. Tampoco sirven los enlaces a una **lista de reproducción** o a un **canal**: tiene que ser el enlace de un video.
Lo que viene después de `&` (por ejemplo `&t=30s` o `&si=…`) se puede dejar o borrar.

### Agregarlo

- **En el panel:** pegá el enlace en el campo **Video de YouTube** y guardá. Si el formato no es válido, el panel avisa antes de guardar.
- **A mano:** agregá una línea en el archivo del proyecto:

```yaml
video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Un proyecto puede tener **un** video. Si hay más, como una presentación y una demo, agregá los demás como **Recursos**:

```yaml
links:
  - { label: "Demo del prototipo (YouTube)", url: "https://youtu.be/XXXXXXXXXXX" }
  - { label: "Presentación (PDF)", url: "https://drive.google.com/…" }
```

---

## 6. Lista rápida antes de guardar

- [ ] Las fotos son horizontales (4:3), están en WebP o JPG y pesan menos de 500 KB.
- [ ] Los nombres de archivo empiezan con el nombre del proyecto, sin espacios ni tildes.
- [ ] Cada imagen tiene un texto alternativo que describe lo que se ve.
- [ ] Las personas reconocibles dieron su permiso.
- [ ] El video es Público o No listado, y el enlace empieza con `https://www.youtube.com/` o `https://youtu.be/`.
- [ ] *Proyecto de ejemplo* está apagado (`example: false`).

## 7. Si algo no se ve

| Problema | Qué revisar |
|---|---|
| La imagen no aparece | ¿La ruta empieza con `/proyectos/`? ¿El nombre coincide exactamente, mayúsculas incluidas? |
| La foto se ve cortada | Es vertical o muy panorámica: recortala a 4:3 dejando lo importante al centro. |
| El video muestra error | Debe ser Público o No listado y tener activado *Permitir insertar*. |
| Guardé y el sitio no cambió | Esperá 2 minutos y recargá. Si sigue igual, revisá el último deploy en https://app.netlify.com/projects/unica-innovacion/deploys: un dato mal escrito (por ejemplo, una edición que no existe) frena la publicación, y el error dice qué campo es. |
