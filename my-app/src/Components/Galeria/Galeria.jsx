import './Galeria.css'

function Galeria() {

  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/300x200?text=Imagem+1',
      alt: ' Imagem 1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/300x200?text=Imagem+2',
      alt: ' Imagem 2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/300x200?text=Imagem+3',
      alt: ' Imagem 3',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/300x200?text=Imagem+4',
      alt: ' Imagem 4',
    },
  ];

  return (
    <>
      <div>
      <h2>Minha Galeria de Imagens</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
      }}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </div>
    </div>  
    </>
  )
}

export default Galeria
