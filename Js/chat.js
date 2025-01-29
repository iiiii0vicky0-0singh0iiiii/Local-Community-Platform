// WebSocket connection to the server
const socket = new WebSocket("ws://localhost:3000");

// Messaging UI
const main = document.querySelector("main");

// Chat Section
const chatSection = document.createElement("section");
chatSection.id = "chat";
chatSection.style.padding = "20px";

const chatTitle = document.createElement("h2");
chatTitle.textContent = "Group Chat";
chatTitle.style.textAlign = "center";
chatTitle.style.color = "#ff6b6b";

const messagesContainer = document.createElement("div");
messagesContainer.style.height = "300px";
messagesContainer.style.overflowY = "auto";
messagesContainer.style.border = "2px solid #ff6b6b";
messagesContainer.style.padding = "10px";
messagesContainer.style.borderRadius = "10px";
messagesContainer.style.backgroundColor = "#ffe0e0";

const messageForm = document.createElement("form");
messageForm.style.display = "flex";
messageForm.style.marginTop = "20px";

const messageInput = document.createElement("input");
messageInput.type = "text";
messageInput.placeholder = "Type a message...";
messageInput.style.flex = "1";
messageInput.style.padding = "10px";
messageInput.style.border = "2px solid #ff6b6b";
messageInput.style.borderRadius = "5px";

const sendButton = document.createElement("button");
sendButton.type = "submit";
sendButton.textContent = "Send";
sendButton.style.padding = "10px 20px";
sendButton.style.border = "none";
sendButton.style.borderRadius = "5px";
sendButton.style.backgroundColor = "#ff6b6b";
sendButton.style.color = "#fff";
sendButton.style.cursor = "pointer";

// Append elements
messageForm.appendChild(messageInput);
messageForm.appendChild(sendButton);
chatSection.appendChild(chatTitle);
chatSection.appendChild(messagesContainer);
chatSection.appendChild(messageForm);
main.appendChild(chatSection);

// WebSocket message handling
socket.addEventListener("message", (event) => {
  const messageData = JSON.parse(event.data);
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `${messageData.guestId}: ${messageData.message}`;
  messageDiv.style.marginBottom = "10px";
  messagesContainer.appendChild(messageDiv);
});

// Send message
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.send(JSON.stringify({ message }));
    messageInput.value = "";
  }
});
