# Teaching Feedback Form - ieeja.com

A simple feedback form for collecting teaching evaluations, built to handle 200+ submissions per month using Firebase Firestore.

## Features

- Text inputs for student name, subject, and teacher name
- Rating scales for overall teaching, clarity, and engagement
- Open-ended text areas for detailed feedback
- Real-time data storage with Firebase Firestore  
- Responsive design for mobile and desktop
- Success confirmation after submission

## Setup Instructions

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name (e.g., "ieeja-teaching-feedback")
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### 3. Get Firebase Config

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Web" icon (</>) to add a web app
4. Enter app nickname (e.g., "feedback-form")
5. Click "Register app"
6. Copy the `firebaseConfig` object

### 4. Update Configuration

1. Open `firebase-config.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
```

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Deploy with default settings
5. Your form will be live at `your-project.vercel.app`

### 6. Connect Custom Domain (ieeja.com)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add "ieeja.com" as custom domain
4. Copy the DNS records provided by Vercel
5. In GoDaddy DNS settings, update:
   - A record: `@` → Vercel IP
   - CNAME record: `www` → your-project.vercel.app

## Data Structure

Feedback submissions are stored in Firestore with this structure:

```javascript
{
    studentName: "Student Name" || "Anonymous",
    subject: "Mathematics",
    teacherName: "Teacher Name",
    overallRating: 5,
    clarityRating: 4,
    engagementRating: 5,
    whatWorked: "Clear explanations...",
    improvements: "More examples would help...",
    additionalComments: "Great class overall!",
    timestamp: Firebase serverTimestamp,
    submittedAt: "2024-01-15T10:30:00.000Z"
}
```

## Viewing Submissions

1. Go to Firebase Console
2. Navigate to "Firestore Database"
3. Browse the "teachingFeedback" collection
4. View individual submissions and export data as needed

## Cost

- Firebase Firestore: Free tier includes 50K reads + 20K writes per day
- Vercel: Free tier includes unlimited static deployments
- Total monthly cost: $0 for your expected volume

## Security

The current setup uses test mode for development. For production:

1. Update Firestore security rules
2. Consider adding form validation
3. Implement rate limiting if needed