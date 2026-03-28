// Initialize Lucide Icons
lucide.createIcons();

const trashBtn = document.getElementById('trash-btn');
const overlay = document.getElementById('overlay');
const btnCancel = document.getElementById('btn-cancel');
const btnDelete = document.getElementById('btn-delete');
const popupCount = document.getElementById('popup-count');
const checkboxes = document.querySelectorAll('.inbox-list input[type="checkbox"]');

// Update Trash Button State
function updateTrashBtn() {
  const selectedCount = getSelectedCount();
  if (selectedCount > 0) {
    trashBtn.classList.add('active');
  } else {
    trashBtn.classList.remove('active');
  }
}

function getSelectedCount() {
  return document.querySelectorAll('.inbox-list input:checked').length;
}

// Checkbox change listener
checkboxes.forEach(chk => {
  chk.addEventListener('change', () => {
    updateTrashBtn();
  });
});

// Trash Button Click
trashBtn.addEventListener('click', () => {
  const count = getSelectedCount();
  if (count > 0) {
    popupCount.textContent = `${count} item${count > 1 ? 's' : ''}`;
    overlay.classList.add('show');
  }
});

// Cancel Button
btnCancel.addEventListener('click', () => {
  overlay.classList.remove('show');
});

// Delete Button
btnDelete.addEventListener('click', () => {
  const selectedItems = document.querySelectorAll('.inbox-item .checkbox-container input:checked');
  selectedItems.forEach(input => {
    const item = input.closest('.inbox-item');
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px)';
    setTimeout(() => {
      item.remove();
      updateTrashBtn();
      if (document.querySelectorAll('.inbox-item').length === 0) {
        document.getElementById('inbox-list').innerHTML = `<div style="padding: 60px 24px; text-align: center; color: #8e8e93; font-size: 17px;">No messages</div>`;
      }
    }, 400);
  });
  
  overlay.classList.remove('show');
});

// Close overlay on background click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    btnCancel.click();
  }
});
