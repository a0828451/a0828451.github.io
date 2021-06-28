// 選擇遊戲難度設計
anime({
    targets: '.word',
    keyframes: [
        { translateY: '-25%' },
        { translateY: '25%', },
        { translateY: '0', }
    ],
    delay: anime.stagger(500),
    easing: 'easeInOutCirc',
    loop: true
})