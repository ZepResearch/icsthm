import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
 const data = await req.json();
    
    await resend.emails.send({
     from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
       html: ContactFormEmail(data)
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}