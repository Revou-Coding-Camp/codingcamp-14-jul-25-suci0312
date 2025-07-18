// Show current time
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toUTCString();
}
updateTime();
setInterval(updateTime, 1000);

// Request user name on page load
window.addEventListener('DOMContentLoaded', function() {
  let userName = prompt("Masukkan nama Anda:");
  if (userName && userName.trim() !== "") {
    document.getElementById('welcome-user').textContent = userName;
  }
});

// Form submit handler
document.getElementById('message-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('output-name').textContent = document.getElementById('name-input').value;
  document.getElementById('output-dob').textContent = document.getElementById('dob-input').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  document.getElementById('output-gender').textContent = gender ? gender.value : '';
  document.getElementById('output-message').textContent = document.getElementById('message-input').value;
});