import { defineField, defineType } from 'sanity'

// CORRECCIÓN: Usamos export const
export const product = defineType({
  name: 'product',
  title: 'Productos',
  type: 'document',
  groups: [
    { name: 'details', title: 'Detalles Principales' },
    { name: 'media', title: 'Multimedia' },
    { name: 'content', title: 'Contenido' },
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
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'details',
    }),
    // CARACTERÍSTICAS: Opciones de layout eliminadas para estabilidad
    defineField({
        name: 'features',
        title: 'Características Clave (Iconos)',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Envío Gratis', value: 'shipping' },
            { title: 'Hecho en España', value: 'spain' },
            { title: 'Piel Genuina', value: 'leather' },
            { title: 'Comodidad Extra', value: 'comfort' },
            { title: 'Diseño Exclusivo', value: 'exclusive' },
          ],
        },
        group: 'details',
      }),
    // TALLAS: Opciones de layout eliminadas para estabilidad
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