window.addEventListener("load", function () {

    /* header menu */
    const menuItems = document.querySelectorAll("header ul li");
    // 모든 li 요소들을 선택

    menuItems.forEach((item) => {
        // 각 li에 클릭 이벤트 리스너를 추가
        item.addEventListener("click", function () {
            // 현재 active 클래스를 가진 요소에서 active 클래스를 제거
            menuItems.forEach((li) => li.classList.remove("active"));

            this.classList.add("active");
            // 클릭된 요소에 active 클래스를 추가
        });
    });


    // gsap 애니메이션
    // 01 
    const ani1 = gsap.timeline();
    const horizontal = document.querySelector(".horizontal");
    const sections = gsap.utils.toArray(".horizontal > .container > div");
    const allElements = document.querySelectorAll('#section1 .parallax__rotate__text');
    const txtAll = Array.from(allElements).filter(element => !element.classList.contains('txt1'));

    ani1.from(".section1 .bg_text li", {
        autoAlpha: 1
    })
        .from("#section1 .box1", {
            autoAlpha: 0,
            scale: 10,
            duration: 3
        })
        .to("#section1 .box1", {
            scale: 1.1,
            width: "56rem",
            height: "54rem",
            y: 110
        })
        .to("#section1 .parallax__item__img", {
            y: -90
        })
        .to("#section1 .box1", {
            borderRadius: "50%",
            duration: 1
        })
        .to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            duration: 5
        }, '+=2')
        .to(".section1 .bg_text li:first-child", {
            marginTop: -150,
            duration: 4
        }, "open")
        .to(".section1 .bg_text li:last-child", {
            marginTop: 150,
            duration: 4
        }, "open")
        .from('#section1 .txt1', {
            autoAlpha: 0,
            rotate: "720deg",
            x: innerWidth * 1,
            borderRadius: "50%"
        })
        .to('#section1 .txt1', {
            autoAlpha: 1,
            duration: 3
        })
        .from('#section1 .txt2', {
            autoAlpha: 0,
            rotate: "720deg",
            x: innerWidth * 1,
            borderRadius: "50%"
        })
        .to('#section1 .txt2', {
            autoAlpha: 1,
            duration: 3
        })
        .from('#section1 .txt3', {
            autoAlpha: 0,
            rotate: "720deg",
            x: innerWidth * 1,
            borderRadius: "50%"
        })
        .to('#section1 .txt3', {
            autoAlpha: 1,
            duration: 3
        })
        .to(allElements, {
            autoAlpha: 0,
            y: - innerHeight * 1,
            duration: 3
        })
        .to(".section1 .bg_text li", {
            autoAlpha: 0
        });

    ScrollTrigger.create({
        animation: ani1,
        trigger: ".parallax__contBox.section1", // 객체기준범위
        start: "top", // 시작점
        end: () => "+=" + (horizontal.offsetWidth - innerWidth), // 끝점
        scrub: 1, // 모션바운스
        pin: true, // 고정
        /* pinSpacing:true, */
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: false // 개발가이드선
    });


    // 02 : 텍스트 제자리 애니
    const ani2 = gsap.timeline({ defaults: { duration: 0.5 } });
    ani2.from("#section2 .t1", { autoAlpha: 0, y: 50 }, "+=1")
        .from("#section2 .t1 em", { autoAlpha: 1, yPercent: 100 })
        .to("#section2 .t1 em", { yPercent: 1 })
        .from("#section2 .t2", { autoAlpha: 0, y: 50 }, "+=1")
        .from("#section2 .t2 em", { autoAlpha: 1, xPercent: -70 })
        .to("#section2 .t2 em", { xPercent: 70 })
        .to("#section2 .t1 em", { autoAlpha: 0 })
        .from("#section2 .t3", { autoAlpha: 0, y: 50 }, "+=1")
        .from("#section2 .t3 em", { autoAlpha: 1, yPercent: -100 })
        .to("#section2 .t2 em", { autoAlpha: 0 })
        .to("#section2 .t3 em", { rotate: 90, x: 180, y: 250, autoAlpha: 0, duration: 3 })
        .from("#section2 .t4", { autoAlpha: 0, y: 50 })
        .from("#section2 .t4 em", { autoAlpha: 1, xPercent: -100 })
        .from("#section2 .t4 a", { autoAlpha: 0, duration: 0.1, y: 50 }, "+=1")
        .from("#section2 .t4 span", { autoAlpha: 0, duration: 0.1, y: 50 }, "+=1");

    ScrollTrigger.create({
        animation: ani2,
        trigger: "#section2",
        start: "top",
        end: "+=6000",
        scrub: 1,
        snap: 1 / ("#section2 em".length - 1),
        pin: true,
        ease: "power1.inOut",
        anticipatePin: 1
    });


    // 03 : 이미지를 차례대로 나오게
    gsap.to("#section3 em", {
        duration: 1,
        autoAlpha: 0,
        repeat: -1,
        ease: "back.easeInOut"
    });
    gsap.to(".mini_circle.cc1", {
        duration: 1,
        y: -35,
        repeat: -1,
        ease: "back.easeInOut"
    });
    gsap.to(".mini_circle.cc2", {
        duration: 2,
        y: -35,
        repeat: -1,
        ease: "back.easeInOut"
    });
    gsap.to(".mini_circle.cc3", {
        duration: 1.5,
        y: -35,
        repeat: -1,
        ease: "back.easeInOut"
    });

    const ani3 = gsap.timeline();
    ani3.from("#section3 .parallax__item__img", {
        autoAlpha: 0,
        y: -120,
        ease: "back.out(4)",
        stagger: {
            amount: 2.1,
            from: "left" //center random...
        }
    }, "+=1")
        .from("#section3 .parallax__item__circle", {
            autoAlpha: 0,
            ease: "back.out(4)",
            scale: 0
        })
        .to("#section3 .parallax__item__circle", {
            duration: 0.5,
            scale: 2,
            rotation: 180
        })
        .from("#section3 .mini_circle", {
            autoAlpha: 0
        })
        .to("#section3 .mini_circle", {
            autoAlpha: 1
        })
        .to("#section3 .parallax__item__circle", {
            scale: 1,
            borderRadius: 0,
            width: "100vw",
            height: '300vh',
            y: "-10vh",
            duration: 2
        }, "+=1")
        .from("#section3 .water-fill", {
            autoAlpha: 0,
            width: "100vw",
            duration: 2
        });

    ScrollTrigger.create({
        animation: ani3,
        trigger: "#section3",
        start: "top",
        end: "+=8000",
        scrub: true,
        pin: true,
        anticipatePin: 1
    });


    // 04 ~ 05 : 텍스트 애니
    gsap.from("#section4 p", {
        ease: "back.out(4)",
        stagger: 0.5 // 각 <p> 요소가 순차적으로 나타나도록 설정
    });

    gsap.to("#section4 p:first-child", {
        duration: 2,
        y: -45,
        repeat: -1,
        repeatDelay: 1,
        ease: "power.out"
    });

    gsap.to("#section4 p:nth-child(2)", {
        duration: 2,
        y: -50,
        repeat: -1,
        repeatDelay: 1,
        delay: 1,
        ease: "power.out"
    });

    gsap.from("#section4_2 li", {
        rotateY: 0,
        duration: 1, // 애니메이션 지속 시간 설정
        ease: "power.out",
    });

    gsap.to("#section4_2 li", {
        duration: 2,
        rotateY: 360,
        repeat: -1,
        ease: "power.out",
        stagger: { amount: 1 }
    });

    const ani4 = gsap.timeline({ defaults: { duration: 2 } });

    ani4.to("#section3 .parallax__item__circle", { yPercent: -10 }, "+=1")
        .to(".section4_txtbx", { yPercent: -100, duration: 3 }, "+=2")
        .from("#section4_2 ul", {
            autoAlpha: 0
        })
        .to("#section4_2 ul:first-child li", {
            autoAlpha: 1,
            rotate: -360,
            xPercent: -100,
            yPercent: -250,
            ease: "power1.out",
            stagger: { amount: 3 }
        }, '+=20')
        .to("#section4_2 ul:last-child li", {
            rotate: 360,
            xPercent: 200,
            yPercent: -350,
            ease: "power1.out",
            stagger: { amount: 3, from: "end" }
        })
        .from("#section5 .bg_text", {
            autoAlpha: 0
        })
        .to("#section5 .bg_text", {
            autoAlpha: 1
        })
        .add("startSection5", "+=1") // 새로운 레이블
        .from("#section5 .t1", { xPercent: 300 }, "startSection5")
        .from("#section5 .t2", { xPercent: -400, duration: 3 }, "startSection5")
        .from("#section5 .t3", { xPercent: 300, duration: 3 }, "startSection5")
        .from("#section5 .t4", { xPercent: -400, duration: 3 }, "startSection5")
        .from("#section5 #whBg_r", { xPercent: 100, duration: 3 }, "startSection5")
        .from("#section5 #whBg_l", { xPercent: -100, duration: 3 }, "startSection5")
        .add("text") // 레이블 추가
        .to("#section5 .t1", { xPercent: 0 }, "text")
        .to("#section5 .t2", { xPercent: 0 }, "text")
        .to("#section5 .t3", { xPercent: 0 }, "text")
        .to("#section5 .t4", { xPercent: 0 }, "text")
        /* .to("#section5 .parallax__item__text", { yPercent: -100, duration: 5 }) */
        .to("#section5 .bg_text", { yPercent: -5 });

    // .section4_txtbx 고정하는 ScrollTrigger 설정
    ScrollTrigger.create({
        trigger: ".section4_txtbx",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        ease: "power1.inOut"
    });

    // .textBox를 고정하는 ScrollTrigger 설정
    ScrollTrigger.create({
        trigger: "#section4_2 .textBox",
        start: "top top", // .textBox의 상단이 화면의 중앙에 도달할 때 고정 시작
        end: () => "+=" + document.querySelector("#section4_2").offsetHeight,
        pin: true, // .textBox를 고정
        pinSpacing: false, // pin-spacer를 사용하여 레이아웃 조정
        scrub: true // 스크롤 속도와 연동
    });

    // #section5 .bg_text를 고정하는 ScrollTrigger 설정
    ScrollTrigger.create({
        trigger: "#section5 .bg_text",
        start: "top top",
        end: () => "+=" + (window.innerHeight * 1),
        pin: true,
        pinSpacing: false,
        scrub: true
    });

    // marquee text 효과
    let $text1 = $('.bg_text li:first-child span'); // 애니메이션 대상 지정
    let $wrap1 = $('.bg_text li:first-child'); // 애니메이션 영역 선택

    $text1.clone().appendTo($wrap1); //대상을 복사하여 무한히 보일수 있도록 함

    TweenMax.to($wrap1, 20, { // 20 : 애니메이션을 40초 동안 실행
        x: -($text1.width()), // text 너비 만큼 왼쪽 가로로 움직임
        ease: Linear.easeNone, //선형 이징 : 일정한 속도로 이동
        repeat: -1 // 무한 반복 : -1 , 한번 실행 : 0
    });

    let $text2 = $('.bg_text li:last-child span');
    let $wrap2 = $('.bg_text li:last-child');

    $text2.clone().appendTo($wrap2);

    TweenMax.fromTo($wrap2, 25, {
        x: -$text2.width() // 시작 위치를 텍스트 너비만큼 왼쪽으로 설정
    }, {
        x: 0, // 텍스트가 오른쪽으로 이동하여 복사본과 이어지도록 설정
        ease: Linear.easeNone,
        repeat: -1
    });

    // ani4 전체 ScrollTrigger 설정
    ScrollTrigger.create({
        animation: ani4,
        trigger: "#section4",
        start: "top top",
        endTrigger: "#section5",
        end: () => "+=" + document.querySelector("#section4").offsetHeight * 2, // 애니메이션이 끝날 때까지 고정
        scrub: 1,
        pin: "#section4", // #section4를 고정
        pinSpacing: false, // pin-spacer를 생성하지 않음
        anticipatePin: 1,
        snap: {
            snapTo: 1 / 5, // 스냅 간격 설정 (예: 5등분)
            duration: { min: 0.2, max: 4 }, // 스냅 애니메이션 시간
            delay: 0.1, // 스냅 지연 시간
            ease: "power1.inOut" // 스냅 애니메이션 이징 함수
        }
    });


    // port: split-type 사용하기_1
    const ani_port = gsap.timeline();

    ani_port.from(".split1", {
        yPercent: 100,
        autoAlpha: 0,
        ease: "circ.out",
        duration: 2,
        stagger: {
            amount: 2,
        },
        scrollTrigger: {
            trigger: ".split1",
            scrub: true,
            start: "bottom bottom+=700",
            end: "bottom bottom+=600"
        }
    });


    const container = document.querySelector('.port__wrap');
    const p_horSection = gsap.utils.toArray(".port__item");

    if (p_horSection.length === 0) {
        console.log("No .port__item elements found.");
        return;
    };

    // 초기 배경색 설정
    gsap.set(container, {
        backgroundColor: p_horSection[0].getAttribute('data-bgcolor')
    });

    // 가로 스크롤
    let scrollTween = gsap.to(p_horSection, {
        xPercent: -100 * (p_horSection.length - 1),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
            trigger: "#port",
            start: "top top",
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 0.3,
            snap: 1 / (p_horSection.length - 1),
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });

    // 배경색 전환
    p_horSection.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            containerAnimation: scrollTween,
            horizontal: true,
            start: "40% right",
            end: "right 60%",
            onEnter: () => {
                gsap.to(container, { backgroundColor: section.getAttribute('data-bgcolor'), duration: 1 });
            },
            onEnterBack: () => {
                gsap.to(container, { backgroundColor: section.getAttribute('data-bgcolor'), duration: 1 });
            }
        });

        // 각 section의 .split 요소에 대한 ScrollTrigger 설정
        const p_splits = section.querySelectorAll('.split2, .split3, .split4, .split5');

        p_splits.forEach(split => {
            gsap.from(split, {
                yPercent: 100,
                autoAlpha: 0,
                ease: "circ.out",
                duration: 2,
                stagger: {
                    amount: 2
                },
                scrollTrigger: {
                    trigger: split,
                    containerAnimation: scrollTween,
                    horizontal: true,
                    scrub: true,
                    start: "30% right",
                    end: "right 90%"
                },
            });
        });
    });


    // contact
    const ani_contact = gsap.timeline({ defaults: { duration: 0.1 } });
    ani_contact
        .to("#contact .t1", { x: -550, y: -30 }, "spread")
        .to("#contact .t3", { x: 500, y: -90 }, "spread")
        .from("#contact .t2", { autoAlpha: 0 })
        .to("#contact .t2", { y: 70, autoAlpha: 1 }, "spread");

    ScrollTrigger.create({
        animation: ani_contact,
        trigger: "#contact",
        start: "top",
        end: "+=4000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
            snapTo: 1,
            duration: { min: 0.1, max: 1 },
            ease: "power1.inOut"
        }
    });


    // 08 : 이미지 확대하기
    const ani8 = gsap.timeline();
    ani8.to("#section8 .parallax__item__img", { scale: 13 })
        .to("#section8 .parallax__item__img", { autoAlpha: 0.2 })
        .from("#text8", { autoAlpha: 0 })
        .to("#text8", { autoAlpha: 1 });

    ScrollTrigger.create({
        animation: ani8,
        trigger: "#section8",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
            snapTo: 1,
            duration: { min: 0.1, max: 1 }
        }
    });

    // split-type 사용하기_2
    const targets = gsap.utils.toArray(".split");

    targets.forEach(target => {
        let SplitClient = new SplitType(target, { type: "lines, words, chars" });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;

        gsap.from(chars, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 2,
            ease: "circ.out",
            repeat: 3,
            stagger: {
                amount: 1,
                from: "random"
            },
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+=400"
            }
        });
    });


    // 메뉴 이동 효과
    let links = gsap.utils.toArray("#parallax__nav ul li a");

    links.forEach(link => {
        let element = document.querySelector(link.getAttribute("href"));
        let linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
        });

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => setActive(link)
        });

        link.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
        })
    });

    function setActive(link) {
        links.forEach(el => el.classList.remove("active"));
        link.classList.add("active");
    }


    // 스무스 효과
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        // console.log(e);
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    //==========================================


});