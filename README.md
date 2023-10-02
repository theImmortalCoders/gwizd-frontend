# Gwizd - frontend
## Project for 2023 Hackyeah.
### Marcin Bator, Wiktor Mazur, Bogdan Bosak
#### Demo version: https://gwizd.online

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Overview
#### The backend of this app can be found on : https://github.com/Chopy4/gwizd-backend


The application is designed to allow the user to record their observations 
of animals in the city. You can choose one of 3 types of observations: 
ordinary observation, animal threat observation and missing pet observation. 
The location is downloaded from the device. If the threat option is selected,
a notification containing the exact location is sent to the e-mail address 
(currently the authors' private e-mail address) informing about the need 
for intervention by the appropriate services. In other cases, the observation
is saved on the user's account and the owners of the application also have 
access to it in order to keep statistics. The user receives achievements 
for his observations (functionality not available in the demo application, 
but available in the database), which encourages him to document his 
observations, while working to the benefit of the Voivodeship.


Each observation is recorded on the map available in the "Neighborhood" 
tab. Areas marked with circles do not reveal the exact location, allowing 
users to determine its approximate location, and the exact location is 
listed in the database. The tags disappear after an hour, except for those 
that required reporting to the services - they must be removed manually. 
The user can also track their observations in the "Profile" tab (upper 
right corner). In addition, there is a "Statistics" tab, where one 
demonstrative filtering is available to maintain statistics by Voivodeship.


To increase society's sensitivity to the presence of animals in the city, 
an information tab "Animals in the city" was created. Moreover, realizing 
that users will be more likely to use the application on their phone, 
the website is fully responsive and works well on small resolutions.
