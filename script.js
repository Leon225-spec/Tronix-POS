// Toggle Mobile Menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
  }
  
  // Sales Chart (Sample Data)
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [1200, 1500, 1700, 1600, 2000],
          borderColor: '#00FF88',
          fill: false,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  });
  // Open Modals
function openModal(modalId) {
    document.getElementById(modalId).showModal();
  }
  
  // Close Modals
  function closeModal(modalId) {
    document.getElementById(modalId).close();
  }
  
  // Add Product (Simulated)
  document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const price = e.target[1].value;
    const stock = e.target[2].value;
  
    // Simulate adding to the table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>$${price}</td>
      <td>${stock}</td>
      <td>
        <button class="btn-icon" onclick="openEditModal(this)">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-icon" onclick="deleteProduct(this)">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    document.getElementById('productList').appendChild(row);
    closeModal('addProductModal');
    alert('Product added!');
  });
  
  // Delete Product
  function deleteProduct(button) {
    if (confirm('Are you sure?')) {
      const row = button.closest('tr');
      row.remove();
    }
  }
  
  // Open Edit Modal (Populate Fields)
  function openEditModal(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    document.getElementById('editName').value = cells[0].innerText;
    document.getElementById('editPrice').value = cells[1].innerText.replace('$', '');
    document.getElementById('editStock').value = cells[2].innerText;
    openModal('editProductModal');
  }
  
  // Update Product (Simulated)
  document.getElementById('editProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('editName').value;
    const price = document.getElementById('editPrice').value;
    const stock = document.getElementById('editStock').value;
  
    // Find the row to update
    const row = document.querySelector('.product-table tr:last-child');
    row.cells[0].innerText = name;
    row.cells[1].innerText = `$${price}`;
    row.cells[2].innerText = stock;
    closeModal('editProductModal');
    alert('Product updated!');
  });

  // Toggle Password Visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId || 'password');
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  
  // Password Strength Checker (for Signup)
  document.getElementById('signupPassword').addEventListener('input', (e) => {
    const password = e.target.value;
    const strengthBar = document.getElementById('passwordStrength');
    let strength = 0;
  
    // Check password strength
    strength += /[A-Z]/.test(password) ? 1 : 0;
    strength += /[a-z]/.test(password) ? 1 : 0;
    strength += /[0-9]/.test(password) ? 1 : 0;
    strength += /[^A-Za-z0-9]/.test(password) ? 1 : 0;
    strength += password.length >= 8 ? 1 : 0;
  
    // Update strength bar
    strengthBar.className = 'password-strength';
    if (strength >= 4) strengthBar.classList.add('strong');
    else if (strength >= 2) strengthBar.classList.add('medium');
    else strengthBar.classList.add('weak');
  });
  
  // Form Submissions (Add your API calls here)
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic
    alert('Login submitted!');
  });
  
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add signup logic
    alert('Signup submitted!');
  });