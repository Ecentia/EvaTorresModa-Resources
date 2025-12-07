import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Productos',
  type: 'document',
  icon: () => '👗', // ✨ Icono de vestido
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
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'details',
    }),
    defineField({
      name: 'features',
      title: 'Características (Iconos)',
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