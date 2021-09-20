const block = document.querySelector('.questions__item'),
      buttons = document.querySelectorAll('.question__item__options__item'),
      rocket = document.querySelector('.rocket'),
      crash = document.querySelector('.crash'),
      audioLose = document.querySelector('.audio__game__lose'),
      audioWin = document.querySelector('.audio__game__win'),
      rocketFire = document.querySelector('.rocket__fire');



const questions = [{
    question : 'Выберите город Воронеж',
    items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
    answer : 0
    },
    {
    question : 'Выберите город Тула',
    items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
    answer : 3
    },
    {
        question : 'Выберите город Самара',
        items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
        answer : 1
    },
    {
        question : 'Выберите город Москва',
        items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
        answer : 2
    },
    {
        question : '2+2',
        items : ['3', '4', '34', '12'],
        answer : 1
    },
    {
        question : 'Выберите город Тула',
        items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
        answer : 3
        },
        {
            question : 'Выберите город Самара',
            items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
            answer : 1
        },
        {
            question : 'Выберите город Москва',
            items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
            answer : 2
        },
        {
            question : '2+2',
            items : ['3', '4', '34', '12'],
            answer : 1
        },{
            question : 'Выберите город Тула',
            items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
            answer : 3
            },
            {
                question : 'Выберите город Самара',
                items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
                answer : 1
            },
            {
                question : 'Выберите город Москва',
                items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
                answer : 2
            },
            {
                question : '2+2',
                items : ['3', '4', '34', '12'],
                answer : 1
            },{
                question : 'Выберите город Тула',
                items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
                answer : 3
                },
                {
                    question : 'Выберите город Самара',
                    items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
                    answer : 1
                },
                {
                    question : 'Выберите город Москва',
                    items : ['Voronezh', 'Samara', 'Moscow', 'Tula'],
                    answer : 2
                },
                {
                    question : '2+2',
                    items : ['3', '4', '34', '12'],
                    answer : 1
                }   
];

let mistakes = 0; 
let points = 0;
let tour = 0;
let trueAnswer = true;
let tl = new TimelineMax({ repeat: 1 }).to('.rocket', 0, {y: 0 });
let tlbat = new TimelineMax({ repeat: 1 }).to('.batut', 0, {y: 0 });
let tlrfire = new TimelineMax({repeat: 1}).to('.rocket__fire', 0, {y: 0});
let fireStage = 1;

$('.test__block__content__button').click((e) => {
    e.preventDefault();
    $('.game').fadeIn();
    $('.preloader').fadeIn(200);
    setTimeout(()=>{
        $('.preloader').fadeOut();
    },1000);
    $('body').addClass('body__game__inactive');
    newGame();
    
});
$('.game__close__btn').click((e) => {
    $('body').removeClass('body__game__inactive');
    $('.game').fadeOut();
});

