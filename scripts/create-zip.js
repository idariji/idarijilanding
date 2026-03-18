const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

const version = process.argv[2] || 'latest'
const outputFile = path.resolve(__dirname, `../idariji-${version}.zip`)
const sourceDir = path.resolve(__dirname, '../out')

if (!fs.existsSync(sourceDir)) {
  console.error('ERROR: out/ folder not found. Run npm run build first.')
  process.exit(1)
}

const output = fs.createWriteStream(outputFile)
const archive = archiver('zip', { zlib: { level: 9 } })

output.on('close', () => {
  const mb = (archive.pointer() / 1024 / 1024).toFixed(2)
  console.log(`\n✓ Created: idariji-${version}.zip (${mb} MB)`)
  console.log(`  Location: ${outputFile}`)
})

archive.on('warning', (err) => {
  if (err.code !== 'ENOENT') throw err
})

archive.on('error', (err) => {
  throw err
})

archive.pipe(output)
// Add all files from out/ to the root of the zip (Unix-compatible forward-slash paths)
archive.directory(sourceDir + '/', false)
archive.finalize()

console.log(`Building idariji-${version}.zip from out/ folder...`)
