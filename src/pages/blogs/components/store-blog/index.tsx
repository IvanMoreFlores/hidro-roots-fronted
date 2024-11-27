import React, { useState } from "react";
import Image from "next/image";
import "../../../../app/globals.css";
import "./styles.css";

const BloComponent = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const blogPosts = [
    {
      id: 1,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
      enviosText: "Blog",
    },
    {
      id: 2,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      actionText: "Ir al curso",
      enviosText: "Curso",
    },
    {
      id: 3,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      inscribeText: "Inscribirme",
      enviosText: "Taller",
    },
    {
      id: 4,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
      inscribeText: "Inscribirme",
      enviosText: "Taller",
    },
    {
      id: 5,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      enviosText: "Blog",
    },
    {
      id: 6,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      actionText: "Ir al curso",
      enviosText: "Curso",
    },
    {
      id: 7,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "blog",
      inscribeText: "Inscribirme",
      enviosText: "Taller",
    },
    {
      id: 8,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "taller",
      actionText: "Ir al curso",
      enviosText: "Curso",
    },
    {
      id: 9,
      title: "Cultivo en casa y la soberanía alimentaria en las comunidades.",
      description: "Esto es un texto de referencia para un párrafo.",
      type: "curso",
      enviosText: "Blog",
    },
  ];

  const filterPosts = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredPosts = () => {
    if (activeFilter === "todos") return blogPosts;
    return blogPosts.filter((post) => post.enviosText.toLowerCase() === activeFilter);
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

      <div className="grid">
        {getFilteredPosts().map((post) => (
          <div key={post.id} className="card">
            <div className="image-container">
              <div className="div-envios">
                <p>{post.enviosText}</p>
              </div>
              <Image
                src="/img/blog/default.png"
                alt={post.title}
                width={180}
                height={185}
                
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
