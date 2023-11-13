# Matt Kharrl's Personal Website

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=white)![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white)![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=flat-square&logo=jest&logoColor=white)![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat-square&logo=testing-library&logoColor=white)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat-square&logo=yarn&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=flat-square&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=flat-square&logo=babel&logoColor=black)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white)

![website opengraph image](/src/images/github-image.png)

This is the code project behind my [personal website and professional portfolio](https://matt.kharrl.com/).

## Technology

The core technologies used in this project are:

| Category                 | Technology                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Programming Language** | - [TypeScript](https://www.typescriptlang.org/)                                                                                                             |
| **Frontend Libraries**   | - [React](https://react.dev/)<br>- [Tailwind CSS](https://tailwindcss.com/)<br>- [MDX](https://mdxjs.com/)                                                  |
| **Web Frameworks**       | - [Next.js](https://nextjs.org/)<br>- [Node.js](https://nodejs.org/en)                                                                                      |
| **Developer Experience** | - [Storybook](https://storybook.js.org/)<br>- [ESLint](https://eslint.org/)<br>- [Prettier](https://prettier.io/)<br>- [NVM](https://github.com/nvm-sh/nvm) |
| **Test Libraries**       | - [Jest](https://jestjs.io/)<br>- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)                                    |
| **Build Tools**          | - [Yarn](https://yarnpkg.com/)<br>- [Webpack](https://webpack.js.org/)<br>- [Babel](https://babeljs.io/)                                                    |
| **CI/CD**                | - [GitHub Actions](https://github.com/features/actions)                                                                                                     |
| **Hosting**              | - [Vercel](https://vercel.com/home)                                                                                                                         |

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

Stories are detected and rendered in the UI when they exist within a standard Storybook `<filename>.stories.<filetype>` file.

## Testing

This application uses Jest and React Testing Library for unit tests and enforces code coverage requirements.

Jest tests are detected and executed when they exist within a standard Jest `/__tests__/` directory.

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
