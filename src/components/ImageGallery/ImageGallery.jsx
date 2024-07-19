import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

function ImageGallery({ images }) {
    
    return (
        <div>
            <ul className={s.wrapper}>
              {images.map(image => (
                <ImageCard
                //   openModal={() => {
                //     openModal(image);
                //   }}
                  key={image.id}
                  imgUrl={image.urls.small}
                  alt={image.alt_description}
                />
              ))}
            </ul>
        </div>
    );
}

export default ImageGallery;