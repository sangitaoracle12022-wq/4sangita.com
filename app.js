function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value;

  if (!message) return;

  addMessage("You", message);

  // Simple demo AI reply (replace later with real API)
  setTimeout(() => {
    addMessage("AI", getBotReply(message));
  }, 500);

  input.value = "";
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = sender === "You" ? "userMsg" : "botMsg";
  msg.innerText = sender + ": " + text;
  chatBox.appendChild(msg);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello")) return "Hello! How can I help you?";
  if (msg.includes("ai")) return "AI agents help in automation and chat systems.";
  if (msg.includes("name")) return "I am your AI assistant.";
  
  return "I am still learning. Please connect me to AI API for smart replies.";
}