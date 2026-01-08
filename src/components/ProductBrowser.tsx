import React, { useState, useMemo } from 'react';
import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

interface Product {
  name: string;
  slug: string;
  price?: string;
  image?: any;
  gender?: string;
  sectionName?: string; // Ahora recibimos el nombre de la sección referenciada
}

interface Props {
  products: Product[];
  enableGenderFilter: boolean; // Recibimos la configuración
}

export default function ProductBrowser({ products, enableGenderFilter }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('todos');

  // Lógica de Filtrado
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesGender = true;
      // Solo aplicamos filtro de género si está habilitado en la categoría
      if (enableGenderFilter) {
          matchesGender = selectedGender === 'todos' || !p.gender || p.gender === selectedGender || p.gender === 'unisex';
      }

      return matchesSearch && matchesGender;
    });
  }, [products, searchTerm, selectedGender, enableGenderFilter]);

  // Agrupación por Secciones (Subcolecciones)
  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: Product[] } = {};
    const noSection: Product[] = [];

    filteredProducts.forEach(p => {
      if (p.sectionName) {
        if (!groups[p.sectionName]) groups[p.sectionName] = [];
        groups[p.sectionName].push(p);
      } else {
        noSection.push(p);
      }
    });

    // Ordenar alfabéticamente las secciones encontradas
    const sortedSectionNames = Object.keys(groups).sort();

    return { groups, sortedSectionNames, noSection };
  }, [filteredProducts]);

  return (
    <div className="w-full">
      
      {/* --- BARRA DE HERRAMIENTAS --- */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white p-4 border-b border-gray-100 sticky top-[70px] z-30 shadow-sm">
        
        {/* Buscador */}
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 border border-gray-200 w-full rounded-sm focus:outline-none focus:border-eva-green bg-gray-50 focus:bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtros de Género (SOLO SI ESTÁ ACTIVADO) */}
        {enableGenderFilter && (
            <div className="flex items-center space-x-2 animate-fade-in-up">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 hidden md:inline">Género:</span>
                <div className="flex bg-gray-100 p-1 rounded-sm">
                    {['todos', 'mujer', 'hombre'].map((gender) => (
                        <button
                            key={gender}
                            onClick={() => setSelectedGender(gender)}
                            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                                selectedGender === gender 
                                ? 'bg-white text-eva-dark shadow-sm' 
                                : 'text-gray-500 hover:text-eva-dark hover:bg-gray-200'
                            }`}
                        >
                            {gender === 'todos' ? 'Todo' : gender}
                        </button>
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* --- RESULTADOS --- */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-400 italic bg-gray-50 rounded-lg">
          No se encontraron productos.
        </div>
      ) : (
        <div className="space-y-16">
            
            {/* 1. SECCIONES (Perfumes, Accesorios, etc.) */}
            {groupedProducts.sortedSectionNames.map(sectionName => (
                <div key={sectionName} className="relative">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-serif text-eva-dark">{sectionName}</h2>
                        <div className="h-px bg-eva-gold/30 flex-1"></div>
                    </div>
                    <ProductGrid products={groupedProducts.groups[sectionName]} />
                </div>
            ))}

            {/* 2. PRODUCTOS SIN SECCIÓN */}
            {groupedProducts.noSection.length > 0 && (
                <div className="relative">
                    {groupedProducts.sortedSectionNames.length > 0 && (
                        <div className="flex items-center gap-4 mb-8">
                             <h2 className="text-2xl font-serif text-gray-400 italic">General</h2>
                             <div className="h-px bg-gray-100 flex-1"></div>
                        </div>
                    )}
                    <ProductGrid products={groupedProducts.noSection} />
                </div>
            )}
        </div>
      )}
    </div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
                <a key={product.slug} href={`/producto/${product.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-sm shadow-md aspect-[3/4] mb-6 bg-gray-100">
                        {product.image ? (
                            <img
                                src={urlFor(product.image).width(600).height(800).url()}
                                alt={product.name}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 italic">Sin foto</div>
                        )}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white text-eva-dark px-6 py-3 uppercase text-xs font-bold tracking-widest hover:bg-eva-gold hover:text-white transition transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                                Ver Detalles
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-serif text-eva-dark mb-2 group-hover:text-eva-green transition">{product.name}</h3>
                        {product.price && <p className="text-eva-gold font-bold">{product.price}</p>}
                    </div>
                </a>
            ))}
        </div>
    );
}