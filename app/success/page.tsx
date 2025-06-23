import { Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status == "paid") {
      //update user data in database
    }
  } catch (error) {
    console.error(error);
    redirect("/");
  }

  return (
    <Container>
      <Typography>
        This is the success page.thank you for subscribing
      </Typography>
    </Container>
  );
}
