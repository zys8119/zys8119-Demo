<template>
    <div class='calc abs-content'>
        <div class="container">
            <h1>可爱的数学题</h1>
            <div class="question">5 + 3 = ?</div>

            <div class="input-container">
                <input @keyup.enter="checkAnswer" v-model="answer" type="number" placeholder="你的答案">
            </div>
            <button @click="checkAnswer">提交</button>
            <div class="feedback" id="feedback"></div>
        </div>

    </div>
</template>
<script setup lang="ts">
const answer = ref<number>()
const speak = (text: string) => {
    speechSynthesis.cancel()
    setTimeout(() => {
        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = 0.7
        speechSynthesis.speak(msg);
    })
}
function checkAnswer() {
    const correctAnswer = 8;  // 题目答案是 5 + 3 = 8
    const feedback = document.getElementById('feedback');

    if (answer.value == correctAnswer) {
        feedback.innerHTML = '<span class="happy-face">😊</span> 太棒了！答对啦！';
        speak('太棒了！答对啦！')
    } else {
        feedback.innerHTML = '<span class="sad-face">😢</span> 再试试哦，加油！';
        speak('再试试哦，加油！')
    }
}
function generateRandomQuestionsWithAnswers(numOfQuestions, operators, range, minLength, maxLength, ensureIntegers = true) {
  const questionsWithAnswers = [];

  // 随机生成数字的函数
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // 随机生成运算符的函数
  const randomOperator = () => operators[randomInt(0, operators.length - 1)];

  // 循环生成多个题目
  for (let i = 0; i < numOfQuestions; i++) {
    let expression = '';
    let currentResult = randomInt(range.min, range.max);  // 先生成第一个数字作为初始值
    expression += currentResult;  // 加入到等式里

    // 决定等式的长度
    const expressionLength = randomInt(minLength, maxLength);  // 确定等式的长度
    
    // 生成等式（包括运算符和接下来的数字）
    for (let j = 1; j < expressionLength; j++) {
      const operator = randomOperator();
      let nextNum = randomInt(range.min, range.max);
      
      // 如果需要确保整数，并且运算符是除法
      if (ensureIntegers && operator === '/') {
        // 找到一个可以被 currentResult 整除的 nextNum
        if (currentResult !== 0) {
          nextNum = randomInt(1, Math.min(range.max, currentResult));  // 除数不能超过被除数
          while (currentResult % nextNum !== 0) {
            nextNum = randomInt(1, Math.min(range.max, currentResult));
          }
        }
      }

      // 将运算符和数字加入等式
      expression += ` ${operator} ${nextNum}`;

      // 计算正确答案
      if (operator === '+') currentResult += nextNum;
      if (operator === '-') currentResult -= nextNum;
      if (operator === '*') currentResult *= nextNum;
      if (operator === '/') {
        if (nextNum !== 0) {
          currentResult /= nextNum;
        } else {
          currentResult = 'undefined';  // 防止除以 0
        }
      }
    }

    // 存储算式及其答案
    questionsWithAnswers.push({
      question: expression,
      answer: currentResult
    });
  }

  return questionsWithAnswers;
}



onMounted(() => {

// 示例使用：生成 3 个算式，确保所有结果是整数
const operators = ['+', '-', '*', '/'];
const range = { min: 1, max: 10 };
const numOfQuestions = 3;
const minLength = 2;  // 最短长度
const maxLength = 4;  // 最长长度
const ensureIntegers = true;  // 确保所有结果都是整数

const randomQuestionsWithAnswers = generateRandomQuestionsWithAnswers(numOfQuestions, operators, range, minLength, maxLength, ensureIntegers);
console.log(randomQuestionsWithAnswers);

})
</script>
<style scoped lang="less">
.calc {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    text-align: center;
    background-color: #fff9e6;
    border: 2px solid #ffcc00;
    border-radius: 20px;
    padding: 20px;
    width: 350px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    margin: auto;
}

h1 {
    font-size: 28px;
    color: #ff9900;
}

.question {
    font-size: 24px;
    margin: 20px 0;
    color: #333;
}

.input-container {
    margin: 20px 0;
}

input {
    font-size: 22px;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    border: 2px solid #ffcc00;
    text-align: center;
}

button {
    font-size: 20px;
    background-color: #ffcc00;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #ffa500;
}

.feedback {
    font-size: 20px;
    margin-top: 20px;
}

.happy-face {
    font-size: 50px;
    color: #32cd32;
}

.sad-face {
    font-size: 50px;
    color: #ff4500;
}
</style>