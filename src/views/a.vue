<template>
  <div class="guess-game">
    <div class="game-container">
      <h1 class="title">🎮 猜词游戏</h1>

      <!-- 游戏状态 -->
      <div class="status-bar">
        <div class="lives">
          <span>❤️ 剩余机会: {{ remainingAttempts }}</span>
        </div>
        <div class="score">
          <span>🏆 得分: {{ score }}</span>
        </div>
      </div>

      <!-- 词语显示区域 -->
      <div class="word-display">
        <div
          v-for="(letter, index) in displayWord"
          :key="index"
          class="letter-box"
          :class="{ revealed: letter !== '_' }"
        >
          {{ letter }}
        </div>
      </div>

      <!-- 已猜测的字母 -->
      <div class="guessed-letters">
        <p>已猜测的字母:</p>
        <div class="letters-grid">
          <span
            v-for="letter in guessedLetters"
            :key="letter"
            class="guessed-letter"
            :class="{ correct: currentWord.includes(letter), wrong: !currentWord.includes(letter) }"
          >
            {{ letter }}
          </span>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="input-area" v-if="gameStatus === 'playing'">
        <input
          v-model="currentGuess"
          @keyup.enter="makeGuess"
          type="text"
          maxlength="1"
          placeholder="输入一个字母"
          class="guess-input"
          ref="inputRef"
        />
        <button @click="makeGuess" class="guess-button">猜测</button>
      </div>

      <!-- 游戏结束提示 -->
      <div class="game-over" v-if="gameStatus !== 'playing'">
        <div class="result-message" :class="gameStatus">
          <h2 v-if="gameStatus === 'won'">🎉 恭喜你赢了！</h2>
          <h2 v-else>😢 游戏结束</h2>
          <p>正确答案是: <strong>{{ currentWord }}</strong></p>
          <p class="hint">{{ currentHint }}</p>
        </div>
        <button @click="startNewGame" class="restart-button">🔄 再来一局</button>
      </div>

      <!-- 提示按钮 -->
      <div class="hint-section" v-if="gameStatus === 'playing'">
        <button
          @click="showHint"
          class="hint-button"
          :disabled="hintUsed"
        >
          💡 {{ hintUsed ? '提示已使用' : '获取提示 (-1 ❤️)' }}
        </button>
        <p v-if="hintUsed" class="hint-text">{{ currentHint }}</p>
      </div>

      <!-- 字母键盘 -->
      <div class="keyboard">
        <div class="keyboard-row" v-for="(row, rowIndex) in keyboard" :key="rowIndex">
          <button
            v-for="letter in row"
            :key="letter"
            @click="guessLetter(letter)"
            class="keyboard-key"
            :class="{
              correct: guessedLetters.includes(letter) && currentWord.includes(letter),
              wrong: guessedLetters.includes(letter) && !currentWord.includes(letter),
              disabled: guessedLetters.includes(letter)
            }"
            :disabled="guessedLetters.includes(letter) || gameStatus !== 'playing'"
          >
            {{ letter }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

// 词库
const wordList = [
  { word: 'JAVASCRIPT', hint: '一种流行的前端编程语言' },
  { word: 'TYPESCRIPT', hint: 'JavaScript 的超集，增加了类型系统' },
  { word: 'COMPONENT', hint: 'Vue 中可复用的代码单元' },
  { word: 'ALGORITHM', hint: '解决问题的步骤和方法' },
  { word: 'DATABASE', hint: '存储和管理数据的系统' },
  { word: 'FUNCTION', hint: '可重复调用的代码块' },
  { word: 'VARIABLE', hint: '用于存储数据的容器' },
  { word: 'INTERFACE', hint: '定义对象结构的契约' },
  { word: 'PROMISE', hint: 'JavaScript 中处理异步操作的对象' },
  { word: 'REACTIVE', hint: 'Vue 3 的核心特性之一' },
  { word: 'TEMPLATE', hint: 'Vue 组件的 HTML 结构' },
  { word: 'COMPILER', hint: '将代码转换为机器可读形式的程序' },
  { word: 'INTERNET', hint: '全球计算机网络' },
  { word: 'KEYBOARD', hint: '你正在使用的输入设备' },
  { word: 'COMPUTER', hint: '电子计算设备' },
]

// 虚拟键盘布局
const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

// 游戏状态
const currentWord = ref('')
const currentHint = ref('')
const guessedLetters = ref<string[]>([])
const currentGuess = ref('')
const wrongAttempts = ref(0)
const maxAttempts = 8
const gameStatus = ref<'playing' | 'won' | 'lost'>('playing')
const score = ref(0)
const hintUsed = ref(false)
const inputRef = ref<HTMLInputElement>()

// 计算属性
const remainingAttempts = computed(() => maxAttempts - wrongAttempts.value)

const displayWord = computed(() => {
  return currentWord.value.split('').map(letter =>
    guessedLetters.value.includes(letter) ? letter : '_'
  )
})

const isWordGuessed = computed(() => {
  return currentWord.value.split('').every(letter => guessedLetters.value.includes(letter))
})

// 开始新游戏
function startNewGame() {
  const randomIndex = Math.floor(Math.random() * wordList.length)
  const selectedWord = wordList[randomIndex]

  currentWord.value = selectedWord.word.toUpperCase()
  currentHint.value = selectedWord.hint
  guessedLetters.value = []
  currentGuess.value = ''
  wrongAttempts.value = 0
  gameStatus.value = 'playing'
  hintUsed.value = false

  nextTick(() => {
    inputRef.value?.focus()
  })
}

// 猜测字母
function guessLetter(letter: string) {
  const upperLetter = letter.toUpperCase()

  if (guessedLetters.value.includes(upperLetter) || gameStatus.value !== 'playing') {
    return
  }

  guessedLetters.value.push(upperLetter)

  if (!currentWord.value.includes(upperLetter)) {
    wrongAttempts.value++
  }

  checkGameStatus()
}

// 从输入框猜测
function makeGuess() {
  if (!currentGuess.value) return

  const letter = currentGuess.value.toUpperCase()
  guessLetter(letter)
  currentGuess.value = ''
}

// 显示提示
function showHint() {
  if (hintUsed.value) return

  hintUsed.value = true
  wrongAttempts.value++

  if (wrongAttempts.value >= maxAttempts) {
    gameStatus.value = 'lost'
  }
}

// 检查游戏状态
function checkGameStatus() {
  if (isWordGuessed.value) {
    gameStatus.value = 'won'
    // 计算得分：剩余机会 * 10 + 词长 * 5
    score.value += remainingAttempts.value * 10 + currentWord.value.length * 5
    if (!hintUsed.value) {
      score.value += 50 // 未使用提示的奖励
    }
  } else if (wrongAttempts.value >= maxAttempts) {
    gameStatus.value = 'lost'
  }
}

// 初始化游戏
onMounted(() => {
  startNewGame()
})
</script>

<style scoped lang="less">
.guess-game {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.game-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.title {
  text-align: center;
  color: #667eea;
  margin: 0 0 30px 0;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.status-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 1.2em;
  font-weight: bold;

  .lives {
    color: #e74c3c;
  }

  .score {
    color: #f39c12;
  }
}

.word-display {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.letter-box {
  width: 50px;
  height: 60px;
  border: 3px solid #667eea;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  color: #667eea;
  background: #f8f9fa;
  transition: all 0.3s ease;

  &.revealed {
    background: #667eea;
    color: white;
    transform: rotateY(360deg);
    animation: reveal 0.5s ease;
  }
}

@keyframes reveal {
  0% {
    transform: scale(0.8) rotateY(0deg);
  }
  50% {
    transform: scale(1.1) rotateY(180deg);
  }
  100% {
    transform: scale(1) rotateY(360deg);
  }
}

.guessed-letters {
  margin: 30px 0;
  text-align: center;

  p {
    color: #666;
    margin-bottom: 15px;
    font-weight: bold;
  }
}

.letters-grid {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.guessed-letter {
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1em;

  &.correct {
    background: #2ecc71;
    color: white;
  }

  &.wrong {
    background: #e74c3c;
    color: white;
  }
}

.input-area {
  display: flex;
  gap: 15px;
  margin: 30px 0;
  justify-content: center;
}

.guess-input {
  width: 80px;
  height: 50px;
  font-size: 1.5em;
  text-align: center;
  border: 3px solid #667eea;
  border-radius: 10px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:focus {
    border-color: #764ba2;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
}

.guess-button {
  padding: 12px 30px;
  font-size: 1.1em;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

.game-over {
  text-align: center;
  margin: 30px 0;
}

.result-message {
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 20px;

  &.won {
    background: #d4edda;
    border: 2px solid #28a745;

    h2 {
      color: #28a745;
    }
  }

  &.lost {
    background: #f8d7da;
    border: 2px solid #dc3545;

    h2 {
      color: #dc3545;
    }
  }

  h2 {
    margin: 0 0 15px 0;
    font-size: 2em;
  }

  p {
    margin: 10px 0;
    font-size: 1.2em;
  }

  strong {
    color: #667eea;
    font-size: 1.3em;
  }

  .hint {
    color: #666;
    font-style: italic;
    margin-top: 15px;
  }
}

.restart-button {
  padding: 15px 40px;
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(245, 87, 108, 0.4);
  }
}

.hint-section {
  text-align: center;
  margin: 20px 0;
}

.hint-button {
  padding: 10px 25px;
  font-size: 1em;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #fbc531 0%, #e58e26 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(251, 197, 49, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.hint-text {
  margin-top: 15px;
  color: #e58e26;
  font-weight: bold;
  font-size: 1.1em;
  padding: 15px;
  background: #fff9e6;
  border-radius: 10px;
  border: 2px solid #fbc531;
}

.keyboard {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.keyboard-row {
  display: flex;
  gap: 6px;
}

.keyboard-key {
  width: 45px;
  height: 50px;
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  background: #e9ecef;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #dee2e6;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &.correct {
    background: #2ecc71;
    color: white;
    border-color: #27ae60;
  }

  &.wrong {
    background: #e74c3c;
    color: white;
    border-color: #c0392b;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@media (max-width: 768px) {
  .game-container {
    padding: 20px;
  }

  .title {
    font-size: 1.8em;
  }

  .letter-box {
    width: 40px;
    height: 50px;
    font-size: 1.5em;
  }

  .keyboard-key {
    width: 35px;
    height: 45px;
    font-size: 1em;
  }
}
</style>
