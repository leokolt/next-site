import styles from '@/styles/contacts.module.css'
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xyyabpzj");

    if (state.succeeded) {
        return <p>Спасибо! Я с вами обязательно свяжусь</p>;
    }


    return (
        <form className={styles.mainForm} onSubmit={handleSubmit}>
            <div className={styles.mainFormRow}>
                <input id="who" type="text" name="Кто ты?" placeholder="Вашу имя"/>
                <ValidationError prefix="Who" field="who" errors={state.errors} />
                <input id="email" type="email" name="Email" placeholder="Ваш Email"/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <textarea id="message" name="Сообщение" placeholder="Напишите, что вы хотите сделать..." />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className="mainBtn" disabled={state.submitting}>
                {state.submitting ? 'Отправляем...' : 'Отправить'}
            </button>
            <ValidationError errors={state.errors} />
        </form>
    );
}
