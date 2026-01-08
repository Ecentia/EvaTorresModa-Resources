import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorías Principales',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    
    // --- NUEVO: CONTROL DE GÉNERO ---
    defineField({
      name: 'enableGenderFilter',
      title: '¿Activar filtro de Hombre/Mujer?',
      description: 'Actívalo para ropa (se mostrarán los botones). Desactívalo para cosas como Belleza o Accesorios (se ocultarán).',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})