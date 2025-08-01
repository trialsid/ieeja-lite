// Language translations
const translations = {
    en: {
        headerTitle: "Physics Class Feedback",
        headerSubtitle: "Grade 10 - Help improve Physics teaching!",
        progressText: "Step {current} of {total}",
        step1Label: "Your Name (Optional - you can stay anonymous!)",
        step1Placeholder: "Enter your name or leave blank",
        step2Label: "Do you understand when the teacher explains things?",
        step3Label: "Is the teacher's speed okay for you?",
        step4Label: "When the teacher repeats things, does it help you or confuse you?",
        step5Label: "Do you like how the teacher teaches without always following the textbook?",
        step6Label: "Do you feel comfortable asking questions in class?",
        step7Label: "What do you like about the teacher's methods?",
        step7Placeholder: "What do you enjoy about how the teacher teaches Physics...",
        step8Label: "What helps you learn best in class?",
        step8Placeholder: "What makes learning easier for you...",
        step9Label: "What confuses you most about the teaching?",
        step9Placeholder: "What makes you confused...",
        step10Label: "How can the teacher improve for you?",
        step10Placeholder: "Any suggestions for improvement...",
        step11Label: "Any other thoughts?",
        step11Placeholder: "Any other thoughts, feelings, or suggestions...",
        ratings: {
            understanding: ["Hard to understand", "Rarely understand", "Sometimes understand", "Usually understand", "Always understand"],
            speed: ["Way too slow", "Too slow", "A bit slow", "Good speed", "Perfect speed"],
            repetition: ["Makes me more confused", "Often confusing", "Sometimes confusing", "Usually helps", "Really helps me"],
            flexibility: ["Confuses me", "Prefer textbook", "It's okay", "Like it", "Love it!"],
            comfort: ["Never comfortable", "Not really", "Sometimes", "Comfortable", "Very comfortable"]
        },
        nextBtn: "Next",
        prevBtn: "Previous", 
        submitBtn: "Submit Feedback",
        submittingBtn: "Submitting...",
        successTitle: "Thank you for your feedback!",
        successMessage: "Your response has been submitted successfully."
    },
    te: {
        headerTitle: "భౌతిక శాస్త్ర తరగతి అభిప్రాయం",
        headerSubtitle: "10వ తరగతి - భౌతిక శాస్త్ర బోధనను మెరుగుపరచడంలో సహాయపడండి!",
        progressText: "దశ {current} / {total}",
        step1Label: "మీ పేరు (వైకల్పికం - మీరు అనామకంగా ఉండవచ్చు!)",
        step1Placeholder: "మీ పేరును నమోదు చేయండి లేదా ఖాళీగా వదిలేయండి",
        step2Label: "గురువు వివరించినప్పుడు మీకు అర్థమవుతుందా?",
        step3Label: "గురువు వేగం మీకు సరిపోతుందా?",
        step4Label: "గురువు పునరావృతం చేసినప్పుడు, అది మీకు సహాయపడుతుందా లేక గందరగోళం కలిగిస్తుందా?",
        step5Label: "గురువు ఎల్లప్పుడూ పుస్తకాన్ని అనుసరించకుండా బోధించడం మీకు నచ్చుతుందా?",
        step6Label: "తరగతిలో ప్రశ్నలు అడగడంలో మీకు సౌకర్యంగా అనిపిస్తుందా?",
        step7Label: "గురువు పద్ధతుల గురించి మీకు ఏమి నచ్చుతుంది?",
        step7Placeholder: "గురువు భౌతిక శాస్త్రాన్ని ఎలా బోధిస్తారో మీకు ఏమి నచ్చుతుంది...",
        step8Label: "తరగతిలో మీకు ఏది నేర్చుకోవడంలో ఉత్తమంగా సహాయపడుతుంది?",
        step8Placeholder: "మీకు నేర్చుకోవడంలో ఏది సులభం చేస్తుంది...",
        step9Label: "బోధన గురించి మీకు ఎక్కువగా ఏది గందరగోళం కలిగిస్తుంది?",
        step9Placeholder: "మీకు ఏది గందరగోళం కలిగిస్తుంది...",
        step10Label: "గురువు మీ కోసం ఎలా మెరుగుపడవచ్చు?",
        step10Placeholder: "మెరుగుదల కోసం ఏవైనా సూచనలు...",
        step11Label: "ఇతర ఆలోచనలు ఏవైనా ఉన్నాయా?",
        step11Placeholder: "ఇతర ఆలోచనలు, భావనలు, లేదా సూచనలు...",
        ratings: {
            understanding: ["అర్థం కావడం కష్టం", "అరుదుగా అర్థమవుతుంది", "కొన్నిసార్లు అర్థమవుతుంది", "సాధారణంగా అర్థమవుతుంది", "ఎల్లప్పుడూ అర్థమవుతుంది"],
            speed: ["చాలా నెమ్మదిగా", "చాలా నెమ్మది", "కొంచెం నెమ్మది", "మంచి వేగం", "పరిపూర్ణ వేగం"],
            repetition: ["మరింత గందరగోళం కలిగిస్తుంది", "తరచుగా గందరగోళం", "కొన్నిసార్లు గందరగోళం", "సాధారణంగా సహాయపడుతుంది", "నిజంగా నాకు సహాయపడుతుంది"],
            flexibility: ["నాకు గందరగోళం", "పుస్తకం అనుసరించండి", "పర్వాలేదు", "నచ్చుతుంది", "చాలా నచ్చుతుంది!"],
            comfort: ["ఎప్పుడూ సౌకర్యంగా లేదు", "అంతగా లేదు", "కొన్నిసార్లు", "సౌకర్యంగా", "చాలా సౌకర్యంగా"]
        },
        nextBtn: "తదుపరి",
        prevBtn: "మునుపటి",
        submitBtn: "అభిప్రాయం పంపండి",
        submittingBtn: "పంపుతున్నాము...",
        successTitle: "మీ అభిప్రాయానికి ధన్యవాదాలు!",
        successMessage: "మీ ప్రతిస్పందన విజయవంతంగా పంపబడింది."
    },
    tenglish: {
        headerTitle: "Physics Class Feedback",
        headerSubtitle: "10th Class - Physics teaching ni improve cheyadaniki help cheyandi!",
        progressText: "Step {current} / {total}",
        step1Label: "Mee peru (Optional - meeru anonymous ga undavachu!)",
        step1Placeholder: "Mee peru enter cheyandi leda khaali ga vadilleyandi",
        step2Label: "Teacher explain chesnapudu meeku ardham avutundaa?",
        step3Label: "Teacher speed meeku saripotundaa?",
        step4Label: "Teacher repeat chesnapudu, adi meeku help chestundaa leka confusion create chestundaa?",
        step5Label: "Teacher epudu textbook follow cheykunda teach cheyadam meeku nachutundaa?",
        step6Label: "Class lo questions adagadamlo meeku comfortable ga anipistundaa?",
        step7Label: "Teacher methods gurinchi meeku emi nachutundi?",
        step7Placeholder: "Teacher Physics ni ela teach chestaro meeku emi nachutundi...",
        step8Label: "Class lo meeku edi nerchukovadamlo best ga help chestundi?",
        step8Placeholder: "Meeku nerchukovadamlo edi easy chestundi...",
        step9Label: "Teaching gurinchi meeku ekkuvaga edi confusion create chestundi?",
        step9Placeholder: "Meeku edi confusion create chestundi...",
        step10Label: "Teacher mee kosam ela improve avvachu?",
        step10Placeholder: "Improvement kosam evaina suggestions...",
        step11Label: "Inka evaina thoughts unnaaya?",
        step11Placeholder: "Inka evaina thoughts, feelings, leda suggestions...",
        ratings: {
            understanding: ["Ardham kaavadam kashtam", "Aruduga ardham avutundi", "Konnisarlu ardham avutundi", "Usually ardham avutundi", "Epudu ardham avutundi"],
            speed: ["Chaala slow", "Too slow", "Konchem slow", "Good speed", "Perfect speed"],
            repetition: ["Ekkuva confusion", "Often confusing", "Sometimes confusing", "Usually help chestundi", "Really naaku help chestundi"],
            flexibility: ["Naaku confusion", "Textbook follow cheyandi", "Okay undi", "Nachutundi", "Chaala nachutundi!"],
            comfort: ["Epudu comfortable kadu", "Antaga ledu", "Sometimes", "Comfortable", "Chaala comfortable"]
        },
        nextBtn: "Next",
        prevBtn: "Previous",
        submitBtn: "Feedback Submit cheyandi",
        submittingBtn: "Submit chestunnamu...",
        successTitle: "Mee feedback ki dhanyavadalu!",
        successMessage: "Mee response successfully submit ayyindi."
    }
};

