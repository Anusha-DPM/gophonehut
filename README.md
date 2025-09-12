# GoPhoneHut

A Next.js website for GoPhoneHut phone repair services.

## Features

- **Top-Header Component**: A responsive header with contact information and navigation links
- **Tailwind CSS**: Modern styling with custom color scheme
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **TypeScript**: Type-safe development

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gophonehut/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── TopHeader.tsx
├── Public/
│   ├── hero-background.png
│   ├── hero-phone.png
│   └── website-logo.png
└── package.json
```

## Top-Header Component

The Top-Header component includes:

- **Left side**: Phone number (408-224-2869) and hours information with icons
- **Right side**: Navigation links (Quick Repair, Locations, Track Order)
- **Styling**: Matches the exact design specifications with Lato font family
- **Responsive**: Stacks vertically on mobile devices

## Custom Colors

- Background: `#f2f2f2` (custom-gray)
- Link color: `#007dd9` (custom-blue)
- Hover color: `#71af43` (custom-green)

## Fonts

- **Lato**: Used for all text content
- **Sansation**: Available for future use (configured in Tailwind)
