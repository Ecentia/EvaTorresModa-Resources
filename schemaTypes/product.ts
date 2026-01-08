import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Productos',
  type: 'document',
  icon: () => '👗',
  groups: [
    { name: 'details', title: 'Detalles 📝' },
    { name: 'media', title: 'Fotos 📸' },
    { name: 'content', title: 'Descripción 📄' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
      group: 'details',
    }),
    
    // 1. PRIMERO ELEGIMOS CATEGORÍA
    defineField({
      name: 'category',
      title: 'Categoría Principal',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),

    // 2. LUEGO LA SUBCOLECCIÓN (SECCIÓN)
    defineField({
      name: 'section',
      title: 'Subcolección / Sección',
      type: 'reference',
      to: [{ type: 'section' }],
      group: 'details',
      description: 'Elige la subcolección (Primero selecciona una categoría arriba).',
      options: {
        // ✨ MAGIA: Solo muestra secciones que pertenezcan a la categoría seleccionada
        filter: ({ document }) => {
          // Si no hay categoría seleccionada, no mostramos nada
          if (!document?.category) {
            return { filter: 'false' }
          }
          // Filtramos: busca secciones donde section.category._ref sea igual al ID de la categoría de este producto
          return {
            filter: 'category._ref == $catId',
            params: { catId: (document.category as any)._ref }
          }
        }
      }
    }),

    // 3. GÉNERO (Opcional, pero lo dejamos por si la categoría lo usa)
    defineField({
      name: 'gender',
      title: 'Género',
      type: 'string',
      options: {
        list: [
          { title: 'Mujer', value: 'mujer' },
          { title: 'Hombre', value: 'hombre' },
          { title: 'Unisex', value: 'unisex' },
          { title: 'Niños/as', value: 'kids' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'mujer',
      group: 'details',
    }),

    // ... Resto de campos iguales
    defineField({
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '🚚 Envío Gratis', value: 'shipping' },
          { title: '🇪🇸 Hecho en España', value: 'spain' },
          { title: '🧶 Piel Genuina', value: 'leather' },
          { title: '☁️ Comodidad Extra', value: 'comfort' },
          { title: '✨ Diseño Exclusivo', value: 'exclusive' },
        ],
      },
      group: 'details',
    }),
    defineField({
      name: 'sizes',
      title: 'Tallas',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'details',
    }),
    defineField({
      name: 'image',
      title: 'Foto Principal',
      type: 'image',
      options: { hotspot: true },
      group: 'media',
    }),
    defineField({
      name: 'gallery',
      title: 'Galería',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
      group: 'media',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Detallada',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
  ],
})