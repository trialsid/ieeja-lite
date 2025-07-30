import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all submission IDs
    const submissionIds = await kv.lrange('all_submissions', 0, -1);
    
    // Get all submission data
    const submissions = [];
    for (const id of submissionIds) {
      const submission = await kv.get(id);
      if (submission) {
        // Format for easy viewing
        const formattedSubmission = {
          id: submission.id,
          studentName: submission.studentName,
          subject: submission.subject,
          grade: submission.grade,
          ratings: {
            understanding: submission.understandingRating,
            speed: submission.speedRating,
            repetition: submission.repetitionRating,
            flexibility: submission.flexibilityRating,
            comfort: submission.comfortRating
          },
          feedback: {
            whatLike: submission.whatLike,
            whatHelps: submission.whatHelps,
            whatConfuses: submission.whatConfuses,
            improvements: submission.improvements,
            additionalComments: submission.additionalComments
          },
          submittedAt: submission.submittedAt
        };
        submissions.push(formattedSubmission);
      }
    }

    // Sort by submission date (newest first)
    submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

    // Calculate summary statistics
    const stats = {
      total_submissions: submissions.length,
      avg_understanding: 0,
      avg_speed: 0,
      avg_repetition: 0,
      avg_flexibility: 0,
      avg_comfort: 0
    };

    if (submissions.length > 0) {
      stats.avg_understanding = (submissions.reduce((sum, s) => sum + s.ratings.understanding, 0) / submissions.length).toFixed(1);
      stats.avg_speed = (submissions.reduce((sum, s) => sum + s.ratings.speed, 0) / submissions.length).toFixed(1);
      stats.avg_repetition = (submissions.reduce((sum, s) => sum + s.ratings.repetition, 0) / submissions.length).toFixed(1);
      stats.avg_flexibility = (submissions.reduce((sum, s) => sum + s.ratings.flexibility, 0) / submissions.length).toFixed(1);
      stats.avg_comfort = (submissions.reduce((sum, s) => sum + s.ratings.comfort, 0) / submissions.length).toFixed(1);
    }

    res.status(200).json({ 
      success: true,
      submissions,
      stats,
      total: submissions.length
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to retrieve submissions',
      details: error.message 
    });
  }
}