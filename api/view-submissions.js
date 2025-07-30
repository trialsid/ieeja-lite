import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from Vercel environment variables
// Try different possible variable names that Vercel might use
const supabaseUrl = process.env.SUPABASE_URL || 
                   process.env.POSTGRES_URL_NON_POOLING || 
                   process.env.POSTGRES_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || 
                   process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Debug: log available environment variables (remove this after debugging)
    console.log('Available env vars:', Object.keys(process.env).filter(key => 
      key.includes('SUPABASE') || key.includes('POSTGRES') || key.includes('DATABASE')
    ));
    console.log('supabaseUrl:', supabaseUrl ? 'SET' : 'NOT SET');
    console.log('supabaseKey:', supabaseKey ? 'SET' : 'NOT SET');

    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseKey) {
      throw new Error(`Supabase not configured. Found URL: ${supabaseUrl ? 'YES' : 'NO'}, Key: ${supabaseKey ? 'YES' : 'NO'}. Available vars: ${Object.keys(process.env).filter(key => key.includes('SUPABASE') || key.includes('POSTGRES')).join(', ')}`);
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get all feedback submissions
    const { data: submissions, error } = await supabase
      .from('feedback_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    // Format for easy viewing
    const formattedSubmissions = submissions.map(row => ({
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
      submittedAt: row.created_at
    }));

    // Calculate summary statistics
    const stats = {
      total_submissions: formattedSubmissions.length,
      avg_understanding: 0,
      avg_speed: 0,
      avg_repetition: 0,
      avg_flexibility: 0,
      avg_comfort: 0
    };

    if (formattedSubmissions.length > 0) {
      stats.avg_understanding = (formattedSubmissions.reduce((sum, s) => sum + s.ratings.understanding, 0) / formattedSubmissions.length).toFixed(1);
      stats.avg_speed = (formattedSubmissions.reduce((sum, s) => sum + s.ratings.speed, 0) / formattedSubmissions.length).toFixed(1);
      stats.avg_repetition = (formattedSubmissions.reduce((sum, s) => sum + s.ratings.repetition, 0) / formattedSubmissions.length).toFixed(1);
      stats.avg_flexibility = (formattedSubmissions.reduce((sum, s) => sum + s.ratings.flexibility, 0) / formattedSubmissions.length).toFixed(1);
      stats.avg_comfort = (formattedSubmissions.reduce((sum, s) => sum + s.ratings.comfort, 0) / formattedSubmissions.length).toFixed(1);
    }

    res.status(200).json({ 
      success: true,
      submissions: formattedSubmissions,
      stats,
      total: formattedSubmissions.length
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