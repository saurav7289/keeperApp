const button = document.querySelector('.arrow');
const inputField = document.querySelector('.main');

const addTextData = ()=>{

    const textData = document.querySelectorAll('textarea');
    const saveTextArea = [];

    textData.forEach((note)=>{
        return saveTextArea.push(note.value);
    })

    localStorage.setItem('saveTextArea',JSON.stringify(saveTextArea));
}

const showTextarea = (text) =>{
    
    const note = document.createElement('div');

    note.classList.add('note');

    const htmlData = `<div class="customise">
    <button class="edit"><i class="far fa-pen-to-square fa-1x"></i></button>
    <button class="delete"><i class="far fa-trash-can fa-1x"></i></button>
    </div>
    <div class="mainarea ${text ? "hidden" : ""} "></div>
    <textarea class=" ${text ? "" : "hidden"} "></textarea>`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainArea = note.querySelector('.mainarea');
    const textArea = note.querySelector('textarea');

// delete note
deleteButton.addEventListener('click', ()=>{
    note.remove();
    addTextData();
})

// toggle textArea
    textArea.value = text;
    mainArea.innerHTML = text;

editButton.addEventListener('click',()=>{
    mainArea.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

textArea.addEventListener('change',(event)=>{
    const value = event.target.value;
    mainArea.innerHTML = value;
    addTextData();
})

inputField.appendChild(note);

}


const saveTextArea = JSON.parse(localStorage.getItem('saveTextArea'));
if(saveTextArea){
    saveTextArea.forEach((note)=>showTextarea(note))
};


button.addEventListener('click',showTextarea);
