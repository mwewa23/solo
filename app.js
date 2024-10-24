/* app.js */

// Data for frames: audio and transcript
const framesData = {
    1: {
        audioSrc: 'audio/audio1.mp3',
        transcript: 'This is the transcript for audio 1.'
    },
    2: {
        audioSrc: 'audio/audio2.mp3',
        transcript: 'This is the transcript for audio 2.'
    },
    3: {
        audioSrc: 'audio/audio3.mp3',
        transcript: 'This is the transcript for audio 3.'
    },
    
    4: {
        audioSrc: 'audio/audio4.mp3',
        transcript: 'This is the transcript for audio 4.'
    }
    // Add more frames data as needed
};

// Function to open the modal and populate it with audio and transcript
function openModal(frameId) {
    const modal = document.getElementById('myModal');
    const modalAudio = document.getElementById('modal-audio');
    const modalTranscript = document.getElementById('modal-transcript');
    
    const frame = framesData[frameId];
    
    if (frame) {
        // Set the audio and transcript inside the modal
        modalAudio.innerHTML = `<audio controls>
            <source src="${frame.audioSrc}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>`;
        modalTranscript.innerText = frame.transcript;
        
        // Display the modal
        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}