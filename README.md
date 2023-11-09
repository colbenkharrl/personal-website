# Matt Kharrl's Personal Website

![website opengraph image](/src/images/github-image.png)

This is the code project behind my [personal website and professional portfolio](https://matt.kharrl.com/).

## Technology

The core technologies used in this project are:

- TypeScript
- React
- Next.js
- Node.js
- Tailwind CSS
- MDX
- Jest
- GitHub Actions
- Vercel

**Note:** This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Local Development

Run the development server:

```bash
$ yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Source code lives within `src/*`. The page auto-updates as you edit and save files.

## Testing

This application uses Jest for unit tests.

During development, you can run all tests in a live window which watches for changes using:

```bash
$ yarn test
```

CI actions use the following script instead, which enforces code coverage and exits upon completion.

```bash
$ yarn test:ci
```

## Deploy on Vercel

This website is deployed as a Next.js application using [Vercel](https://nextjs.org/docs/deployment).
