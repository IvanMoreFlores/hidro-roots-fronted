import React, { useState } from 'react';
import Image from 'next/image';
import "./styles.css";
const BlogComponent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const blogPosts = [
    {
      id: 1,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
      
    },
    {
      id: 2,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      actionText: "Ir al curso",
    
    },
    {
      id: 3,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
    
      inscribeText: "Inscribirme"
    },
    {
      id: 4,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
      inscribeText: "Inscribirme"
    },
    {
      id: 5,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
    
    },
    {
      id: 6,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      actionText: "Ir al curso",
      
    },
    {
      id: 7,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
     
      inscribeText: "Inscribirme"
    },
    {
      id: 8,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      actionText: "Ir al curso",
    
    },
    {
      id: 9,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      
    }
  ];

  const filterPosts = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredPosts = () => {
    if (activeFilter === 'todos') return blogPosts;
    return blogPosts.filter(post => post.type === activeFilter);
  };

  const handleAction = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-center space-x-8 mb-12">
        <div 
          className={`cursor-pointer pb-2 ${activeFilter === 'todos' ? 'text-green-500 border-b-2 border-green-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => filterPosts('todos')}
        >
          Todos
        </div>
        <div 
          className={`cursor-pointer pb-2 ${activeFilter === 'blog' ? 'text-green-500 border-b-2 border-green-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => filterPosts('blog')}
        >
          Blog
        </div>
        <div 
          className={`cursor-pointer pb-2 ${activeFilter === 'curso' ? 'text-green-500 border-b-2 border-green-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => filterPosts('curso')}
        >
          Cursos
        </div>
        <div 
          className={`cursor-pointer pb-2 ${activeFilter === 'taller' ? 'text-green-500 border-b-2 border-green-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => filterPosts('taller')}
        >
          Talleres
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getFilteredPosts().map(post => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-48 relative bg-teal-600">
              <Image
                src="/img/blog/1b.png"
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleAction('/ir-al-curso');
                  }}
                  className="text-teal-600 hover:underline"
                >
                  {post.actionText}
                </a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleAction('/inscribir');
                  }}
                  className="text-teal-600 hover:underline"
                >
                  {post.inscribeText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;