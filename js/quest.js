 const quests = [
            { 
                level: "LEVEL 01 // ENTRY", 
                question: "What is the password to get into Will's wooden fort, Castle Byers?", 
                options: ["Mirkwood", "Radagast", "Eggo"],
                answerIndex: 1 
            },
            { 
                level: "LEVEL 02 // VISUAL RECON", 
                question: "In Season 1, what specific brand of vintage walkie-talkie do the boys use to communicate?", 
                options: ["Sony Walkman", "Motorola Talkabout", "Realistic TRC-214"],
                answerIndex: 2 
            },
            { 
                level: "LEVEL 03 // FREQUENCY SHIFT", 
                scenario: "A song is playing to keep someone safe from the curse.",
                question: "When Max escapes Vecna, what is the exact title of the song she is listening to?", 
                options: ["Running Up That Hill (A Deal with God)", "Hounds of Love", "Should I Stay or Should I Go"],
                answerIndex: 0 
            },
            { 
                level: "LEVEL 04 // ENCRYPTION", 
                scenario: "You have intercepted a Morse code transmission from a Russian spy.",
                question: "What is the hidden Russian code phrase intercepted by Dustin at Starcourt Mall?", 
                options: ["The cat is silver, the week is long.", "The week is long, the silver cat feeds.", "Feed the silver cat this week."],
                answerIndex: 1 
            },
            { 
                level: "LEVEL 05 // DEEP LORE", 
                scenario: "Accessing the ultimate hidden file...",
                question: "Which major character gives Dustin his iconic ROCKETS shirt in Season 2?", 
                options: ["Mike Wheeler", "Steve Harrington", "Ted Wheeler"],
                answerIndex: 2 
            }
        ];

        let currentLevel = 0;
        let isLocked = false; // Prevents clicking during a scare

        // DOM Elements
        const levelText = document.getElementById('level-indicator');
        const scenarioText = document.getElementById('scenario-text');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const scareSound = document.getElementById('demogorgon-sound');
        const answerText = document.getElementById('answer-text')

        // Function to load the current question
        function loadQuest() {
            if (currentLevel < quests.length) {
                const currentData = quests[currentLevel];
                levelText.innerText = currentData.level;
                questionText.innerText = currentData.question;
                
                // Clear old buttons
                optionsContainer.innerHTML = '';

                // Create new buttons
                currentData.options.forEach((option, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.innerText = option;
                    btn.onclick = () => handleAnswer(index, currentData.answerIndex);
                    optionsContainer.appendChild(btn);
                });
            } else {
                // Victory Screen
                answerText.innerText="You have survived the Upside Down. Welcome to the Hellfire Club.";
                questionText.style.display = "none";
                levelText.innerText = "STATUS: SAFE";
                levelText.classList.add('victory-text');
                scenarioText.innerText = "Transmission fully decrypted.";
                optionsContainer.innerHTML = ''; // Clear buttons
                document.body.style.backgroundImage = "url('../assets/quest_assets/safe.png')";
            }
        }

        // Handle the user's click
        function handleAnswer(selectedIndex, correctIndex) {
            if (isLocked) return;

            if (selectedIndex === correctIndex) {
                // Correct answer! Move to next.
                currentLevel++;
                loadQuest();
            } else {
                // Wrong answer! Trigger penalty.
                triggerScare();
            }
        }

        // Function to trigger the Demogorgon jump-scare
        function triggerScare() {
            isLocked = true; // Lock inputs
            
            // Turn screen red and shake, show image
            document.body.classList.add('upside-down-trap');
            
           
            // Play sound
            scareSound.volume = 1.0; // Max volume for jump scare
            scareSound.currentTime = 0; 
            scareSound.play();

            // Disable all buttons so they can't click during the scare
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(btn => btn.disabled = true);

            // Wait 2.5 seconds, then return to normal
            setTimeout(() => {
                document.body.classList.remove('upside-down-trap');
                
                // Re-enable buttons
                buttons.forEach(btn => btn.disabled = false);
                isLocked = false;
            }, 2000); 
        }

        // Initialize the first level
        window.onload = loadQuest;
   
