
let textArea = document.createElement('textarea');
let select = document.createElement('select');

let selectrange = ['queue', 'transit', 'delivered', 'cancelled'];
let text = ['Queue', 'Transit', 'Delivered', "Cancelled"];

for (i = 0; i < selectrange.length; i++) {
  let option = document.createElement('option');
  option.value = selectrange[i];
  option.text = text[i];

  select.appendChild(option);
}

const statusColumn = 5;
const plColumn = 6;
let plTd;
let cancelEdit;


let adminEdit = document.getElementsByClassName('admin-edit-btn')[0];

adminEdit.onclick = function editCell(event) {
  let row = event.target.parentElement.parentElement;
  let tds = row.getElementsByTagName('td');
  plTd = tds[plColumn];

  textArea.style.width = tds[plColumn].clientWidth + 'px';
  textArea.style.height= tds[plColumn].clientHeight + 'px';
  textArea.value = tds[plColumn].innerHTML;
  tds[plColumn].innerHTML = '';
  tds[plColumn].appendChild(textArea);
  textArea.focus();

  tds[plColumn].insertAdjacentHTML("beforeend", '<div><button class="edit-cancel">CANCEL</button></div>');


  tds[statusColumn].appendChild(select);
  tds[plColumn].appendChild(textArea);

  curr = row;

  cancelEdit = document.getElementsByClassName('edit-cancel')[0];
  cancelEdit.onclick = function() {
    console.log(plTd.innerHTML);
    plTd.innerHTML = plTd.firstChild.value;
  }
  return cancelEdit;
}
