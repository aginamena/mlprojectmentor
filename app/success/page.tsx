import { updateDocumentDataInCollection } from "@/lib/dbQuery";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{
    session_id: string;
    customerEmail: string;
    referrerEmail: string | null;
  }>;
}) {
  const { session_id, customerEmail, referrerEmail } = await searchParams;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status == "paid") {
      const data = referrerEmail
        ? { has_subscribed: true, referrerEmail }
        : { has_subscribed: true };
      await updateDocumentDataInCollection("users", customerEmail, data);
    } else {
      redirect("/");
    }
  } catch (error) {
    console.error(error);
    redirect("/");
  }

  return (
    <>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Typography>
          Thank you for subscribing! You can now access all premium content
        </Typography>
        <br />
        <Link href="/" style={{ textDecoration: "underline" }}>
          Go back to home page
        </Link>
      </Container>
    </>
  );
}
