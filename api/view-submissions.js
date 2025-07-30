import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all feedback submissions
    const result = await sql`
      SELECT 
        id,
        student_name,
        subject,
        grade,
        understanding_rating,
        speed_rating,
        repetition_rating,
        flexibility_rating,
        comfort_rating,
        what_like,
        what_helps,
        what_confuses,
        improvements,
        additional_comments,
        submitted_at
      FROM feedback_submissions 
      ORDER BY submitted_at DESC
    `;

    // Format for easy viewing
    const submissions = result.rows.map(row => ({
      id: row.id,
      studentName: row.student_name,
      subject: row.subject,
      grade: row.grade,
      ratings: {
        understanding: row.understanding_rating,
        speed: row.speed_rating,
        repetition: row.repetition_rating,
        flexibility: row.flexibility_rating,
        comfort: row.comfort_rating
      },
      feedback: {
        whatLike: row.what_like,
        whatHelps: row.what_helps,
        whatConfuses: row.what_confuses,
        improvements: row.improvements,
        additionalComments: row.additional_comments
      },
      submittedAt: row.submitted_at
    }));

    // Get summary statistics
    const stats = await sql`
      SELECT 
        COUNT(*) as total_submissions,
        AVG(understanding_rating) as avg_understanding,
        AVG(speed_rating) as avg_speed,
        AVG(repetition_rating) as avg_repetition,
        AVG(flexibility_rating) as avg_flexibility,
        AVG(comfort_rating) as avg_comfort
      FROM feedback_submissions
    `;

    res.status(200).json({ 
      success: true,
      submissions,
      stats: stats.rows[0],
      total: submissions.length
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to retrieve submissions' 
    });
  }
}