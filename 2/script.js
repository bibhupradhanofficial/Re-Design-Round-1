function movePill(view) {
  const activeBtn = document.getElementById(`${view}-view-btn`);
  const pill = document.querySelector('.active-pill');
  if (activeBtn && pill) {
    pill.style.width = `${activeBtn.offsetWidth}px`;
    pill.style.left = `${activeBtn.offsetLeft}px`;
  }
}

function switchView(view) {
  // Update Buttons
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.getElementById(`${view}-view-btn`);
  if (activeBtn) activeBtn.classList.add('active');

  // Move Pill
  movePill(view);

  // Update Content
  const contents = document.querySelectorAll('.view-content');
  contents.forEach(content => content.classList.remove('active'));

  const activeContent = document.getElementById(`${view}-view-content`);
  if (activeContent) activeContent.classList.add('active');
}

// Initial position
window.addEventListener('DOMContentLoaded', () => {
    movePill('list');
});
