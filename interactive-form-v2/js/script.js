const focusText = document.getElementById('name').focus();
const input= document.getElementById('other-title');
const jobTitle= document.getElementById('title');

//hiding the input initially
input.style.display= 'none';

//if they select other then the input will appear
jobTitle.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
       input.style.display = 'block';
   }else{
       input.style.display = 'none';
   }
});
