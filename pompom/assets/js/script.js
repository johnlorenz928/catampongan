 function validateForm() {
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;
      const errorDiv = document.getElementById('error');

      errorDiv.textContent = ''; // 

      if (!fullname || !email || !username || !password) {
        errorDiv.textContent = "Please fill in all fields.";
        return false;
      }

      if (password.length < 6) {
        errorDiv.textContent = "Password must be at least 6 characters.";
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }