import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      studentName,
      understandingRating,
      speedRating,
      repetitionRating,
      flexibilityRating,
      comfortRating,
      whatLike,
      whatHelps,
      whatConfuses,
      improvements,
      additionalComments
    } = req.body;

    // Generate unique ID for this submission
    const submissionId = `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create feedback data object
    const feedbackData = {
      id: submissionId,
      studentName: studentName || 'Anonymous',
      subject: 'Physics',
      grade: '10',
      understandingRating,
      speedRating,
      repetitionRating,
      flexibilityRating,
      comfortRating,
      whatLike: whatLike || '',
      whatHelps: whatHelps || '',
      whatConfuses: whatConfuses || '',
      improvements: improvements || '',
      additionalComments: additionalComments || '',
      submittedAt: new Date().toISOString()
    };

    // Store the feedback
    await kv.set(submissionId, feedbackData);
    
    // Add to list of all submissions
    await kv.lpush('all_submissions', submissionId);

    res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      id: submissionId
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit feedback',
      details: error.message 
    });
  }
}