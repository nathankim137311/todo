console.log('hello everybody');
const taskBtn = document.getElementById('task-btn');

//  opens pop-up form
taskBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    openForm(); 
}); 
// closes pop-up form 
closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    closeForm(); 
});

// open and close
function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}
function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}