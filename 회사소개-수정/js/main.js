const elTxt = document.querySelector('.visual_txt') //필요한 요소

function show(){ //함수 이름은 알아서
    elTxt.classList.add('active') //실행구 (액티브라는 클래스를 집어넣는다)
}

show(); //실행시켜라

elTxt.addEventListener('click',show) //클릭 이벤트가 발생했을때 show를 실행시켜라

//추가
let targets = document.querySelectorAll('.ani_txt')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('on');
            //observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('on');
        }
    });
    })

targets.forEach(target=> {
    observer.observe(target);
})






/*
let ani_txt = document.querySelectorAll('.ani_txt')
observer.observer(ani_txt)


let observer = new IntersectionObserver((e)=>{
    e.forEach((aa)=>{
        if(aa.isIntersecting){
            aa.target.style.opacity=1;
        }else{
            aa.target.style.opacity=0;
        }
    })
})
*/



