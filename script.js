document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    let currentStep = 1;
    const totalSteps = 11;

    // Update progress bar
    function updateProgress() {
        const percentage = (currentStep / totalSteps) * 100;
        progressFill.style.width = percentage + '%';
        progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
    }

    // Show specific step
    function showStep(step) {
        // Hide all steps
        document.querySelectorAll('.step').forEach(s => {
            s.classList.remove('active');
        });
        
        // Show current step
        document.querySelector(`[data-step="${step}"]`).classList.add('active');
        
        // Update button visibility
        prevBtn.style.display = step === 1 ? 'none' : 'inline-block';
        nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
        submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';
        
        updateProgress();
    }

    // Validate current step
    function validateCurrentStep() {
        const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
        const requiredInputs = currentStepElement.querySelectorAll('input[type="radio"]:required');
        
        if (requiredInputs.length > 0) {
            const radioName = requiredInputs[0].name;
            const isChecked = currentStepElement.querySelector(`input[name="${radioName}"]:checked`);
            return isChecked !== null;
        }
        
        return true; // Text inputs and optional fields are always valid
    }

    // Next button click
    nextBtn.addEventListener('click', function() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        } else {
            alert('Please select an option before continuing.');
        }
    });

    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            // Collect form data
            const formData = new FormData(form);
            const feedbackData = {
                studentName: formData.get('studentName') || 'Anonymous',
                understandingRating: parseInt(formData.get('understandingRating')),
                speedRating: parseInt(formData.get('speedRating')),
                repetitionRating: parseInt(formData.get('repetitionRating')),
                flexibilityRating: parseInt(formData.get('flexibilityRating')),
                comfortRating: parseInt(formData.get('comfortRating')),
                whatLike: formData.get('whatLike') || '',
                whatHelps: formData.get('whatHelps') || '',
                whatConfuses: formData.get('whatConfuses') || '',
                improvements: formData.get('improvements') || '',
                additionalComments: formData.get('additionalComments') || ''
            };

            // Submit to Vercel API
            const response = await fetch('/api/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData)
            });

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Failed to submit feedback');
            }

            console.log('Feedback submitted with ID:', result.id);

            // Show success message
            form.style.display = 'none';
            document.querySelector('.progress-bar').style.display = 'none';
            successMessage.style.display = 'block';

            // Reset form after 5 seconds
            setTimeout(() => {
                form.reset();
                currentStep = 1;
                showStep(currentStep);
                form.style.display = 'block';
                document.querySelector('.progress-bar').style.display = 'block';
                successMessage.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Feedback';
            }, 5000);

        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting feedback. Please try again.');
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Feedback';
        }
    });

    // Initialize first step
    showStep(1);
});