async function startGame() {
    tl = await new TimelineMax({ repeat: 1 }).to('.rocket', 0, {y: 0, opacity: 1 });
    tlbat = await new TimelineMax({ repeat: 1 }).to('.batut', 0, {y: 0, opacity: 1 });
    tlrfire = await new TimelineMax({ repeat: 1 }).to('.rocket__fire', 0, {y: 0, opacity: 0 });
    gsap.to('.crash__left', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to(crash, {
        duration:0,
        opacity:0,
    })
    gsap.to('.crash__right', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to('.crash__center', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to('.rocket__explosion', {
        duration: 0,
        opacity: 1,
    });
    rocket.src = 'src/img/game/rockets/1.1.png';
    mistakes = 0;
    points = 0;
    tour = 0;
    await $(block).fadeOut(200);
    block.innerHTML = `<div class="questions__item__text">${questions[0].question}</div>
                            <ul class="questions__item__options">
                                <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[0].items[0]}</div></li>
                                <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[0].items[1]}</div></li>
                                <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[0].items[2]}</div></li>
                                <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[0].items[3]}</div></li>
                            </ul>`;
    await $(block).fadeIn(0);
}

async function newGame() {
    tlbat.kill(null);
    if (tl != 0) {
        await tl.kill(null);
        
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
            rotation: 0,
            opacity: 1
        })
        await gsap.to('.batut', {
            duration: 0,
            y : 0,
            rotation: 0,
            opacity: 1
        })
        await gsap.to('.rocket__fire', {
            duration: 0,
            y: 0,
            rotation: 0,
            opacity: 0
        })
        rocket.src = 'src/img/game/rockets/1.1.png';
    }

    gsap.to('.crash__left', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to('.crash__right', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to('.crash__center', {
        duration: 0,
        y: 0,
        x: 0,
        rotation: 0
    });
    gsap.to('.rocket__explosion', {
        duration: 0,
        opacity: 1,
    });
    mistakes = 0;
    points = 0;
    tour = 0;
    tl = 0;
    block.innerHTML = `<div class="questions__item__text">Кажется, ракета готова к запуску...</div>
                            <div class="questions__start">ПОЕХАЛИ!</div>`;
}

block.addEventListener('click', async (e) => {
    if(e.target.classList.contains('question__item__options__item')){
        if(e.target.getAttribute('data-id') == '1') {
            return;
        }
        e.target.setAttribute('data-id', '1');
        if(e.target.innerHTML == questions[tour].items[questions[tour].answer]){
            e.target.style.backgroundColor = await 'green';
            await points++;
            trueAnswer = await true;
        } else {
            e.target.style.backgroundColor = 'red';
            mistakes++;
            trueAnswer = await false;
        }
        await gsap.to(block, {
            opacity: 0,
            duration: 0.2,
        })
        await tour++;
        await checkLose();
        await nextQuestion();
        await rocketAnimation();
        await gsap.to(block, {
            opacity: 0,
            duration: 0.5,
        })
        await gsap.to(block, {
            opacity: 1,
            duration: 0.2,
        })
    }
    if(e.target.classList.contains('questions__start')) {
        startGame();
    }
});

function nextQuestion() {
    if ( points >=6 ) {
        block.innerHTML = `<div class="questions__item__text">Ура! Вам удалось запустить ракету. До встречи в космосе!</div>
                            <div class="questions__start">Начать заново</div>`;
    } else if (mistakes >= 6) {
        block.innerHTML = `<div class="questions__item__text">Упс, ракета взорвалась. Кажется, вы плохо подготовились. Попробуйте еще раз!</div>
                            <div class="questions__start">Пройти тест заново</div>`;
    } else {
        block.innerHTML = `<div class="questions__item__text">${questions[tour].question}</div>
        <ul class="questions__item__options">
            <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[tour].items[0]}</div></li>
            <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[tour].items[1]}</div></li>
            <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[tour].items[2]}</div></li>
            <li class="questions__item__options__wrapper"><div class="question__item__options__item">${questions[tour].items[3]}</div></li>
        </ul>`;
    }
    
}



async function rocketAnimation() {
    if (points == 1 && !lose() && trueAnswer) {
        if (tl != 0) {
            tl.kill(null);
        }
        setTimeout(() => {
            tl = new TimelineMax({ repeat: -1 })
            .to('.rocket', 0.3, {y: 0 })
            .to('.rocket', 0.3, {y: -25 })
            .to('.rocket', 0.3, {y: 0 })


            tlbat = new TimelineMax({ repeat: -1 })
            .to('.batut', 0.3, {y: 0 })
            .to('.batut', 0.2, {y: 10, scaleY: 0.95 })
            .to('.batut', 0.1, {y: 0, scaleY: 1 })
            .to('.batut', 0.3, {y: 0 })

        }, 200);

    } else if (points == 2 && !lose() && trueAnswer) {
        await tl.kill(null);
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
        })
        setTimeout(() => {
            tl = new TimelineMax({ repeat: -1 })
            .to('.rocket', 0.3, {y: 0 })
            .to('.rocket', 0.3, {y: -50 })
            .to('.rocket', 0.3, {y: 0 })
        }, 200);
    } else if (points == 3 && !lose() && trueAnswer) {
        await tl.kill(null);
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
        })
        setTimeout(() => {
            tl = new TimelineMax({ repeat: -1 })
            .to('.rocket', 0.3, {y: 0 })
            .to('.rocket', 0.3, {y: -75 })
            .to('.rocket', 0.3, {y: 0 })
        }, 200);
    } else if (points == 4 && !lose() && trueAnswer) {
        await tl.kill(null);
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
        })
        setTimeout(() => {
            tl = new TimelineMax({ repeat: -1 })
            .to('.rocket', 0.3, {y: 0 })
            .to('.rocket', 0.3, {y: -100 })
            .to('.rocket', 0.3, {y: 0 })
        }, 200);
    } else if (points == 5 && !lose() && trueAnswer) {
        await tl.kill(null);
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
        })
        setTimeout(() => {
            tl = new TimelineMax({ repeat: -1 })
            .to('.rocket', 0.3, {y: 0 })
            .to('.rocket', 0.3, {y: -125 })
            .to('.rocket', 0.3, {y: 0 })
        }, 200);
    } else if (mistakes>=6 && !trueAnswer) {
        await tl.kill(null);
        await tlbat.kill(null);
        setTimeout(() => {
            audioLose.play();
            tl = new TimelineMax({ repeat: 0 })
                .to(rocket, 0 , {opacity: 0})
                .to(crash, 0, {opacity: 1})
            gsap.to('.crash__left', {
                duration: 1,
                y: -1000,
                x: -700,
                rotation: 145
            });
            gsap.to('.crash__right', {
                duration: 1,
                y: -1000,
                x: 700,
                rotation: 30
            });
            gsap.to('.crash__center', {
                duration: 1,
                y: -1000,
                x: 300,
                rotation: 45
            });
            gsap.from('.rocket__explosion', {
                duration: 0.2,
                opacity: 0
            })
            
        
        }, 500)        
    } else if (points >=6) {
        audioWin.play();
        if(tl != 0) {
            tl.clear();
        }
        tlbat.kill(null);
        await gsap.to('.rocket', {
            duration: 0,
            y : 0,
        });
        await gsap.to('.batut', {
            duration: 0,
            y: 0,
        })
        gsap.to('.rocket__fire', {
            duration: 0.2,
            opacity: 1
        })
        setTimeout(() => {
            tl = new TimelineMax({ repeat: 0 })
            .to('.rocket', 2, {y: -1500 })
            tlrfire = new TimelineMax({ repeat: 0 })
            .to('.rocket__fire', 2, {y: -1500 })
            tlbat = new TimelineMax({ repeat: 0 })
            .to('.batut', 0, {y: 0 })
        }, 200);
    }
}

