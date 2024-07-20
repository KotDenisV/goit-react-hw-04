import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

function ImageGallery({ images, openModal }) {
    if (images.length === 0) return null;
 
    return (
      <ul className={s.wrapper}>
        {images.map(image => (
          <ImageCard            
            key={image.id}
            imgUrl={image.urls.small}
            alt={image.alt_description}
            onClick={() => openModal(image)}
          />
        ))}
      </ul>

    );
}

export default ImageGallery;