import "../../../../app/globals.css";
import React, { useState } from "react";
import Image from "next/image";

import "./styles.css";

const BloComponent = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

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
    },
    {
      id: 3,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      inscribeText: "Inscribirme",
    },
    {
      id: 4,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
    },
    {
      id: 5,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      actionText: "Ir al curso",
    },
    {
      id: 6,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
    },
    {
      id: 7,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
    },
    {
      id: 8,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
    },
    {
      id: 9,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      inscribeText: "Inscribirme",
    },
  ];

  const filterPosts = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredPosts = () => {
    if (activeFilter === "todos") return blogPosts;
    return blogPosts.filter((post) => post.type === activeFilter);
  };

  return (
    <div className="container-blog">
      {/* Filtros */}
      <div className="filters">
        {["todos", "blog", "curso", "taller"].map((filter) => (
          <div
            key={filter}
            className={`filter-item ${activeFilter === filter ? "active" : ""}`}
            onClick={() => filterPosts(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </div>
        ))}
      </div>

      {/* Grid de posts */}
      <div className="grid">
        {getFilteredPosts().map((post) => (
          <div key={post.id} className="card">
            <div className="image-container">
              <Image
                src="/img/blog/default.png"
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="actions">
                {post.actionText && (
                  <a href="/ir-al-curso" className="link">
                    {post.actionText}
                  </a>
                )}
                {post.inscribeText && (
                  <a href="/inscribir" className="link">
                    {post.inscribeText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloComponent;
