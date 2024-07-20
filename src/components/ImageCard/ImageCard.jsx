import s from './ImageCard.module.css';

function ImageCard({ imgUrl, alt, onClick }) {
    
    return (
      <li className={s.listItem}>
        <img className={s.listImage} src={imgUrl} alt={alt} onClick={onClick} />
      </li>
    );
}

export default ImageCard;