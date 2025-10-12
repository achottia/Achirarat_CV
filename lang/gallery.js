// lang/gallery.js - Generate gallery HTML from photo array

function generateGalleryHTML() {
    const imageElements = galleryPhotos.map((photo, index) => {
      return `<img src="${photo}" alt="Gallery image ${index + 1}">`;
    }).join('\n  ');
  
    return `
  <div class="img-gallery">
    ${imageElements}
  </div>
  <style>
    .img-gallery {
      column-count: 6;
      column-gap: 10px;
      padding: 10px;
    }
    
    .img-gallery img {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: 10px;
      break-inside: avoid;
      border-radius: 6px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .img-gallery img:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    
    @media (max-width: 1200px) {
      .img-gallery {
        column-count: 3;
      }
    }
    
    @media (max-width: 768px) {
      .img-gallery {
        column-count: 2;
      }
    }
    
    @media (max-width: 480px) {
      .img-gallery {
        column-count: 1;
      }
    }
  </style>
  `;
  }
  
  // Create the gallery HTML
  const galleryHTML = generateGalleryHTML();