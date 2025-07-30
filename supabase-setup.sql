-- Create the feedback_submissions table in your Supabase database
-- Run this in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS feedback_submissions (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255),
    subject VARCHAR(50) DEFAULT 'Physics',
    grade VARCHAR(10) DEFAULT '10',
    understanding_rating INTEGER NOT NULL CHECK (understanding_rating >= 1 AND understanding_rating <= 5),
    speed_rating INTEGER NOT NULL CHECK (speed_rating >= 1 AND speed_rating <= 5),
    repetition_rating INTEGER NOT NULL CHECK (repetition_rating >= 1 AND repetition_rating <= 5),
    flexibility_rating INTEGER NOT NULL CHECK (flexibility_rating >= 1 AND flexibility_rating <= 5),
    comfort_rating INTEGER NOT NULL CHECK (comfort_rating >= 1 AND comfort_rating <= 5),
    what_like TEXT,
    what_helps TEXT,
    what_confuses TEXT,
    improvements TEXT,
    additional_comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index for faster queries
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback_submissions(created_at DESC);

-- Enable Row Level Security (RLS) but allow public access for form submissions
ALTER TABLE feedback_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT (for form submissions)
CREATE POLICY "Allow public insert" ON feedback_submissions
FOR INSERT TO anon
WITH CHECK (true);

-- Allow public SELECT (for viewing submissions via API)
CREATE POLICY "Allow public select" ON feedback_submissions
FOR SELECT TO anon
USING (true);