import { db } from "@/lib/firebase";
import { Container } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { Content } from "./Content";

type UIComponentNode = {
  type: string;
  props?: Record<string, React.ElementType>;
  children?: (string | UIComponentNode)[];
};

export default async function Tutorial({
  params,
}: {
  params: Promise<{ tutorial_name: string }>;
}) {
  const { tutorial_name } = await params;
  const docRef = doc(db, "tutorials", tutorial_name);
  const docSnap = await getDoc(docRef);
  let content: UIComponentNode = { type: "" };
  if (docSnap.exists()) content = docSnap.data() as UIComponentNode;

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Content node={content} />
    </Container>
  );
}
