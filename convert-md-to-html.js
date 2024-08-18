const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownItMermaid = require('markdown-it-mermaid').default;

// Initialize markdown-it with the mermaid plugin
const md = markdownIt({
  html: true, // Enable HTML tags in the source
  linkify: true, // Automatically convert URLs into clickable links
  typographer: true // Enable some language-specific replacements
}).use(markdownItMermaid);

// Read the Markdown file
const markdown = fs.readFileSync('cool-root-doc.md', 'utf8');

// Convert it to HTML
const result = md.render(markdown);

// Write the HTML output to a file
fs.writeFileSync('cool-root-doc.html', result);

console.log('Markdown with Mermaid code converted to HTML successfully.');
