import Header from "@/components/Header";
import { auth0 } from "@/lib/auth0";
import { updateDocumentDateInCollection } from "@/lib/databaseQuery";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;
  const session = await auth0.getSession();
  const user = session?.user;
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status == "paid" && user) {
      await updateDocumentDateInCollection("users", user.email as string, {
        ...user,
        has_subscribed: true,
      });
    } else {
      redirect("/");
    }
  } catch (error) {
    console.error(error);
    redirect("/");
  }

  return (
    <>
      <Header />
      <Container>
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
