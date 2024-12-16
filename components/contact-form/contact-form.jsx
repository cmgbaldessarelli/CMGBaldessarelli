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

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

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
      setError(error.response.data.message);
    }

    setLoading(false);
  }

  return (
    <form className={styles.contactsForm} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <Input label="Nome" type="text" id="name" ref={nameRef} />
      <Input label="Telefono" type="tel" id="phone" ref={phoneRef} />
      <Input
        label="Sei interessato a qualche prodotto in particolare?"
        id="product"
        options={products}
        ref={productRef}
      />
      <Input label="Messaggio" textarea id="message" ref={messageRef} />
      <button type="submit">{loading ? <Loader /> : "Invia"}</button>
    </form>
  );
}
