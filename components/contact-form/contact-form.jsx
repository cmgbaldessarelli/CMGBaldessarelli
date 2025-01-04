"use client";

import { useRef, useState } from "react";
import axios from "axios";

import styles from "./contact-form.module.css";

import { products } from "@/lib/products";

import Input from "../input/input";
import Loader from "../loader/loader";

export default function ContactForm() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const productRef = useRef();
  const privacyRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  function validateForm() {
    const newErrors = {};

    if (nameRef.current.value.trim() === "") {
      newErrors.name = "Il campo nome è obbligatorio.";
    }

    if (phoneRef.current.value.trim().length < 10) {
      newErrors.phone = "Il numero di telefono non è valido.";
    }
    if (phoneRef.current.value.trim() === "") {
      newErrors.phone = "Il campo telefono è obbligatorio.";
    }

    if (messageRef.current.value.trim() === "") {
      newErrors.message = "Il campo messaggio è obbligatorio.";
    }

    if (!privacyRef.current.checked) {
      newErrors.privacy = "Devi acccettare i termini e le condizioni.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const product = productRef.current.value;
    const message = messageRef.current.value;

    console.log(name, phone, product, message);

    try {
      const response = await axios.post("/api/contact", {
        name,
        phone,
        product,
        message,
      });
      console.log(response.data.message);
      setSuccess(response.data.message);
    } catch (error) {
      const newErrors = {};
      newErrors.error = error.response.data.message;
      setError(newErrors);
    }

    setLoading(false);
  }

  return (
    <form className={styles.contactsForm} onSubmit={handleSubmit}>
      {error?.error && <p className={styles.errorBanner}>{error.error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <div>
        <Input
          label="Nome"
          type="text"
          id="name"
          ref={nameRef}
          error={!!error?.name}
          onFocus={() => setError({ ...error, name: null })}
        />
        {error?.name && <p className={styles.error}>{error.name}</p>}
      </div>
      <div>
        <Input
          label="Telefono"
          type="tel"
          id="phone"
          ref={phoneRef}
          error={!!error?.phone}
          onFocus={() => setError({ ...error, phone: null })}
        />
        {error?.phone && <p className={styles.error}>{error.phone}</p>}
      </div>
      <Input
        label="Sei interessato a qualche prodotto in particolare?"
        id="product"
        options={products}
        ref={productRef}
      />
      <div>
        <Input
          label="Messaggio"
          textarea
          id="message"
          ref={messageRef}
          error={!!error?.message}
          onFocus={() => setError({ ...error, message: null })}
        />
        {error?.message && <p className={styles.error}>{error.message}</p>}
      </div>
      <div>
        <Input
          label="Dichiaro di aver letto e accettato i termini e le condizioni"
          checkbox
          type="checkbox"
          id="privacy"
          ref={privacyRef}
          onFocus={() => setError({ ...error, privacy: null })}
        />
        {error?.privacy && <p className={styles.error}>{error.privacy}</p>}
      </div>
      <button type="submit">{loading ? <Loader /> : "Invia"}</button>
    </form>
  );
}
