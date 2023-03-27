const fs = require('fs');
const stats = require('docs/webpack-stats.json');

const md = `
# Webpack Build Stats

## Assets by Status
${JSON.stringify(stats.assetsByStatus, null, 2)}

## Assets by Path
${JSON.stringify(stats.assetsByPath, null, 2)}

## Orphan Modules
${JSON.stringify(stats.orphanModules, null, 2)}

## Runtime Modules
${JSON.stringify(stats.runtimeModules, null, 2)}

## Cacheable Modules
${JSON.stringify(stats.cacheableModules, null, 2)}

## JavaScript Modules
${JSON.stringify(stats.javascriptModules, null, 2)}
`;

fs.writeFileSync('./webpack-result.md', md);
