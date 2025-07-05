# Matloob Ahmad Portfolio

This is my personal portfolio website built with Node.js, Express, and vanilla JavaScript.

## Features

- Responsive design
- Contact form with email functionality
- Project showcase
- Skills and experience sections

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Matloob333/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `env.example` to `.env`
   - Update the email credentials in `.env`

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

This project is configured for deployment on Render.com. The `render.yaml` file contains the deployment configuration.

### Environment Variables for Production

Set these environment variables in your Render dashboard:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password
- `NODE_ENV`: production

## Technologies Used

- Node.js
- Express.js
- Nodemailer
- HTML/CSS/JavaScript
- Bootstrap (for styling)

## License

ISC
