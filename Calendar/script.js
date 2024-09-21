const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
const calendar=document.getElementById('container');
const month=document.getElementById('month');
const date=document.getElementById('dates');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

const cal=new Date();

const currmonth=months[cal.getMonth()];
month.textContent=currmonth+' ';

const curryear=cal.getFullYear();
month.textContent+=curryear;

// Previous button operation:
prev.addEventListener('click',e=>{
    
    let content=month.textContent;
    let monthName = content.split(' ')[0];
    let index = months.indexOf(monthName);

    if(monthName!='January'){
    month.textContent=months[index-1]+' '+curryear;
    }
    
    else{
        alert("No previous months for this year");
    }
    dates();
})

// Next button operation:
next.addEventListener('click',e=>{
    
    let content=month.textContent;
    let monthName = content.split(' ')[0];
    let index = months.indexOf(monthName);

    if(monthName!='December'){
    month.textContent=months[index+1]+' '+curryear;
    }
    
    else{
        alert("No more months for this year");
    }

    dates();

})



function dates(){
    date.innerHTML='';
    
    // Addition of dates of current month:
    let content=month.textContent;
    let monthName = content.split(' ')[0];
    let index = months.indexOf(monthName);
    
    let daysInMonth = new Date(curryear, index + 1, 0).getDate();//2024.9.0
    // console.log(daysInMonth);

    let firstDay=new Date(curryear,index,1).getDay();
    // console.log(days[firstDay]);

    for(i=0;i<firstDay;i++){
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('date');
        date.appendChild(emptyDiv);
    }

    for(i=1;i<=daysInMonth;i++){
        let render=document.createElement('div');
        render.classList.add('date');
        render.textContent=i;


        //today
        if(render.textContent==cal.getDate() && index==cal.getMonth()){
            render.classList.add('today');
        }


        //current month
        if(index===cal.getMonth()){
        
        render.addEventListener('click',()=>{
            

              console.log(render.textContent + ","+monthName+","+curryear);
        });
    }
    else{
        render.classList.add('disabled');
    }
    
        date.appendChild(render);

    }
}
dates();




