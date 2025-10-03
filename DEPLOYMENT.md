# Deployment Guide

## Frontend Deployment (Netlify)

### Step 1: Prepare Your Frontend

1. **Build your project locally** to ensure everything works:

   ```bash
   npm run build
   ```

2. **Create environment variables** in Netlify:
   - Go to your Netlify site dashboard
   - Navigate to Site settings > Environment variables
   - Add: `VITE_API_URL` = `https://your-backend-url.com/api`

### Step 2: Deploy to Netlify

#### Option A: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Set build command: `npm run build`
5. Set publish directory: `dist`

#### Option B: Manual Deploy

1. Run `npm run build` locally
2. Drag and drop the `dist` folder to Netlify

### Step 3: Configure Environment Variables in Netlify

- `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.herokuapp.com/api`)

## Backend Deployment

### Option 1: Railway (Recommended)

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the `server` folder as the root directory
4. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLIENT_URL`: Your Netlify frontend URL
   - `JWT_SECRET`: A secure random string
   - `PORT`: Will be automatically set by Railway

### Option 2: Render

1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set root directory to `server`
5. Add environment variables (same as Railway)

### Option 3: Heroku

1. Install Heroku CLI
2. Create a new Heroku app
3. Set buildpacks:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```
4. Add environment variables via Heroku dashboard
5. Deploy:
   ```bash
   git subtree push --prefix server heroku main
   ```

## Environment Variables Setup

### Frontend (.env.production)

```env
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env)

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
CLIENT_URL=https://your-netlify-app.netlify.app
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

## Post-Deployment Steps

1. **Update Frontend API URL**: After deploying your backend, update the `VITE_API_URL` environment variable in Netlify with your actual backend URL.

2. **Test the Connection**: Verify that your frontend can communicate with your backend by testing the login/registration functionality.

3. **Setup Admin User**: Run the admin setup script on your backend if needed.

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure `CLIENT_URL` in your backend matches your Netlify URL exactly
2. **Build Failures**: Check that all dependencies are in `package.json`
3. **Environment Variables**: Ensure all required environment variables are set in both frontend and backend

### Useful Commands:

```bash
# Test build locally
npm run build

# Preview production build
npm run preview

# Check environment variables
echo $VITE_API_URL
```

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique JWT secrets
- Enable HTTPS for all URLs
- Regularly update dependencies
