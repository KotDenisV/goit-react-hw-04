import s from './ImageCard.module.css';

function ImageCard({ imgUrl, alt, onClick }) {
    
    return (
      <li className={s.listItem} onClick={onClick}>
        <img className={s.listImage} src={imgUrl} alt={alt} />
      </li>
    );
}

export default ImageCard;