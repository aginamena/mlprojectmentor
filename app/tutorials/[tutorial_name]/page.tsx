import { getDocumentDataInCollection } from "@/lib/dbQuery";
import { Container, Typography } from "@mui/material";
import { Content } from "./Content";
import NextTutorialBtn from "./NextTutorialBth";

type UIComponentNode = {
  type: string;
  props?: Record<string, React.ElementType>;
  children?: (string | UIComponentNode)[];
  next_tutorial?: object;
};

export default async function Tutorial({
  params,
}: {
  params: Promise<{ tutorial_name: string }>;
}) {
  const { tutorial_name } = await params;

  const content = await getDocumentDataInCollection("tutorials", tutorial_name);
  if (!content) {
    return (
      <Container>
        <Typography>Ooops! This tutorial can not be found</Typography>
      </Container>
    );
  }

  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Content node={content as UIComponentNode} />
      {content.next_tutorial && (
        <NextTutorialBtn next_tutorial={content.next_tutorial} />
      )}
    </Container>
  );
}
