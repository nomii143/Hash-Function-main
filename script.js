// Event Listeners
document.getElementById("generateHash").addEventListener("click", generateHash);
document.getElementById("sendMessage").addEventListener("click", sendMessage);
document.getElementById("verifyHash").addEventListener("click", verifyHash);
document
  .getElementById("modifyMessage")
  .addEventListener("click", modifyMessage);

// Generate Hash
function generateHash() {
  const message = document.getElementById("senderMessage").value;
  const hash = CryptoJS.SHA256(message).toString();
  document.getElementById("senderHash").innerText = hash;
}

// Send Message
function sendMessage() {
  const message = document.getElementById("senderMessage").value;
  const hash = document.getElementById("senderHash").innerText;
  document.getElementById("receivedMessage").innerText = message;
  document.getElementById("receivedHash").innerText = hash;
}

// Verify Hash
function verifyHash() {
  const receivedMessage = document.getElementById("receivedMessage").innerText;
  const receivedHash = document.getElementById("receivedHash").innerText;
  const computedHash = CryptoJS.SHA256(receivedMessage).toString();
  const result =
    receivedHash === computedHash
      ? "Integrity Verified"
      : "Integrity Compromised";
  document.getElementById("verificationResult").innerText = result;
}

// Modify Message
function modifyMessage() {
  const interceptedMessage =
    document.getElementById("interceptedMessage").value;
  document.getElementById("receivedMessage").innerText = interceptedMessage;
}
