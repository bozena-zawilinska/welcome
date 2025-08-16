const fs = require('fs')
const svg2img = require('svg2img')

// Read the SVG file
const svgContent = fs.readFileSync('./public/favicon.svg', 'utf8')

// Convert SVG to PNG with different sizes
const sizes = [16, 32, 48, 64, 128, 256]

sizes.forEach((size) => {
  svg2img(svgContent, { width: size, height: size }, function (error, buffer) {
    if (error) {
      console.error(`Error generating ${size}x${size} favicon:`, error)
      return
    }

    fs.writeFileSync(`./public/favicon-${size}x${size}.png`, buffer)
    console.log(`Created favicon-${size}x${size}.png`)
  })
})

// Main favicon.ico will be 32x32
svg2img(svgContent, { width: 32, height: 32 }, function (error, buffer) {
  if (error) {
    console.error('Error generating favicon.ico:', error)
    return
  }

  fs.writeFileSync('./public/favicon.ico', buffer)
  console.log('Created favicon.ico')
})
