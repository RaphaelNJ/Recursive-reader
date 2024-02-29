const fs = require('fs-extra');
const path = require('path');

async function countLinesAndChars(dir) {
  let totalLines = 0;
  let totalChars = 0;

  async function processFile(file) {
    const content = await fs.readFile(file, 'utf-8');
    const lines = content.split('\n');
    const numLines = lines.length;
    const numChars = content.length;

    totalLines += numLines;
    totalChars += numChars;
  }

  async function processDirectory(directory) {
    const entries = await fs.readdir(directory);
    for (const entry of entries) {
      const fullPath = path.join(directory, entry);
      const stats = await fs.lstat(fullPath);

      if (stats.isFile()) {
        await processFile(fullPath);
      } else if (stats.isDirectory()) {
        await processDirectory(fullPath);
      }
    }
  }

  await processDirectory(dir);

  return { totalLines, totalChars };
}

(async () => {
  if (process.argv.length < 3) {
    console.error('Usage: node countLinesAndChars.js <folderPath>');
    process.exit(1);
  }

  const folderPath = process.argv[2];

  try {
    const start = Date.now();
    const { totalLines, totalChars } = await countLinesAndChars(folderPath);
    console.log(`Total lines: ${totalLines}`);
    console.log(`Total characters: ${totalChars}`);
    console.log(`Time taken : ${(Date.now()-start) * 0.001} seconds`)
  } catch (error) {
    console.error('Error:', error);
  }
})();