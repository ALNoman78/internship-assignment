const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const open = header.classList.contains("active");

    // Close all
    headers.forEach((h) => {
      h.classList.remove("active");
      h.nextElementSibling.classList.remove("show");
    });

    // Toggle current
    if (!open) {
      header.classList.add("active");
      header.nextElementSibling.classList.add("show");
    }
  });
});
