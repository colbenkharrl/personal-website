import path from 'path';
import fs from 'fs';

const COMPONENTS_DIR = path.join(__dirname, `../src/components/`);
const FILE_TYPES = ['ts', 'tsx'];

// fetch a list of all top-level component files in the component directory
const componentFileNames = fs
  .readdirSync(COMPONENTS_DIR, {
    encoding: 'utf-8',
  })
  // filter out files that doen't match the convention '<Component>.<ts|tsx>'
  .filter((contentName) => {
    const segments = contentName.split('.');
    return segments.length === 2 && FILE_TYPES.includes(segments[1]);
  });

// create an array of promises to handle all files asynchronously
const directoryPromises = componentFileNames.map((file) => {
  return (
    (async function () {
      const [componentName, fileType] = file.split('.');

      // we're moving everything to live under 'src/components/<Component>/*`
      const componentDirectoryPath = path.join(COMPONENTS_DIR, componentName);

      await fs.promises.mkdir(componentDirectoryPath);

      // we're renaming 'src/components/<Component>.tsx to src/components/<Component>/index.tsx`
      const oldFilePath = path.join(COMPONENTS_DIR, file);
      const newFilePath = path.join(
        componentDirectoryPath,
        `index.${fileType}`,
      );

      // we're setting up a component-specific test directory with Jest's '__tests__'
      // convention and files like '<Component>.test.tsx'
      const componentTestDirectoryPath = path.join(
        componentDirectoryPath,
        '__tests__',
      );
      const componentTestFile = path.join(
        componentTestDirectoryPath,
        `${componentName}.test.tsx`,
      );

      // perform and rename and test directory creation asychronously
      await Promise.all([
        fs.promises.rename(oldFilePath, newFilePath),
        fs.promises
          .mkdir(componentTestDirectoryPath)
          // once the test directory exists, give it an empty test file
          .then(() => fs.promises.writeFile(componentTestFile, '')),
      ]);

      // share the good news
      console.log(
        `Successfully created component directory for ${componentName}.`,
      );
    })()
      // throw any errors for a specific component
      .catch(console.error)
  );
});

Promise.all(directoryPromises).catch(console.error);
