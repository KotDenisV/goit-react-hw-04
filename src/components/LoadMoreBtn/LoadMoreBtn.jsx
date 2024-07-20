import s from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onLoadMore }) {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;