import { useState } from "react";
import Swal from 'sweetalert2'
import Button from "../Button";
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

    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (formIncomplete) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Porfavor, completa todos los campos antes de enviar",
            });
            return;
        }

        if (sending) return;

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
            }

            Swal.fire({
                title: "Mensaje enviado",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
                });

            setName("");
            setEmail("");
            setMessage("");

        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact-section">

            <h2>Contact</h2>

            <form className="contact-form">

                <div>
                    <input
                        type="text"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <textarea placeholder="Message"></textarea>
                </div>

                <Button
                    text={sending ? "Sending..." : "Send"}
                    onClick={submit}
                    disabled={formIncomplete || sending}
                />

            </form>

        </section>
    );
}

export default Contact;