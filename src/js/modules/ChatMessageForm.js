export default function ChatMessageForm() {
  const textarea = document.getElementById('message-textarea');
  const submitButton = document.getElementById('send-button');

  if (!textarea || !submitButton) return;

  function updateButtonState() {
    if (textarea.value.trim() === '') {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  textarea.addEventListener('input', updateButtonState);

  updateButtonState();
}