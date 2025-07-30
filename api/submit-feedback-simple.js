// Simple version that just logs submissions (for testing)
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

    // Create feedback data object
    const feedbackData = {
      id: `feedback_${Date.now()}`,
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

    // Log the submission (for now)
    console.log('📝 New Feedback Submission:', JSON.stringify(feedbackData, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully (logged to console)',
      id: feedbackData.id
    });

  } catch (error) {
    console.error('Error processing feedback:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit feedback',
      details: error.message 
    });
  }
}