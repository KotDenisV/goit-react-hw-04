import s from './ImageCard.module.css';

function ImageCard({ imgUrl, alt }) {
    
    return (
      <li className={s.listItem}>
        <img className={s.listImage} src={imgUrl} alt={alt} />
      </li>
    );
}

export default ImageCard;