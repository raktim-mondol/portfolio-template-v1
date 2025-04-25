# Academic Portfolio Template

A modern, responsive academic portfolio website template built with React, TypeScript, and Tailwind CSS. Features a beautiful neural network animation background and smooth animations throughout the interface.

![Portfolio Preview](https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🎨 Modern, responsive design with fluid animations
- 🧠 Interactive neural network background animation
- 📱 Mobile-friendly and accessible
- 🌙 Smooth scrolling and transitions
- 🎯 Sections for Research, Projects, Publications, Teaching, and Contact
- 🔍 Publication search and filtering
- 📊 Research metrics visualization
- 🎬 Beautiful hover effects and micro-interactions
- 🛠️ Built with modern technologies

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-template-v1.git
cd portfolio-template-v1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── data/               # Data and content
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and animations
```

## Customization

### Profile Data

Edit `src/data/profileData.ts` to update:
- Personal information
- Research projects
- Publications
- Courses
- Presentations

### Styling

- Global styles are in `src/index.css`
- Tailwind configuration in `tailwind.config.js`
- Component-specific styles within component files

### Neural Animation

Customize the neural network background animation in `src/utils/NeuralAnimation.tsx`:
- Number of neurons
- Colors
- Animation speed
- Interaction sensitivity

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- Neural network animation inspired by creative coding communities
- Profile images from [Pexels](https://www.pexels.com/)
- Icons from [Lucide](https://lucide.dev/)

## Contact

Create an issue or submit a pull request for any questions or suggestions.