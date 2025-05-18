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
          <Typography fontSize={14}>
            A nearby hotel is getting many service reviews but lacks staff to
            read them all. You have been hired to build a tool that
            automatically sorts reviews by sentiment—separating negative ones
            from positive and neutral—so the hotel can assign three staff to
            each category for follow-up.
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
          <Box sx={{ pl: 3 }}>
            <Typography style={{ fontSize: "14px" }}>
              1. Dashboard Overview:
              <Box sx={{ pl: 2 }}>
                <Typography style={{ fontSize: "14px" }}>
                  a. The dashboard page should display the total number of
                  reviews, as well as the total number of positive, negative,
                  and neutral reviews.
                </Typography>
              </Box>
            </Typography>

            <Typography
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              2. Categorized Pages:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. There should be three separate pages:
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  1. Positive Reviews
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  2. Negative Reviews
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  3. Neutral Reviews
                </Typography>
              </Box>
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                b. Reviews should automatically be placed in the respective
                category based on sentiment.
              </Box>
            </Typography>

            <Typography style={{ marginBottom: "20px", fontSize: "14px" }}>
              3. Review Details:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. Each review should display the following information of the
                sender:
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  1. Full name
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  2. Time of submission
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  3. Email address
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  4. Content of the review
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  4. Profile picture
                </Typography>
              </Box>
            </Typography>
            <Typography style={{ fontSize: "14px" }}>
              4. Review Management:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. Each review should have a Delete button that allows the
                review to be removed from the page.
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ marginTop: "15px", fontSize: "14px" }}>
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
          <Typography style={{ fontSize: "14px" }}>
            1. Figma file showing all design requirements
            <br />
            2. README file to get you started <br />
            3. review.json file containing all the hotel reviews
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, mt: 3, backgroundColor: "#1e1e1e", color: "white" }}
        >
          <Typography fontSize={18} fontWeight={600} mb={1}>
            💡 Optional tasks
          </Typography>
          <Typography fontSize={14}>
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
          <Box sx={{ pl: 3 }}>
            <Typography style={{ fontSize: "14px" }}>
              1. Dashboard Overview:
              <Box sx={{ pl: 2 }}>
                <Typography style={{ fontSize: "14px" }}>
                  a. The dashboard page should display the total number of
                  reviews, as well as the total number of positive, negative,
                  and neutral reviews.
                </Typography>
              </Box>
            </Typography>

            <Typography
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              2. Categorized Pages:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. There should be three separate pages:
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  1. Positive Reviews
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  2. Negative Reviews
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  3. Neutral Reviews
                </Typography>
              </Box>
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                b. Reviews should automatically be placed in the respective
                category based on sentiment.
              </Box>
            </Typography>

            <Typography style={{ marginBottom: "20px", fontSize: "14px" }}>
              3. Review Details:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. Each review should display the following information of the
                sender:
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  1. Full name
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  2. Time of submission
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  3. Email address
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  4. Content of the review
                </Typography>
                <Typography sx={{ pl: 2, fontSize: "14px" }}>
                  4. Profile picture
                </Typography>
              </Box>
            </Typography>
            <Typography style={{ fontSize: "14px" }}>
              4. Review Management:
              <Box sx={{ pl: 2, fontSize: "14px" }}>
                a. Each review should have a Delete button that allows the
                review to be removed from the page.
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ marginTop: "15px", fontSize: "14px" }}>
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
