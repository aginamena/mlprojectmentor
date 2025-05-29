export const readme = `
# 🌟 Machine Learning Project Mentor 🚀

## Welcome 🙌

Thank you for starting this exciting project! The **Machine Learning Project Mentor** aims to offer a beginner-friendly, project-based learning journey, especially for web developers familiar with **HTML, CSS, and JavaScript**. If you're ready to dive into real-world machine learning projects, you're in the right place!

By the end of this project, it will be yours to showcase! 🎉 You can add it to your portfolio, share it on LinkedIn, or even in our community for other developers to check out and give feedback. Let’s get started! 💻

![Project Preview](/images/dashboard.png)

## Project Overview 📝

The main objective is to build a solution that mirrors the [Figma design](https://www.figma.com/design/6elGKEjobPOScDFD48CPOl/MACHINE-LEARNING-PROJECT-MENTOR-PROJECTS?node-id=0-1&t=8VMuMLE51k0oFr2g-1) as closely as possible. We suggest reviewing the Figma design files first so you can plan your approach efficiently.

### Background 🌍

A local hotel receives tons of service reviews but doesn't have the staff to manually sort through them. Your task is to create a tool that **automatically categorizes reviews** based on sentiment—separating **positive**, **neutral** and **negative** reviews. This will allow the hotel to assign staff to follow up with each category. 🏨

### Project Requirements 📋

1. **Navigation Links 🧭**:

   - There are 4 navigation links:
   - The **Dashboard** link directs you to the dashboard page.
   - The **Positive**, **Neutral** anf **Negative** links take you to the review analysis page when clicked

2. **Dashboard page** 📊:

   - The dashboard page should display:
     - Total number of reviews
     - Breakdown of reviews by sentiment: **Positive**, **Neutral** and **Negative**

3. **Review analysis Page** 📑:

   - When any of the links (Positive, Negative, Neutral) are clicked, the displayed reviews on the review analysis page should filter by sentiment. For example, clicking the **Positive** link will show only positive reviews, and similarly for **Neutral** and **Negative** links.

4. **Review Details** 🖋️:

   - Each review should include the following details:
     - Full name of the reviewer
     - Time of submission
     - Email address
     - Content of the review
     - Profile picture of the reviewer

5. **Review Management** 🗑️:

   - Add a **Delete** button for each review to allow it to be removed from the page.

6. **Optional tasks** ✨:

   - Store each review in a database so you can retrieve and sort them easily when displaying.
   - Add a reply button next to the delete button, allowing you to send a message back to the sender of the review.
   - Create a “Give Review” page where users can write and submit their reviews. Once submitted, the data is saved to the database.

## How to Get Started 🚀

1. Before you begin, make sure you're familiar with sentiment models to classify text. If you need a refresher, check out the [sentiment models documentation on ml5.js](https://docs.ml5js.org/#/reference/sentiment). Once you're comfortable, come back and continue with the project. 💡

2. Take a look at the Figma design file or the images folder to understand the visual layout of your project. We recommend using the Figma file to replicate the styling (colors, font sizes, widths, heights, etc.).

3. You are given index.html that will contain the dashboard page and reviews.html that will contain the reviews. You will use sentiment model to display the right reviews on the review page based on the the link that was clicked

4. All your CSS styles can go in style.css. Alternatively, you can create two separate CSS files for the dashboard and reviews pages if needed.

5. The script.js and reviews.js will contain the javascript code you will write for the dashboard page and reviews page
   respectively.

6. The reviews.json file contains all the reviews the hotel has received, which will be used in your project.

## Hosting Your Solution 🌐

You can host your solution for free using **[GitHub Pages](https://pages.github.com/)**! It's a great way to share your frontend projects with the world. Follow the instructions on their website to learn how to deploy your site.

## Ways to Share Your Solution 📣

Congratulations on reaching the final step! 🎉 We'd love to see your work! If you completed the optional tasks, extra kudos to you! 🙌 You can share your solution by posting the live site link and the GitHub repository in our [Facebook group](https://www.facebook.com/share/g/14EYUGvxwNR/). Feel free to share any extra thoughts or feedback about your experience!

## Contact Us 💌

We’re always happy to hear from you! Feel free to reach out with any feedback, questions, or suggestions. You can email us at [aginamena5@gmail.com](mailto:aginamena5@gmail.com), or directly message **Mena Agina** on Facebook. He’s actively involved in the community and would love to know how we can improve our projects, websites, and more! ✨


`;
