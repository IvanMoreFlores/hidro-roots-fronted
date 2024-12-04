import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../../../app/globals.css";
import "./styles.css";

const BlogComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState("todos");

  const blogPosts = [
    { id: 1, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "blog", enviosText: "Blog" },
    { id: 2, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "curso", enviosText: "Curso", actionText: "Ir al curso" },
    { id: 3, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "taller", enviosText: "Taller", actionText: "Inscribirme" },
    { id: 4, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "taller", enviosText: "Taller", actionText: "Inscribirme" },
    { id: 5, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "blog", enviosText: "Blog" },
    { id: 6, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "curso", enviosText: "Curso", actionText: "Ir al curso" },
    { id: 7, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "taller", enviosText: "Taller", actionText: "Inscribirme" },
    { id: 8, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "curso", enviosText: "Curso", actionText: "Ir al curso" },
    { id: 9, title: "Cultivo en casa y la soberanía alimentaria en las comunidades.", description: "Esto es un texto de referencia para un párrafo.", type: "blog", enviosText: "Blog" },
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterPosts = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredPosts = () => {
    if (activeFilter === "todos") {
      if (isMobile) {
        const types = ["blog", "curso", "taller"];
        const uniquePosts = types
          .map((type) => blogPosts.find((post) => post.type.toLowerCase() === type))
          .filter((post): post is typeof blogPosts[0] => !!post); // Asegura que no haya undefined
        return uniquePosts;
      }
      return blogPosts;
    }
    return blogPosts.filter((post) => post.enviosText.toLowerCase() === activeFilter);
  };

  return (
    <div className="container-blog">
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

      <div className={`grid ${isMobile ? "mobile-grid" : ""}`}>
        {getFilteredPosts().map((post) => (
          <div key={post?.id} className="card">
            <div className="image-container">
              <p className="div-envios-blog">{post?.enviosText}</p>
              <Image
                src="/img/blog/default.png"
                alt={post?.title || "Imagen de blog"}
                width={180}
                height={185}
              />
            </div>
            <div className="content">
              <h3>{post?.title}</h3>
              <p>{post?.description}</p>
              <div className="actions">
                {post?.actionText && (
                  <a href={`/${post?.type}/${post?.id}`} className="link">
                    {post?.actionText}
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

export default BlogComponent;
