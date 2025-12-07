import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featuredCategories',
  title: 'Configuración de Portada',
  type: 'document',
  icon: () =>  '🏠',
  fields: [
    defineField({
      name: 'category1',
      title: '1ª Categoría (Izquierda)',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category2',
      title: '2ª Categoría (Centro)',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category3',
      title: '3ª Categoría (Derecha)',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      // Seleccionamos _type solo para tener algo que seleccionar
      _type: '_type'
    },
    // CORRECCIÓN: Usamos 'prepare:' seguido de una función explícita
    prepare: () => {
      return {
        title: 'Gestión de Portada',
        subtitle: 'Elige aquí las 3 categorías principales'
      }
    }
  }
})