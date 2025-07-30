# Physics Teaching Feedback Form - ieeja.com

A step-by-step feedback form for collecting Grade 10 Physics teaching evaluations, built to handle 200+ submissions per month using Vercel Postgres.

## Features

- **Step-by-step interface** with progress indicator (11 steps total)
- **Targeted questions** for Physics teaching effectiveness
- **Rating scales** for understanding, speed, repetition, flexibility, and comfort
- **Open-ended feedback** for detailed insights
- **Vercel Postgres storage** for reliable data persistence
- **Admin dashboard** for viewing and analyzing submissions
- **Responsive design** for mobile and desktop
- **Modern glassmorphism UI** with gradient backgrounds

## Quick Setup

### 1. Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and sign in
3. Import your GitHub repository
4. Deploy with default settings

### 2. Set up Vercel Postgres

1. In your Vercel project dashboard, go to "Storage"
2. Click "Create Database" → "Postgres"
3. Choose a database name (e.g., "feedback-db")
4. Click "Create"
5. The database will be automatically connected to your project

### 3. Connect Custom Domain (ieeja.com)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add "ieeja.com" as custom domain
4. Copy the DNS records provided by Vercel
5. In GoDaddy DNS settings, update:
   - A record: `@` → Vercel IP
   - CNAME record: `www` → your-project.vercel.app

## Usage

### Student Form
- Visit your live URL (e.g., `https://your-project.vercel.app`)
- Complete the 11-step feedback form
- Submit anonymously or with name

### Admin Dashboard
- Visit `https://your-project.vercel.app/admin.html`
- View all submissions with summary statistics
- See detailed feedback and ratings

## Database Schema

Submissions are stored in PostgreSQL with this structure:

```sql
CREATE TABLE feedback_submissions (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255),
    subject VARCHAR(50) DEFAULT 'Physics',
    grade VARCHAR(10) DEFAULT '10',
    understanding_rating INTEGER NOT NULL,
    speed_rating INTEGER NOT NULL,
    repetition_rating INTEGER NOT NULL,
    flexibility_rating INTEGER NOT NULL,
    comfort_rating INTEGER NOT NULL,
    what_like TEXT,
    what_helps TEXT,
    what_confuses TEXT,
    improvements TEXT,
    additional_comments TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

- `POST /api/submit-feedback` - Submit new feedback
- `GET /api/view-submissions` - View all submissions with stats

## Project Structure

```
/
├── index.html          # Main feedback form
├── admin.html          # Admin dashboard
├── styles.css          # Styling for both pages
├── script.js           # Frontend JavaScript
├── package.json        # Dependencies
├── api/
│   ├── submit-feedback.js    # API to submit feedback
│   └── view-submissions.js   # API to view submissions
└── README.md
```

## Form Questions

**Step-by-step questions designed for your teaching style:**

1. **Name** (optional)
2. **Understanding** - "Do you understand when I explain things?"
3. **Speed** - "Is my teaching speed okay for you?"
4. **Repetition** - "When I repeat things, does it help you or confuse you?"
5. **Flexibility** - "Do you like how I teach without always following the textbook?"
6. **Comfort** - "Do you feel comfortable asking questions in my class?"
7. **What you like** - Open feedback on positive aspects
8. **What helps** - Learning preferences
9. **What confuses** - Problem areas
10. **Improvements** - Suggestions
11. **Additional comments** - Any other feedback

## Cost

- **Vercel Postgres**: Free tier includes 60 hours compute time/month
- **Vercel Hosting**: Free tier includes unlimited static deployments
- **Total monthly cost**: $0 for your expected volume (200+ submissions)

## Security & Production

- Form validation prevents incomplete submissions
- Database auto-creates tables on first use
- No authentication required for student submissions
- Admin dashboard accessible via direct URL