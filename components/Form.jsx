import { useEffect, useRef, useState } from 'react'

function Form() {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const messageRef = useRef(null)

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false)
            }, 5000);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [success])

    function clearField() {
        nameRef.current.value = ''
        emailRef.current.value = ''
        phoneRef.current.value = ''
        messageRef.current.value = ''
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;
        if (!name || !email.includes('@') || !email || isNaN(phone) || !phone || !message) {
            setError('please input valid credentials in respective input field')
            return
        }
        setError(null)
        try {
            setLoading(true)
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name, email, phone, message
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {

                throw Error(response.statusText)
            }

            const data = await response.json()

            setSuccess(data.message)
            setLoading(false)
            clearField()

        } catch (err) {
            setError(err.message)

            console.log(err.message);
            setLoading(false)
        }
    }

    return (
        <>
            <h1 className="contact__title">
                let&apos;s make something amazing together.
            </h1>
            <form className="contact__form" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="name" ref={nameRef} required />
                <input name="email" type="email" placeholder="e-mail" ref={emailRef} required />
                <input name="phone" type="text" placeholder="phone number" ref={phoneRef} required />
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="enter message"
                    ref={messageRef}
                    required
                ></textarea>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <button className="button contact--button" type='submit' disabled={loading}>
                    submit
                    <i className={loading ? 'fas fa-spinner fa-pulse' : 'fab fa-telegram-plane'}></i>
                </button>
            </form>
        </>
    )
}

export default Form
