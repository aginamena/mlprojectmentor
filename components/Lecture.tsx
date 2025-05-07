import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { JSX } from "react";

export default function Lecture({
  title,
  content,
  defaultExpanded,
}: {
  title: string;
  content: JSX.Element;
  defaultExpanded: boolean;
}) {
  return (
    <div>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
      </Accordion>
    </div>
  );
}
