const insert=document.querySelector('div#insert');
const keys=document.querySelectorAll('div.key');
const press=document.querySelector('.press');

window.addEventListener('keydown',(e)=>{

    insert.style.display='block';
    press.style.display='none';

    const codes=[e.code==='Space'?'(space)':e.key,e.code,e.which,e.charCode];    
    const smalls=[`<small>key : e.key </small>`,
            `<small>code : e.code </small>`,
            `<small>Keycode : e.which </small>`,
            `<small>Unicode : e.charCode</small>`
        ];

    keys.forEach((key,index) => {
        key.innerHTML=codes[index]+smalls[index];
    });
});