import {
  // createUserProfileIfNotCreated,
  getDocumentDataInCollection,
} from "@/lib/databaseQuery";
import { Box, Button, Container, Typography } from "@mui/material";
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
  // await createUserProfileIfNotCreated(`/tutorials/${tutorial_name}`);

  const content = await getDocumentDataInCollection("tutorials", tutorial_name);
  if (!content) {
    return (
      <Container>
        <Typography>Ooops! This tutorial can not be found</Typography>
      </Container>
    );
  }

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Content node={content as UIComponentNode} />
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
