import { db } from "@/lib/firebase";
import { Box, Button, Container } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { Content } from "./Content";

type UIComponentNode = {
  type: string;
  props?: Record<string, React.ElementType>;
  children?: (string | UIComponentNode)[];
  next_tutorial?: string;
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
      {content.next_tutorial && (
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              mt: 6,
              backgroundColor: "#fff",
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              px: 4,
              py: 1.5,

              borderRadius: "999px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <Link href={`../tutorials/${content.next_tutorial}`}>
              Next tutorial
            </Link>
          </Button>
        </Box>
      )}
    </Container>
  );
}
