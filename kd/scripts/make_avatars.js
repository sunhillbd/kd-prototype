const sharp = require('sharp');
const fs = require('fs');

if (!fs.existsSync('public/case-studies')) {
  fs.mkdirSync('public/case-studies', { recursive: true });
}

const createAvatar = (name, bg, fg, filename) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  const svg = `<svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="36" fill="${bg}"/>
    <text x="36" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="600" fill="${fg}" text-anchor="middle">${initials}</text>
  </svg>`;
  return sharp(Buffer.from(svg)).png().toFile('public/case-studies/' + filename);
};

Promise.all([
  createAvatar('Marcus Vance', '#FDBA74', '#7C2D12', 'marcus.png'),
  createAvatar('Elena Rostova', '#86EFAC', '#064E3B', 'elena.png'),
  createAvatar('Julian Becker', '#C4B5FD', '#3730A3', 'julian.png')
]).then(() => console.log('Avatars generated successfully!'));
