import s from './NotFoundMessage.module.sass';

const NotFoundMessage = () => {
    return (
        <p className={s.container}>
            <strong className={s.message}>Ничего не найдено.</strong>
        </p>
    );
}

export default NotFoundMessage;