import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'section',
  title: 'Subcolecciones / Secciones',
  type: 'document',
  icon: () => '📂',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Sección',
      type: 'string',
      description: 'Ej: Perfumes, Accesorios, Fiesta, Casual...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Pertenece a la Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
      description: 'Define en qué colección aparecerá esta sección.'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name'
    }
  }
})