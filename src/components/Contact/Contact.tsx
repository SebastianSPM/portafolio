import { useState } from "react";
import Swal from 'sweetalert2'
import Button from "../Button/Button";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const formIncomplete =
    !name.trim() ||
    !email.trim() ||
    !message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formIncomplete) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Porfavor, completa todos los campos antes de enviar",
            });
            return;
        }

        
        if(!emailValid){
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Por favor, introduce un correo válido."
            });
        }
        

        if(sending) return;

        setSending(true);

        try {
            const url = "https://formspree.io/f/mnjeeelw"
            const response = await fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    Accept: "application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            if (!response.ok) {
                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error al enviar el mensaje",
                });
                return false;
            }

            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Gracias por ponerse en contacto."
            });

            setName("");
            setEmail("");
            setMessage("");

        } finally {
            setSending(false);
        }
    };

    return (
        <section id="Contact" className="contact-section">

            <h2>Contacto</h2>

            <form className="contact-form" onSubmit={submit}>

                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        email && (
                            <p className={emailValid ? "valid-email" : "invalid-email"}>
                                {emailValid ? "Correo válido" : "Correo no válido"}
                            </p>
                        )
                    }
                </div>

                <div>
                    <textarea placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <Button
                    text={sending ? "Sending..." : "Send"}
                    disabled={sending}
                />

            </form>

        </section>
    );
}

export default Contact;