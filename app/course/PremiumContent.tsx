import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function PremiumContent() {
  return (
    <Box style={{ textAlign: "center", marginTop: "40px" }}>
      <Typography variant="h6" style={{ marginBottom: "30px" }}>
        Oops! Only members who have started ML projects can view this content.
      </Typography>
      <Link href="https://forms.gle/zGadCw1NJqmLdp6w9">
        <Button variant="contained">Start ml projects now</Button>
      </Link>
    </Box>
  );
}
