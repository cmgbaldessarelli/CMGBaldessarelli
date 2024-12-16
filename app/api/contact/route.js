import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, phone, product, message } = await request.json();

  console.log(name, phone, product, message);

  if (!name || !phone || !message) {
    return NextResponse.json(
      { message: "Tutti i campi vanno compilati." },
      { status: 400 }
    );
  }

  if (phone.length > 10) {
    return NextResponse.json(
      { message: "Il numero di telefono non è valido." },
      { status: 400 }
    );
  }

  let productMessage = product ? `Si, ${product}` : "No";

  const transporter = nodemailer.createTransport({
    host: "smtps.aruba.it",
    logger: true,
    debug: true,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlBody = `
    <h1 style="font-family: 'Montserrat', sans-serif !important;">Hai ricevuto un <span style="color: #4caf50; text-transform: uppercase;">nuovo messaggio</span> tramite il tuo sito web!</h1>
    <div style="margin-block: 2rem;">
     <p style="margin: 0 !important;">Informazioni del mittente:</p>
      <ul style="margin: 0 !important;">
        <li style="font-family: 'Montserrat', sans-serif !important;"><strong>Nome:</strong> ${name}</li>
        <li style="font-family: 'Montserrat', sans-serif !important;"><strong>Telefono:</strong> ${phone}</li>
      </ul>
    </div>
    <div style="margin-bottom: 2rem !important;">
      <p style="font-family: 'Montserrat', sans-serif !important; margin: 0 !important;">È interessato a qualche prodotto in particolare?</p>
      ${productMessage}
    </div>
    <div>
      <p style="font-family: 'Montserrat', sans-serif !important; margin: 0 !important;">Il <strong>messaggio</strong> è il seguente:</p>
      <p style="font-family: 'Montserrat', sans-serif !important; margin: 0 !important;">${message}</p>
    </div>
  `;

  const mailOptions = {
    from: "CMG BALDESSARELLI <info@cmgbaldessarelli.it>",
    to: "info@cmgbaldessarelli.it",
    subject: `Nuovo messaggio da parte di ${name}`,
    html: htmlBody,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    return NextResponse.json(
      { message: "Errore nell'invio del messaggio." },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: "Messaggio inviato correttamente." },
    { status: 200 }
  );
}
