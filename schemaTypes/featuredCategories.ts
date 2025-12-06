import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featuredCategories',
  title: 'Configuración de Portada',
  type: 'document',
  // Icono de casita para el menú
  icon: () => '🏠', 
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
  // --- AQUÍ ARREGLAMOS LA VISUALIZACIÓN ---
  preview: {
    select: {
      // Seleccionamos un campo cualquiera (el tipo de documento) para activar el prepare
      _type: '_type'
    },
    // Usamos esta sintaxis exacta para evitar errores de compilación
    prepare() {
      return {
        title: 'Gestión de Portada',
        subtitle: 'Elige aquí las 3 categorías principales'
      }
    }
  }
})