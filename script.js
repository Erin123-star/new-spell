let score = 0;
let timeLeft = 30;
let selectedRadical = '氵';  // 当前偏旁

// 初始化
document.getElementById('radicalText').innerText = selectedRadical;

// 倒计时逻辑
const timer = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
    } else {
        clearInterval(timer);
        alert("时间结束！");
    }
}, 1000);

// 更新分数
function updateScore(points) {
    score += points;
    document.getElementById('scoreValue').innerText = score;
}

// 为每个字符添加点击事件
document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('click', () => {
        // 假设点击正确字符加1分，错误字符扣1分（逻辑可自定义）
        if (isCorrect(character.innerText)) {
            updateScore(1);
        } else {
            updateScore(-1);
        }
    });
});

// 简单的判断逻辑，手动设定正确组合
function isCorrect(char) {
    const correctCombinations = {
        '氵': ['木', '日', '口', '车']  // 暂时假设这些是是对的 待引入库确认 不会啊啊啊啊啊啊啊啊 为什么老祖宗给这么多字啊
    };

    return correctCombinations[selectedRadical]?.includes(char) || false;
}
