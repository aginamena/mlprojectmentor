"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

// Custom styled accordion
const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "#242727",
  color: "white",
  boxShadow: "none",
  borderBottom: "1px solid #333",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

const faqs = [
  {
    title: "Do you offer refunds after upgrading?",
    id: "panel1",
    description:
      "We do not offer refunds after upgrading. We recommend trying out the free tutorials and projects first. If you find them valuable and want full access, you can confidently upgrade to a monthly or yearly plan.",
  },
  {
    title: "Can I cancel my premium subscription at any time?",
    id: "panel2",
    description:
      "Yes, you can cancel your premium plan at any time. After cancellation, you won’t be charged for the next billing cycle.",
  },
  {
    title: "Does the premium plan renew automatically?",
    id: "panel3",
    description:
      "Yes. If you choose the yearly plan, you're billed once per year until you cancel. The same applies to the monthly plan — you'll be charged monthly until you decide to cancel. Once canceled, you won’t be billed again.",
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        borderRadius: 3,
        maxWidth: "700px",
      }}
    >
      {faqs.map(({ id, title, description }) => (
        <StyledAccordion
          key={id}
          expanded={expanded === id}
          onChange={handleChange(id)}
        >
          <AccordionSummary
            expandIcon={
              expanded === id ? (
                <RemoveIcon sx={{ color: "white" }} />
              ) : (
                <ExpandMoreIcon sx={{ color: "white" }} />
              )
            }
          >
            <Typography fontWeight="bold">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}
