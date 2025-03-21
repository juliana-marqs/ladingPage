document.querySelectorAll("#menu ul li a").forEach(link => {
    link.addEventListener("click", function() {
      // Remove 'active' de todos os links
      document.querySelector("#menu ul li a.active")?.classList.remove("active");
  
      // Adiciona 'active' ao link clicado
      this.classList.add("active");
    });
  });
  