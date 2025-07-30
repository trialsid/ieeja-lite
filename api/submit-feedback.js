import { sql } from '@vercel/postgres';

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

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS feedback_submissions (
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
      )
    `;

    // Insert the feedback
    const result = await sql`
      INSERT INTO feedback_submissions (
        student_name,
        understanding_rating,
        speed_rating,
        repetition_rating,
        flexibility_rating,
        comfort_rating,
        what_like,
        what_helps,
        what_confuses,
        improvements,
        additional_comments
      ) VALUES (
        ${studentName || 'Anonymous'},
        ${understandingRating},
        ${speedRating},
        ${repetitionRating},
        ${flexibilityRating},
        ${comfortRating},
        ${whatLike || ''},
        ${whatHelps || ''},
        ${whatConfuses || ''},
        ${improvements || ''},
        ${additionalComments || ''}
      ) RETURNING id
    `;

    res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      id: result.rows[0].id 
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit feedback' 
    });
  }
}