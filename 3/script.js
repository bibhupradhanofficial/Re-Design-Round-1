document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    // Stages duration configuration
    const stages = [
        { class: 'stage-1', duration: 1500 },
        { class: 'stage-2', duration: 2500 },
        { class: 'stage-3', duration: 1500 },
        { class: 'stage-4', duration: 1500 },
        { class: 'stage-5', duration: 2000 },
        { class: 'stage-6', duration: Infinity }
    ];

    let currentStage = 0;

    const runNextStage = () => {
        if (currentStage >= stages.length) return;

        const stage = stages[currentStage];
        
        // Remove previous stage classes
        stages.forEach(s => body.classList.remove(s.class));
        
        // Add current stage class
        body.classList.add(stage.class);
        
        console.log(`Running: ${stage.class}`);

        currentStage++;

        if (stage.duration !== Infinity) {
            setTimeout(runNextStage, stage.duration);
        }
    };

    // Start with a small delay
    setTimeout(runNextStage, 1000);
});
