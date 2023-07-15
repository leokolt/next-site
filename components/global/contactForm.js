import React, {useState} from 'react';
import styles from '@/styles/contacts.module.css'

export default function ContactForm() {

    // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');

  const [btn, setBtn] = useState(false);
  const [send, setSend] = useState(false);
  const [fail, setFail] = useState(false);

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    setBtn(true)
    const res = await fetch('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });
    // Success if status code is 201
    if (res.status === 201) {
        (console.log("success"), {
            type: 'success'
        });
        setSend(true)
        setBtn(false)
        resetForm()
        const timerId = setTimeout(() => {
            setSend(false)
        }, 3000);
        return () => clearTimeout(timerId);
    } else {
        (console.log("fail"), {
            type: 'error'
        });
        setFail(true)
        setBtn(false)
        resetForm()
        const timerId = setTimeout(() => {
            setFail(false)
        }, 3000);
        return () => clearTimeout(timerId);
    }
  };



    return(
        <div className={send ? styles.send : null}>
            <form className={styles.mainForm} onSubmit={submitForm}>
                <div className={styles.mainFormRow}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* <div>
                    <select name="purpose" id="purpose" value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}>
                    <option value="Ничего не выбрано">
                        Select one
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Query / Question">Query / Question</option>
                    <option value="Feedback / Message">Feedback / Message</option>
                    </select>
                </div> */}

                <div className={styles.mainFormRow}>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Что вас интересует?"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={styles.mainFormRow}>
                <button className="mainBtn" type="submit" disabled={!email || !name || !message}>
                    {btn ? 'Отправляется...' : 'Отправить'}
                </button>
                    {
                        send ?
                            <div className={styles.noticeSuccess}>Спасибо за сообщение! 👍 Я свяжусь с вами в ближайшее время</div> :
                        fail ?
                            <div className={styles.noticeFail}>Неудача! Свяжитесь со мной другим способом или отправьте сообщение позже</div> :
                        null
                    }
                </div>
            </form>


        </div>
  );
}
/*
export default function ContactForm() {

    const[click, setClick] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3eaa5353-83d7-492c-8771-8f636e5bf2db");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setClick()

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            //setClick()
        } else {
            console.log(result);
        }
    }

  return (
    <div className={click ? styles.val : null }>
      <form className={styles.mainForm} onSubmit={handleSubmit}>
      <div className={styles.mainFormRow}>
        <input type="text" name="name"  placeholder="Ваше имя" required/>
        <input type="email" name="email" placeholder="Ваш Email" required/>
        </div>
        <textarea name="message" placeholder="Напишите, что вы хотите сделать..."></textarea>
        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
        <button type="submit" onClick={() => setClick(true)} className="mainBtn">
            {click ? "Отправляется..." : "Отправить" }
        </button>
      </form>
    </div>
  );
}
*/

// export default function ContactForm() {
//     const [state, handleSubmit] = useForm("xyyabpzj");

//     if (state.succeeded) {
//         return <p>Спасибо! Я с вами обязательно свяжусь</p>;
//     }


//     return (
//         <form className={styles.mainForm} onSubmit={handleSubmit}>
//             <div className={styles.mainFormRow}>
//                 <input id="who" type="text" name="Кто ты?" placeholder="Ваше имя"/>
//                 <ValidationError prefix="Who" field="who" errors={state.errors} />
//                 <input id="email" type="email" name="Email" placeholder="Ваш Email"/>
//                 <ValidationError prefix="Email" field="email" errors={state.errors} />
//             </div>

//             <textarea id="message" name="Сообщение" placeholder="Напишите, что вы хотите сделать..." />
//             <ValidationError prefix="Message" field="message" errors={state.errors} />
//             <button type="submit" className="mainBtn" disabled={state.submitting}>
//                 {state.submitting ? 'Отправляем...' : 'Отправить'}
//             </button>
//             <ValidationError errors={state.errors} />
//         </form>
//     );
// }
