const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');

btnCreate.addEventListener('click', () => {												 
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  
  list.insertAdjacentHTML(
    'afterbegin',  // 'beforebegin', 'beforeend', 'afterend' > nesse caso referente ao 'ul' inserido no list na linha 6
    `<li>${input.value}</li>`
  );
  input.value = '';
});

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if(listContainer.style.display === 'none'){  // btnToggle.textContent === 'Hide List' funciona também
    listContainer.removeAttribute('style');
    btnToggle.textContent = 'Hide List';  
  }else{
    //listContainer.style.display = 'block';
    listContainer.style.display = 'none';    
    btnToggle.textContent = 'Show List';
  }  
});
