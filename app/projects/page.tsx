import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Link from "next/link";
import Gallary from "./Gallary";
import ZipFiles from "./ZipFiles";

export default function Projects() {
  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Box
        sx={{
          marginBottom: "40px",
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Customer Feedback Analysis</Typography>
        <Typography>Category: Sentiment</Typography>
      </Box>

      <Gallary />
      <Paper
        style={{
          padding: "30px",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        You are free to use any tools or technologies to build this project, as
        long as you meet all the given requirements. <br /> Once you’ve
        completed the requirements and want to challenge yourself further,
        consider working on the optional tasks to increase the difficulty.
        <br /> If you have any questions, feel free to ask fellow developers in
        our Facebook community
        <Button>
          <Link href="https://www.facebook.com/share/g/16ScKkia3h/">here</Link>
        </Button>
      </Paper>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Paper sx={{ width: { xs: "100%", md: "45%" }, padding: "30px" }}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Background
          </Typography>
          <Typography>
            A hotel near your location has been receiving a large number of
            reviews about their services. However, they don’t have enough staff
            to manually go through all the reviews. You’ve been hired as a
            developer to organize these reviews automatically based on
            sentiment. Specifically, negative reviews should be categorized
            separately from positive and neutral reviews, so the hotel can
            allocate three staff members to each category for further review and
            action.
          </Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            Requirements
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <Typography component="li">
              1. Dashboard Overview:
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li">
                  a. A dashboard should display the total number of reviews, as
                  well as the breakdown of positive, negative, and neutral
                  reviews.
                </Typography>
              </Box>
            </Typography>
            <Typography
              component="li"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              2. Categorized Pages:
              <Box component="ol" sx={{ pl: 2 }}>
                a. There should be three separate pages:
                <Typography component="li" sx={{ pl: 2 }}>
                  1. Positive Reviews
                </Typography>
                <Typography component="li" sx={{ pl: 2 }}>
                  2. Negative Reviews
                </Typography>
                <Typography component="li" sx={{ pl: 2 }}>
                  3. Neutral Reviews
                </Typography>
              </Box>
              <Box component="ol" sx={{ pl: 2 }}>
                b. Reviews should automatically be placed in the respective
                category based on sentiment.
              </Box>
            </Typography>
            <Typography component="li" style={{ marginBottom: "20px" }}>
              3. Review Details:
              <Box component="ol" sx={{ pl: 2 }}>
                a. Each review should display the following information:
                <Typography component="li" sx={{ pl: 2 }}>
                  1. User’s name
                </Typography>
                <Typography component="li" sx={{ pl: 2 }}>
                  2. Time of submission
                </Typography>
                <Typography component="li" sx={{ pl: 2 }}>
                  3. Sender’s email
                </Typography>
                <Typography component="li" sx={{ pl: 2 }}>
                  4. Content of the review
                </Typography>
              </Box>
            </Typography>
            <Typography component="li">
              4. Review Management:
              <Box component="ol" sx={{ pl: 2 }}>
                a. Each review should have a Delete button that allows the
                review to be removed from the page.
              </Box>
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Paper sx={{ padding: "30px" }}>
            <Typography variant="h6" style={{ marginBottom: "20px" }}>
              Given Assets
            </Typography>
            <Typography>
              1. JSON Data: You have been provided with a JSON file containing
              all the company’s reviews.
            </Typography>
            <Typography>
              2. Responsive Layouts The layout design is provided for mobile,
              tablet, and desktop views.
            </Typography>
            <Typography>
              3. Design Assets: Color schemes and font styles are included to
              maintain brand consistency.
            </Typography>
            <Typography>
              4. Figma Files: Figma design files are provided to guide the
              visual structure and user interface.
            </Typography>
            <ZipFiles />
          </Paper>
          <Paper sx={{ padding: "30px", marginTop: "30px" }}>
            <Typography variant="h6" style={{ marginBottom: "20px" }}>
              Optional tasks
            </Typography>
            <Typography>
              1. Store each review in a database so you can retrieve and sort
              them easily when displaying.
            </Typography>
            <Typography>
              2 Add a reply button next to the delete button, allowing you to
              send a message back to the reviewer.
            </Typography>
            <Typography>
              3. Create a “Give Review” page where users can write and submit
              their reviews. Once submitted, the data is saved to the database.
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Link href="https://forms.gle/QaZYq2QPnwWUHjXC6">
        <Button variant="contained" style={{ marginTop: "20px" }}>
          Start next project
        </Button>
      </Link>
    </Container>
  );
}
