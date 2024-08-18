const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownItMermaid = require('markdown-it-mermaid').default;

// Initialize markdown-it with the mermaid plugin
const md = markdownIt().use(markdownItMermaid);

// Read the Markdown file
const markdown = fs.readFileSync('cool-root-doc.md', 'utf8');

// Convert it to HTML
const result = md.render(markdown);

// Write the HTML output to a file
fs.writeFileSync('cool-root-doc.html', result);

console.log('Markdown converted to HTML successfully.');
