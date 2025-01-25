"use client";

import { useRef, useState } from "react";
import axios from "axios";

import styles from "./contact-form.module.css";

import { products } from "@/lib/products";

import Input from "../input/input";
import Select from "../select/select";
import Checkbox from "../checkbox/checkbox";
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

  const [selectedProductCodes, setSelectedProductCodes] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);

  function validateForm() {
    const newErrors = {};

    if (nameRef.current.value.trim() === "") {
      newErrors.name = "Il campo nome è obbligatorio.";
    }

    if (!phoneRef.current.value.trim()) {
      newErrors.phone = "Il numero di telefono è obbligatorio.";
    } else if (!/^\d{10,15}$/.test(phoneRef.current.value.trim())) {
      newErrors.phone = "Inserisci un numero di telefono valido.";
    }

    if (selectedProductCodes.length > 0 && selectedCodes.length === 0) {
      newErrors.product = "Devi selezionare almeno un codice prodotto.";
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
    const privacy = privacyRef.current.checked;

    console.log(name, phone, product, message, selectedCodes, privacy);

    try {
      const response = await axios.post("/api/contact", {
        name,
        phone,
        product,
        message,
        selectedCodes,
        privacy,
      });
      console.log(response.data.message);
      setSuccess(response.data.message);
      setTimeout(() => setSuccess(null), 5000);
    } catch (error) {
      const newErrors = {};
      newErrors.errorSubmit = error.response.data.message;
      setError(newErrors);
    }

    setLoading(false);
  }

  function handleProductChange(event) {
    const productName = event.target.value;

    const selectedProduct = products.find(
      (product) => product.name === productName
    );

    if (selectedProduct) {
      setSelectedProductCodes(selectedProduct.informations.articles || []);
    } else {
      setSelectedProductCodes([]);
    }
  }

  function handleCheckboxChange(event) {
    const code = event.target.value;

    setSelectedCodes((prev) =>
      event.target.checked ? [...prev, code] : prev.filter((c) => c !== code)
    );

    setError({ ...error, product: null });
  }

  return (
    <form className={styles.contactsForm} onSubmit={handleSubmit}>
      {error?.errorSubmit && (
        <p className={styles.errorBanner}>{error.errorSubmit}</p>
      )}
      {success && <p className={styles.success}>{success}</p>}

      <div>
        <Input
          label="Nome"
          type="text"
          id="name"
          name="name"
          required
          error={!!error?.name}
          ref={nameRef}
          onFocus={() => setError({ ...error, name: null })}
        />
        {error?.name && <p className={styles.error}>{error.name}</p>}
      </div>

      <div>
        <Input
          label="Telefono"
          type="tel"
          id="phone"
          name="phone"
          required
          error={!!error?.phone}
          ref={phoneRef}
          onFocus={() => setError({ ...error, phone: null })}
        />
        {error?.phone && <p className={styles.error}>{error.phone}</p>}
      </div>

      <Select
        label="Sei interessato a qualche prodotto in particolare?"
        id="product"
        name="product"
        ref={productRef}
        options={products}
        onChange={handleProductChange}
      />

      {selectedProductCodes.length > 0 && (
        <div>
          <p>Seleziona la variante di tuo interesse:</p>
          {selectedProductCodes.map((article) => (
            <Checkbox
              key={article.code}
              id={article.code}
              name={article.code}
              label={`${article.code} - ${article.description}`}
              value={article.code}
              onChange={handleCheckboxChange}
            />
          ))}
          {error?.product && <p className={styles.error}>{error.product}</p>}
        </div>
      )}

      <Input label="Note aggiuntive" textarea id="message" ref={messageRef} />

      <div>
        <Checkbox
          label="Ho letto e accetto i termini e le condizioni"
          id="privacy"
          name="privacy"
          required
          ref={privacyRef}
          onChange={() => setError({ ...error, privacy: null })}
        />
        {error?.privacy && <p className={styles.error}>{error.privacy}</p>}
      </div>

      <button type="submit">{loading ? <Loader /> : "Invia"}</button>
    </form>
  );
}

/* "use client";

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
  const [isProductSelected, setIsProductSelected] = useState(false);

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
 */
