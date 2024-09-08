const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // Store the triggered events in a new property
	butInstall.classList.toggle('hidden', false); // In CSS, we see that button has a hidden class 
});

butInstall.addEventListener('click', async () => { // Event handler for when the Install button is clicked
    const promptEvent = window.deferredPrompt; // Stores the event as a local variable

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt(); // Prompts the user to confirm installation
    
    window.deferredPrompt = null; // Reset the deferred prompt variable, it can only be used once.
    
    butInstall.classList.toggle('hidden', true); // Hides the install button once the app has been installed
});

window.addEventListener('appinstalled', (event) => { // Clears the prompt once installed
    window.deferredPrompt = null;
});