import s from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return <div className={s.error}>{message}</div>;
}

export default ErrorMessage;
