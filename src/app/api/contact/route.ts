import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const topicToEmail: { [key: string]: string } = {
    'Registration': 'cflemingdesigns@sasktel.net',
    'Beginner class': 'melaniesydiaha@gmail.com',
    'FCBD® or Fusion': 'quinn55@gmail.com',
    'Other': 'melaniesydiaha@gmail.com',
  };

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, topic, message } = body;

  const recipient = topicToEmail[topic] ?? process.env.DEFAULT_TO_EMAIL!;

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: recipient,
      subject: `New ${topic} message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Topic: ${topic}

        Message:
        ${message}
      `,
    });

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
}