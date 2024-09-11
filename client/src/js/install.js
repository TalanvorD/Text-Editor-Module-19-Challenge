const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // Store the triggered events

    butInstall.classList.toggle('hidden', false); // Remove the hidden class from the button.
});

butInstall.addEventListener('click', async () => { // Listens for the click event on the install button
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) { return; }
  
    promptEvent.prompt(); // Prompts the user to install the app
    
    window.deferredPrompt = null;     // Reset the deferred prompt variable, it can only be used once.
    
    butInstall.classList.toggle('hidden', true); // Hides the install button

});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;   // Clears the prompt
});
