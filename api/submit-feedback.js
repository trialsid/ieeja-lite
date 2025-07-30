import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from Vercel environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

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

    // Insert the feedback into Supabase
    const { data, error } = await supabase
      .from('feedback_submissions')
      .insert([
        {
          student_name: studentName || 'Anonymous',
          subject: 'Physics',
          grade: '10',
          understanding_rating: understandingRating,
          speed_rating: speedRating,
          repetition_rating: repetitionRating,
          flexibility_rating: flexibilityRating,
          comfort_rating: comfortRating,
          what_like: whatLike || '',
          what_helps: whatHelps || '',
          what_confuses: whatConfuses || '',
          improvements: improvements || '',
          additional_comments: additionalComments || ''
        }
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      id: data.id
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