# Matt Kharrl's Personal Website

![website opengraph image](/src/images/github-image.png)

This is the code project behind my [personal website and professional portfolio](https://matt.kharrl.com/).

## Technology

The core technologies used in this project are:

#### Programming Language

- [TypeScript](https://www.typescriptlang.org/)

#### Frontend Libraries

- [React](about:blank)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

#### Web Frameworks

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/en)

#### Developer Experience

- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [NVM](https://github.com/nvm-sh/nvm)

#### Test Libraries

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

#### CI/CD

- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com/home)

## Developing

There are two local servers available during development. Both support active reload for rapid iteration.

### Local Development Server

Run the local development server view the entire website:

```bash
$ yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Local Storybook Server

Run the local storybook server to view, develop, and test React components in isolation:

```bash
$ yarn storybook
```

Then, open [http://localhost:6006](http://localhost:6006) with your browser to utilize the Storybook UI.

## Testing

This application uses Jest for unit tests and enforces code coverage requirements.

During development, you can run all tests in a live window which watches for changes using:

```bash
$ yarn test
```

CI jobs use the following script instead, which enforces code coverage and exits upon completion.

```bash
$ yarn test:ci
```

**Note:** you can append more Jest arguments after any `yarn test` or `yarn test:ci` call.

## Deploying

This website is deployed as a Next.js application using [Vercel](https://nextjs.org/docs/deployment). The connection to this repository is automated through GitHub authentication.

1. Pull requests create a staging environment for testing and validation. These environments are automatically linked to the pull request.
2. Upon merge to `main`, a deployment automatically triggers in the production environment.

**Note:** Automatic rollbacks are triggerable in the Vercel UI.
