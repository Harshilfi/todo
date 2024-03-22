document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('#submit').disabled=true;

    document.querySelector('#task').onkeyup=() => {
        if(document.querySelector('#task').value.length>0){
            document.querySelector('#submit').disabled=false;
        }
        else{
            document.querySelector('#submit').disabled=true;
        }
            
    };

    document.querySelector('form').onsubmit = () => {
        const task=document.querySelector('#task').value;

        const li= document.createElement('li');
        li.innerHTML= task;
        li.classList.add("list");
        const donebt = document.createElement('button');
        donebt.innerHTML="DONE";
        donebt.classList.add("donebt");

        document.querySelector('#task-list').append(li,donebt);

        document.querySelector('#task').value='';

        document.querySelector('#submit').disabled=true;

        donebt.onclick= () => {
            document.querySelector('#task-list').removeChild(li);
            donebt.style.display="none";
        }
        

        return false;
    };




























});
