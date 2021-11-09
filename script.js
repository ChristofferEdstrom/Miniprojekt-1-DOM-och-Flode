const body = document.querySelector(`body`);
let h5 = document.createElement(`h5`);
body.appendChild(h5);

for (let i = 5; i >= 1; i--) {
    let head = document.createElement(`h${i}`);
    body.appendChild(head);
    head.innerText = (`Rad${6 - i}`);
    const hue = 230 - (i * 12);
    console.log(`det här är lite text och det här är värdet av i: ${i} `);
    console.log('hue: ', hue);
    head.style.backgroundColor = `hsl(${hue}, 99%, 75%)`;
    head.style.textAlign = `center`;
    head.style.color = `blue`;
}

let divis = document.createElement(`div`);
body.appendChild(divis);
divis.style.border = `solid black 2px`;
divis.style.display = `flex`;
divis.style.justifyContent = `space-evenly`;

let box1 = document.createElement(`ul`);
let box2 = document.createElement(`ul`);
let box3 = document.createElement(`ul`);


// box1 med loop

divis.appendChild(box1);
box1.style.backgroundColor = `purple`;
box1.style.listStyle = `none`;
box1.style.padding = '10px';

for (let i = 0; i < 10; i++) {
    let list1 = document.createElement(`li`);
    list1.innerText = i;
    box1.appendChild(list1);
    list1.style.backgroundColor = 'white';
    list1.textAlign = `center`;
    list1.style.padding = `5px 10px 0 10px`;
    list1.style.paddingRight = `40px`;
    list1.style.color = `white`;
    list1.style.backgroundColor = `black`;
    

    if (i===4){
    list1.style.backgroundColor = 'purple';
    }

    else if (i%2==0){

        list1.style.backgroundColor = 'black';
        list1.style.color = 'white';
    }

    else {
        list1.style.backgroundColor = 'white';
        list1.style.color = 'black';
    }   
}


// box2 med loop
//

divis.appendChild(box2);
box2.style.backgroundColor = `purple`;
box2.style.listStyle = `none`;
box2.style.padding = '10px';

for (let i = 9; i >= 0; i--){
    let list2 = document.createElement(`li`);
    list2.innerText = i;
    box2.appendChild(list2);
    list2.textAlign = `center`;
    list2.style.padding = `5px 25px 0 25px`;
    list2.style.color = `white`;
    list2.style.backgroundColor = `black`;

    if (i===8){
    list2.style.backgroundColor = 'purple';
    }

    else if (i%2==0){

        list2.style.backgroundColor = 'black';
        list2.style.color = 'white';
    }

    else {
        list2.style.backgroundColor = 'white';
        list2.style.color = 'black';
    }

}


// box3 med array
// 
// 

divis.appendChild(box3);
box3.style.backgroundColor = `purple`;
box3.style.listStyle = `none`;
box3.style.padding = `10px`;

    let array3 = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
    
for (let i = 0; i < array3.length; i++) {
    let list3 = document.createElement(`li`);
    list3.innerText = array3[i]; 
    box3.appendChild(list3);
    list3.style.backgroundColor = 'white';
    list3.textAlign = `center`;
    list3.style.padding = `5px 10px 0 10px`;
    list3.style.paddingLeft = `40px`;
    list3.style.color = `white`;
    list3.style.backgroundColor = `black`;

    if(i===6){
        list3.style.backgroundColor = 'purple';
        list3.style.color = `black`; 
    }

    else if (i%2===0){
            list3.style.background = `black`;
            list3.style.color = `white`;
    }
    else if (i%2!=0){
            list3.style.background = `white`;
            list3.style.color = `black`;
    }

}