setInterval(() => {
    changeFire();
}, 100);

function changeFire() {
    if(fireStage > 3) {
        fireStage = 1;
        return;
    } 
    rocketFire.src = `src/img/game/rockets/rocket_fire_${fireStage}.png`;
    fireStage++;
}

function lose() {
    if (mistakes >= 6) {
        return true;
    } else {
        return false;
    }
}

async function checkLose() {
    if (mistakes == 1) {
        rocket.src = 'src/img/game/rockets/1.1.png';
        await setTimeout(()=> {
            rocket.src = 'src/img/game/rockets/1.2.png';
        }, 500);
    } else if (mistakes == 2) {
        rocket.src = 'src/img/game/rockets/2.1.png';
        await setTimeout(()=> {
            rocket.src = 'src/img/game/rockets/2.2.png';
        }, 500);
    } else if (mistakes == 3) {
        rocket.src = 'src/img/game/rockets/3.1.png';
        await setTimeout(()=> {
            rocket.src = 'src/img/game/rockets/3.2.png';
        }, 500);
    } else if (mistakes == 4) {
        rocket.src = 'src/img/game/rockets/4.1.png';
        await setTimeout(()=> {
            rocket.src = 'src/img/game/rockets/4.2.png';
        }, 500);
    } else if (mistakes == 5) {
        rocket.src = 'src/img/game/rockets/5.1.png';
        await setTimeout(()=> {
            rocket.src = 'src/img/game/rockets/5.2.png';
        }, 500);
    }
};