let currentLanguage = 'en';

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

    // Language switching function
    function updateLanguage(lang) {
        currentLanguage = lang;
        const t = translations[lang];
        
        // Update header
        document.getElementById('headerTitle').textContent = t.headerTitle;
        document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
        
        // Update buttons
        nextBtn.textContent = t.nextBtn;
        prevBtn.textContent = t.prevBtn;
        submitBtn.textContent = t.submitBtn;
        
        // Update form labels and placeholders
        document.querySelector('[for="studentName"]').textContent = t.step1Label;
        document.getElementById('studentName').placeholder = t.step1Placeholder;
        
        // Update all step labels
        document.querySelector('[data-step="2"] label').textContent = t.step2Label;
        document.querySelector('[data-step="3"] label').textContent = t.step3Label;
        document.querySelector('[data-step="4"] label').textContent = t.step4Label;
        document.querySelector('[data-step="5"] label').textContent = t.step5Label;
        document.querySelector('[data-step="6"] label').textContent = t.step6Label;
        document.querySelector('[data-step="7"] label').textContent = t.step7Label;
        document.querySelector('[data-step="8"] label').textContent = t.step8Label;
        document.querySelector('[data-step="9"] label').textContent = t.step9Label;
        document.querySelector('[data-step="10"] label').textContent = t.step10Label;
        document.querySelector('[data-step="11"] label').textContent = t.step11Label;
        
        // Update textareas
        document.getElementById('whatLike').placeholder = t.step7Placeholder;
        document.getElementById('whatHelps').placeholder = t.step8Placeholder;
        document.getElementById('whatConfuses').placeholder = t.step9Placeholder;
        document.getElementById('improvements').placeholder = t.step10Placeholder;
        document.getElementById('additionalComments').placeholder = t.step11Placeholder;
        
        // Update rating labels
        updateRatingLabels('understanding', t.ratings.understanding);
        updateRatingLabels('speed', t.ratings.speed);
        updateRatingLabels('repetition', t.ratings.repetition);
        updateRatingLabels('flexibility', t.ratings.flexibility);
        updateRatingLabels('comfort', t.ratings.comfort);
        
        // Update success message
        document.querySelector('#successMessage h3').textContent = t.successTitle;
        document.querySelector('#successMessage p').textContent = t.successMessage;
        
        updateProgress();
    }
    
    function updateRatingLabels(ratingName, labels) {
        const ratingInputs = document.querySelectorAll(`input[name="${ratingName}Rating"]`);
        ratingInputs.forEach((input, index) => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label && labels[index]) {
                label.textContent = labels[index];
            }
        });
    }

    // Update progress bar
    function updateProgress() {
        const percentage = (currentStep / totalSteps) * 100;
        progressFill.style.width = percentage + '%';
        const t = translations[currentLanguage];
        progressText.textContent = t.progressText.replace('{current}', currentStep).replace('{total}', totalSteps);
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
        
        // For rating questions (steps 2-6), check if a radio button is selected
        if (currentStep >= 2 && currentStep <= 6) {
            const radioInputs = currentStepElement.querySelectorAll('input[type="radio"]');
            if (radioInputs.length > 0) {
                const radioName = radioInputs[0].name;
                const isChecked = currentStepElement.querySelector(`input[name="${radioName}"]:checked`);
                return isChecked !== null;
            }
        }
        
        return true; // Text inputs and step 1 (name) are always valid
    }

    // Next button click
    nextBtn.addEventListener('click', function() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        } else {
            // Show a more user-friendly message
            const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
            const questionText = currentStepElement.querySelector('label').textContent;
            alert(`Please answer the question: "${questionText}" before continuing.`);
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
        
        // Final validation before submission
        const requiredRatings = ['understandingRating', 'speedRating', 'repetitionRating', 'flexibilityRating', 'comfortRating'];
        const formData = new FormData(form);
        
        for (const rating of requiredRatings) {
            if (!formData.get(rating)) {
                alert(`Please complete all rating questions before submitting.`);
                return;
            }
        }
        
        // Disable submit button
        submitBtn.disabled = true;
        const t = translations[currentLanguage];
        submitBtn.textContent = t.submittingBtn;

        try {
            // Collect form data
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

            // Submit to Vercel API with Supabase
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
                const resetT = translations[currentLanguage];
                submitBtn.textContent = resetT.submitBtn;
            }, 5000);

        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting feedback. Please try again.');
            
            // Re-enable submit button
            submitBtn.disabled = false;
            const t = translations[currentLanguage];
            submitBtn.textContent = t.submitBtn;
        }
    });

    // Language button event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update language
            updateLanguage(lang);
        });
    });

    // Initialize first step and default language
    updateLanguage('en');
    showStep(1);
});