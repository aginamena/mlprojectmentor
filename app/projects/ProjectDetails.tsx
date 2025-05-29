import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ZipFiles from "./ZipFiles";

export default function ProjectDetails() {
  return (
    <Grid container spacing={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper
          elevation={3}
          sx={{ p: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <Typography fontSize={18} fontWeight={600}>
              📄 Background
            </Typography>
          </Stack>
          <Typography fontSize={15}>
            A nearby hotel is getting many service reviews but lacks staff to
            read them all. You have been hired to build a tool that
            automatically sorts reviews by sentiment—separating negative ones
            from positive and neutral—so the hotel can assign staff to each
            category for follow-up.
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            mt: 3,
            p: 3,
            backgroundColor: "#1e1e1e",
            color: "white",
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography fontSize={18} fontWeight={600} mb={2}>
            📋 Requirements
          </Typography>
          <ol style={{ fontSize: "15px" }}>
            <li>
              <strong>Navigation Links</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>There are 4 navigation links:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>
                    1. The Dashboard link directs you to the dashboard page
                  </li>
                  <li>
                    2. The Positive, Neutral and Negative links take you to the
                    review analysis page when clicked
                  </li>
                </ul>
              </ul>
            </li>
            <li style={{ marginTop: 10, marginBottom: 19 }}>
              <strong>Dashboard page</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>The dashboard should display:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>1. Total number of reviews</li>
                  <li>
                    2. Breakdown of reviews by sentiment positive, neutral and
                    negative
                  </li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>Review analysis Page</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>
                  When any of the links (Positive, Neutral and Negative) are
                  clicked, the displayed reviews on the review analysis page
                  should filter by sentiment. For example, clicking the Positive
                  link will show only positive reviews, and similarly for
                  Neutral and Negative links
                </li>
              </ul>
            </li>

            <li style={{ marginTop: 10, marginBottom: 19 }}>
              <strong>Review Details</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>Each review should include the following details:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>1. Full name of the reviewer</li>
                  <li>2. Time of submission</li>
                  <li>3. Email address</li>
                  <li>4. Content of the review</li>
                  <li>5. Profile picture of the reviewer</li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>Review Management </strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>
                  Each review should have a Delete button to allow it to be
                  removed from the page.
                </li>
              </ul>
            </li>
          </ol>
          <Typography sx={{ marginTop: "15px", fontSize: "15px" }}>
            Download the starter files, read the README to get set up, and
            review the Figma designs to understand the visual requirements. Good
            luck!
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, mt: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <Typography fontSize={18} fontWeight={600}>
              📦 Starter files
            </Typography>
          </Stack>
          <Typography style={{ fontSize: "15px" }}>
            1. Figma file showing all design requirements
            <br />
            2. README file to get you started <br />
            3. reviews.json file containing all the hotel reviews <br />
            4. HTML, CSS and Javascript files for the dashboard and reviews
            pages <br />
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, mt: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Typography fontSize={18} fontWeight={600} mb={1}>
            💡 Optional tasks
          </Typography>
          <Typography fontSize={15}>
            1. Store each review in a database so you can retrieve and sort them
            easily when displaying. <br />
            2. Add a reply button next to the delete button, allowing you to
            send a message back to the sender of the review. <br />
            3. Create a “Give Review” page where users can write and submit
            their reviews. Once submitted, the data is saved to the database.
          </Typography>
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: "#1e1e1e",
            color: "white",
          }}
        >
          <Typography fontSize={18} fontWeight={600} mb={2}>
            📋 Requirements
          </Typography>
          <ol style={{ fontSize: "15px" }}>
            <li>
              <strong>Navigation Links</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>There are 4 navigation links:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>
                    1. The Dashboard link directs you to the dashboard page
                  </li>
                  <li>
                    2. The Positive, Neutral and Negative links take you to the
                    review analysis page when clicked
                  </li>
                </ul>
              </ul>
            </li>
            <li style={{ marginTop: 10, marginBottom: 19 }}>
              <strong>Dashboard page</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>The dashboard should display:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>1. Total number of reviews</li>
                  <li>
                    2. Breakdown of reviews by sentiment positive, neutral and
                    negative
                  </li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>Review analysis Page</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>
                  When any of the links (Positive, Neutral and Negative) are
                  clicked, the displayed reviews on the review analysis page
                  should filter by sentiment. For example, clicking the Positive
                  link will show only positive reviews, and similarly for
                  Neutral and Negative links
                </li>
              </ul>
            </li>

            <li style={{ marginTop: 10, marginBottom: 19 }}>
              <strong>Review Details</strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>Each review should include the following details:</li>
                <ul style={{ paddingLeft: 10 }}>
                  <li>1. Full name of the reviewer</li>
                  <li>2. Time of submission</li>
                  <li>3. Email address</li>
                  <li>4. Content of the review</li>
                  <li>5. Profile picture of the reviewer</li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>Review Management </strong>
              <ul style={{ paddingLeft: 10 }}>
                <li>
                  Each review should have a Delete button to allow it to be
                  removed from the page.
                </li>
              </ul>
            </li>
          </ol>
          <Typography sx={{ marginTop: "15px", fontSize: "15px" }}>
            Download the starter files, read the README to get set up, and
            review the Figma designs to understand the visual requirements. Good
            luck!
          </Typography>
        </Paper>
      </Grid>
      <Box style={{ textAlign: "center", width: "100%" }}>
        <ZipFiles />
      </Box>
    </Grid>
  );
}
