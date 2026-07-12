<template>
  <div class="min-h-screen bg-gradient-to-br from-sky-100 via-yellow-50 to-pink-100 p-4 text-slate-700 md:p-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-4 flex flex-col gap-4 rounded-8 bg-white/80 p-5 shadow-xl backdrop-blur md:flex-row md:items-center md:justify-between">
        <div class="flex-1">
          <div class="mb-2 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-500">
            儿童益智小游戏
          </div>
          <h1 class="text-3xl font-black text-slate-800 md:text-4xl">
            汽车升级小工坊
          </h1>
          <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">
            回答轻松小题目，收集小齿轮，帮小汽车一步步升级成超级赛车。
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 md:min-w-78">
          <div class="rounded-6 bg-yellow-100 p-3 text-center">
            <div class="text-xs text-yellow-700">小齿轮</div>
            <div class="mt-1 text-2xl font-black text-yellow-600">
              {{ gears }}
            </div>
          </div>
          <div class="rounded-6 bg-sky-100 p-3 text-center">
            <div class="text-xs text-sky-700">连对次数</div>
            <div class="mt-1 text-2xl font-black text-sky-600">
              {{ streak }}
            </div>
          </div>
          <div class="rounded-6 bg-pink-100 p-3 text-center">
            <div class="text-xs text-pink-700">智慧星</div>
            <div class="mt-1 text-2xl font-black text-pink-600">
              {{ stars }}
            </div>
          </div>
          <div class="rounded-6 bg-emerald-100 p-3 text-center">
            <div class="text-xs text-emerald-700">升级进度</div>
            <div class="mt-1 text-2xl font-black text-emerald-600">
              {{ totalLevel }}/{{ totalMaxLevel }}
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-5 xl:grid-cols-[1.05fr_1.2fr_1fr]">
        <section class="rounded-8 bg-white/85 p-5 shadow-xl backdrop-blur">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm font-bold text-violet-500">
                任务卡
              </div>
              <div class="mt-1 text-xl font-black text-slate-800">
                {{ currentQuestion.title }}
              </div>
            </div>
            <div class="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-600">
              {{ currentQuestion.label }}
            </div>
          </div>

          <div class="mt-5 rounded-7 bg-violet-50 p-4 text-lg font-bold leading-8 text-slate-700">
            {{ currentQuestion.prompt }}
          </div>

          <div class="mt-5 grid gap-3">
            <button
              v-for="option in currentQuestion.options"
              :key="option"
              type="button"
              class="rounded-6 border-3 px-4 py-4 text-left text-base font-bold transition-all duration-300"
              :class="getOptionClass(option)"
              :disabled="Boolean(selectedOption)"
              @click="answerQuestion(option)"
            >
              {{ option }}
            </button>
          </div>

          <div class="mt-5 rounded-7 p-4" :class="feedbackPanelClass">
            <div class="text-sm font-bold">
              {{ feedbackTitle }}
            </div>
            <div class="mt-2 text-sm leading-6">
              {{ feedbackText }}
            </div>
          </div>

          <div class="mt-5 flex gap-3">
            <button
              type="button"
              class="flex-1 rounded-full bg-slate-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              @click="nextQuestion"
            >
              换一题
            </button>
            <button
              type="button"
              class="flex-1 rounded-full bg-orange-400 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
              @click="resetGame"
            >
              重新开始
            </button>
          </div>
        </section>

        <section class="rounded-8 bg-white/85 p-5 shadow-xl backdrop-blur">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm font-bold text-sky-500">汽车展示区</div>
              <div class="mt-1 text-xl font-black text-slate-800">
                {{ carStageTitle }}
              </div>
            </div>
            <div class="rounded-full px-3 py-1 text-sm font-bold" :class="carStageBadgeClass">
              {{ completed ? "升级完成" : "正在改装" }}
            </div>
          </div>

          <div class="mt-5 rounded-[36px] bg-gradient-to-b from-sky-200 via-sky-100 to-lime-100 p-5">
            <div class="mb-4 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>完成所有部件升级，赛车就能出发。</span>
              <span>{{ completionPercent }}%</span>
            </div>

            <div class="mb-5 flex gap-2">
              <div
                v-for="step in totalMaxLevel"
                :key="step"
                class="h-3 flex-1 rounded-full"
                :class="step <= totalLevel ? 'bg-emerald-400' : 'bg-white/70'"
              />
            </div>

            <div class="relative mx-auto mt-2 h-74 w-full max-w-140 overflow-hidden rounded-[32px] bg-gradient-to-b from-white/50 to-sky-50 px-4 pt-10">
              <div class="absolute left-6 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-500 shadow">
                智慧星 {{ stars }}
              </div>

              <div class="absolute right-6 top-5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700 shadow">
                小齿轮 {{ gears }}
              </div>

              <div
                class="absolute bottom-20 left-1/2 h-3 w-52 -translate-x-1/2 rounded-full bg-slate-200/80 blur-sm transition-all duration-500"
                :class="shadowClass"
              />

              <div class="relative mx-auto mt-8 h-42 w-74">
                <div
                  v-if="upgradeState.power > 0"
                  class="absolute left-3 top-20 h-5 w-8 rounded-l-full bg-gradient-to-l from-orange-300 to-yellow-200 opacity-80"
                  :class="upgradeState.power > 1 ? 'w-11 from-orange-400 to-yellow-300' : ''"
                />

                <div
                  class="abs-end top-10 h-5 rounded-full bg-slate-500 transition-all duration-500"
                  :class="gadgetTopperClass"
                />

                <div
                  v-if="upgradeState.gadget > 0"
                  class="abs-end-bottom bottom-24 h-10 rounded-full bg-red-300 transition-all duration-500"
                  :class="gadgetRearClass"
                />

                <div
                  class="absolute left-15 top-5 h-13 w-32 rounded-t-[48px] rounded-b-2 bg-sky-100/90 transition-all duration-500"
                  :class="windowClass"
                />

                <div
                  class="absolute left-10 top-12 h-18 w-54 rounded-[30px] border-b-6 border-slate-700 transition-all duration-500"
                  :class="bodyClass"
                >
                  <div class="absolute left-4 top-4 h-2 w-16 rounded-full bg-white/50" />
                  <div class="absolute right-4 top-4 h-2 w-8 rounded-full bg-white/40" />
                  <div class="absolute left-26 top-0 h-full w-2 bg-white/35" />
                  <div
                    class="absolute right-2 top-7 h-7 w-4 rounded-r-full bg-yellow-200 shadow"
                    :class="upgradeState.gadget > 0 ? 'bg-yellow-300 shadow-lg shadow-yellow-200/60' : ''"
                  />
                  <div
                    class="absolute left-2 top-7 h-7 w-3 rounded-l-full bg-rose-200"
                    :class="upgradeState.gadget > 0 ? 'bg-rose-300' : ''"
                  />
                  <div class="absolute left-38 top-10 h-2 w-8 rounded-full bg-slate-700/40" />
                </div>

                <div
                  class="absolute bottom-0 left-12 rounded-full border-6 border-slate-700 bg-slate-900 transition-all duration-500"
                  :class="wheelClass"
                >
                  <div class="m-auto mt-2 rounded-full bg-slate-200" :class="wheelInnerClass" />
                </div>
                <div
                  class="absolute bottom-0 right-12 rounded-full border-6 border-slate-700 bg-slate-900 transition-all duration-500"
                  :class="wheelClass"
                >
                  <div class="m-auto mt-2 rounded-full bg-slate-200" :class="wheelInnerClass" />
                </div>
              </div>

              <div class="absolute bottom-8 left-0 w-full">
                <div class="mx-auto h-7 w-[88%] rounded-full bg-slate-500/90" />
                <div class="mx-auto mt-1 h-2 w-[96%] rounded-full bg-slate-400/70" />
              </div>
            </div>
          </div>

          <div class="mt-5 rounded-7 bg-sky-50 p-4">
            <div class="text-sm font-bold text-sky-600">当前提示</div>
            <div class="mt-2 text-sm leading-6 text-slate-600">
              {{ garageTip }}
            </div>
          </div>
        </section>

        <section class="rounded-8 bg-white/85 p-5 shadow-xl backdrop-blur">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm font-bold text-emerald-500">升级面板</div>
              <div class="mt-1 text-xl font-black text-slate-800">
                选择一个部件升级
              </div>
            </div>
            <div class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-600">
              可用齿轮 {{ gears }}
            </div>
          </div>

          <div class="mt-5 grid gap-3">
            <div
              v-for="part in upgradeParts"
              :key="part.key"
              class="rounded-7 border-2 p-4 transition-all duration-300"
              :class="partCardClass(part.key)"
            >
              <div class="flex items-center justify-between gap-3">
                <div>
                  <div class="text-base font-black text-slate-800">
                    {{ part.name }}
                  </div>
                  <div class="mt-1 text-sm leading-6 text-slate-500">
                    {{ part.description }}
                  </div>
                </div>
                <div class="rounded-full bg-white px-3 py-1 text-sm font-bold text-slate-600 shadow">
                  {{ upgradeState[part.key] }}/{{ maxPartLevel }}
                </div>
              </div>

              <div class="mt-4 flex gap-2">
                <div
                  v-for="step in maxPartLevel"
                  :key="`${part.key}-${step}`"
                  class="h-2 flex-1 rounded-full"
                  :class="step <= upgradeState[part.key] ? part.fillClass : 'bg-slate-200'"
                />
              </div>

              <div class="mt-4 flex items-center justify-between gap-3">
                <div class="text-sm font-bold text-slate-500">
                  <template v-if="upgradeState[part.key] >= maxPartLevel">
                    已经满级
                  </template>
                  <template v-else>
                    升级需要 {{ getUpgradeCost(part.key) }} 个小齿轮
                  </template>
                </div>
                <button
                  type="button"
                  class="rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-300"
                  :class="upgradeButtonClass(part.key)"
                  :disabled="!canUpgrade(part.key)"
                  @click="upgradePart(part.key)"
                >
                  {{ upgradeState[part.key] >= maxPartLevel ? "已完成" : "升级它" }}
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="completed"
            class="mt-5 rounded-7 bg-gradient-to-r from-emerald-400 to-sky-400 p-4 text-white shadow-lg"
          >
            <div class="text-lg font-black">
              超级赛车已经准备好了
            </div>
            <div class="mt-2 text-sm leading-6 text-white/95">
              你完成了所有升级任务，继续换题还能获得更多智慧星。
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" title="汽车升级小工坊" content="面向儿童益智的汽车升级小游戏" path="/car-upgrade-game">
type UpgradeKey = "power" | "wheel" | "paint" | "gadget";

type UpgradePart = {
  key: UpgradeKey;
  name: string;
  description: string;
  fillClass: string;
};

type QuestionCard = {
  id: number;
  label: string;
  title: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

const maxPartLevel = 2;

const upgradeParts: UpgradePart[] = [
  {
    key: "power",
    name: "动力引擎",
    description: "升级后小汽车更有力，跑得更稳。",
    fillClass: "bg-orange-400",
  },
  {
    key: "wheel",
    name: "强力轮胎",
    description: "升级后轮胎更大更结实，转起来更顺。",
    fillClass: "bg-slate-500",
  },
  {
    key: "paint",
    name: "亮彩车漆",
    description: "升级后车身颜色更亮，像新车一样闪闪发光。",
    fillClass: "bg-pink-400",
  },
  {
    key: "gadget",
    name: "酷炫配件",
    description: "升级后前灯和尾翼更帅气，更像超级赛车。",
    fillClass: "bg-sky-400",
  },
];

const createInitialUpgradeState = (): Record<UpgradeKey, number> => ({
  power: 0,
  wheel: 0,
  paint: 0,
  gadget: 0,
});

const upgradeState = reactive<Record<UpgradeKey, number>>(
  createInitialUpgradeState()
);

const gears = ref(0);
const stars = ref(0);
const streak = ref(0);
const selectedOption = ref("");
const questionSeed = ref(1);
const feedbackMode = ref<"idle" | "success" | "error">("idle");
const feedbackText = ref("先选一张任务卡，答对题目就能拿到小齿轮。");
const feedbackTitle = ref("准备开始");

const shuffle = <T,>(input: T[]) => {
  const list = [...input];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const index = Math.floor(Math.random() * (i + 1));
    [list[i], list[index]] = [list[index], list[i]];
  }
  return list;
};

const createAddQuestion = (): QuestionCard => {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 4) + 1;
  const answer = String(a + b);
  const options = shuffle([
    answer,
    String(a + b + 1),
    String(Math.max(0, a + b - 1)),
  ]);
  return {
    id: questionSeed.value++,
    label: "算一算",
    title: "数字加油站",
    prompt: `${a} + ${b} 等于几？`,
    options,
    answer,
    explanation: `${a} 加上 ${b}，一共是 ${answer}。`,
  };
};

const createSubtractQuestion = (): QuestionCard => {
  const a = Math.floor(Math.random() * 5) + 5;
  const b = Math.floor(Math.random() * 4) + 1;
  const answer = String(a - b);
  const options = shuffle([
    answer,
    String(a - b + 1),
    String(Math.max(0, a - b - 1)),
  ]);
  return {
    id: questionSeed.value++,
    label: "减一减",
    title: "数字修理台",
    prompt: `${a} - ${b} 等于几？`,
    options,
    answer,
    explanation: `${a} 减去 ${b}，答案是 ${answer}。`,
  };
};

const createCompareQuestion = (): QuestionCard => {
  const left = Math.floor(Math.random() * 9) + 1;
  let right = Math.floor(Math.random() * 9) + 1;
  if (left === right) {
    right = right === 9 ? 8 : right + 1;
  }
  const answer = String(Math.max(left, right));
  return {
    id: questionSeed.value++,
    label: "比大小",
    title: "数字观察眼",
    prompt: `数字 ${left} 和 ${right}，哪一个更大？`,
    options: shuffle([String(left), String(right), "一样大"]),
    answer,
    explanation: `${answer} 更大，所以它能带来更多能量。`,
  };
};

const createTrafficQuestion = (): QuestionCard => {
  const options = shuffle(["停下来", "快快冲", "闭上眼"]);
  return {
    id: questionSeed.value++,
    label: "安全常识",
    title: "交通小课堂",
    prompt: "红灯亮了，小朋友应该怎么做？",
    options,
    answer: "停下来",
    explanation: "红灯停，绿灯行，过马路时要注意安全。",
  };
};

const createShapeQuestion = (): QuestionCard => {
  const options = shuffle(["圆形", "三角形", "正方形"]);
  return {
    id: questionSeed.value++,
    label: "认识形状",
    title: "轮胎小秘密",
    prompt: "下面哪一个形状最像汽车的轮胎？",
    options,
    answer: "圆形",
    explanation: "轮胎是圆圆的，所以正确答案是圆形。",
  };
};

const questionFactories = [
  createAddQuestion,
  createSubtractQuestion,
  createCompareQuestion,
  createTrafficQuestion,
  createShapeQuestion,
];

const createQuestion = () => {
  const factory =
    questionFactories[Math.floor(Math.random() * questionFactories.length)];
  return factory();
};

const currentQuestion = ref<QuestionCard>(createQuestion());

const totalLevel = computed(() =>
  upgradeParts.reduce((sum, part) => sum + upgradeState[part.key], 0)
);

const totalMaxLevel = upgradeParts.length * maxPartLevel;

const completed = computed(() => totalLevel.value >= totalMaxLevel);

const completionPercent = computed(() =>
  Math.round((totalLevel.value / totalMaxLevel) * 100)
);

const recommendedPart = computed<UpgradeKey | null>(() => {
  const nextPart = upgradeParts.find(
    (part) => upgradeState[part.key] < maxPartLevel
  );
  return nextPart?.key || null;
});

const carStageTitle = computed(() => {
  if (completed.value) {
    return "超级智慧赛车";
  }
  if (totalLevel.value >= 6) {
    return "闪亮冲刺赛车";
  }
  if (totalLevel.value >= 3) {
    return "快乐升级小汽车";
  }
  return "等待升级的小车";
});

const garageTip = computed(() => {
  if (completed.value) {
    return "所有部件都升级好了，继续答题可以积累更多智慧星。";
  }
  if (!recommendedPart.value) {
    return "所有部件都已经完成升级。";
  }
  const part = upgradeParts.find((item) => item.key === recommendedPart.value);
  const cost = getUpgradeCost(recommendedPart.value);
  return `推荐先升级“${part?.name}”，还需要 ${cost} 个小齿轮。`;
});

const bodyClassMap = [
  "bg-gradient-to-r from-orange-300 to-orange-400",
  "bg-gradient-to-r from-fuchsia-300 to-rose-400",
  "bg-gradient-to-r from-cyan-300 to-blue-400",
];

const windowClassMap = [
  "border-3 border-sky-200",
  "border-3 border-sky-300 shadow-sm",
  "border-3 border-sky-400 shadow-md",
];

const wheelClassMap = ["h-14 w-14", "h-16 w-16", "h-18 w-18"];
const wheelInnerClassMap = ["h-5 w-5", "h-6 w-6", "h-7 w-7"];
const gadgetTopperClassMap = ["w-10", "w-16 bg-slate-600", "w-20 bg-slate-700"];
const gadgetRearClassMap = ["w-0", "w-10", "w-14 bg-red-400"];
const shadowClassMap = ["w-52", "w-56 bg-slate-300/90", "w-60 bg-slate-400/90"];

const bodyClass = computed(() => bodyClassMap[upgradeState.paint]);
const windowClass = computed(() => windowClassMap[upgradeState.paint]);
const wheelClass = computed(() => wheelClassMap[upgradeState.wheel]);
const wheelInnerClass = computed(() => wheelInnerClassMap[upgradeState.wheel]);
const gadgetTopperClass = computed(
  () => gadgetTopperClassMap[upgradeState.gadget]
);
const gadgetRearClass = computed(() => gadgetRearClassMap[upgradeState.gadget]);
const shadowClass = computed(() => shadowClassMap[upgradeState.power]);

const carStageBadgeClass = computed(() =>
  completed.value
    ? "bg-emerald-100 text-emerald-600"
    : "bg-sky-100 text-sky-600"
);

const feedbackPanelClass = computed(() => {
  if (feedbackMode.value === "success") {
    return "bg-emerald-100 text-emerald-700";
  }
  if (feedbackMode.value === "error") {
    return "bg-orange-100 text-orange-700";
  }
  return "bg-slate-100 text-slate-600";
});

const getUpgradeCost = (key: UpgradeKey) => {
  return upgradeState[key] + 1;
};

const canUpgrade = (key: UpgradeKey) => {
  return (
    upgradeState[key] < maxPartLevel && gears.value >= getUpgradeCost(key)
  );
};

const answerQuestion = (option: string) => {
  if (selectedOption.value) {
    return;
  }

  selectedOption.value = option;

  if (option === currentQuestion.value.answer) {
    gears.value += 1;
    stars.value += 1;
    streak.value += 1;
    feedbackMode.value = "success";
    feedbackTitle.value = "答对啦";
    feedbackText.value = `${currentQuestion.value.explanation} 你获得了 1 个小齿轮。`;
    return;
  }

  streak.value = 0;
  feedbackMode.value = "error";
  feedbackTitle.value = "再想一想";
  feedbackText.value = `${currentQuestion.value.explanation} 正确答案是“${currentQuestion.value.answer}”。`;
};

const nextQuestion = () => {
  currentQuestion.value = createQuestion();
  selectedOption.value = "";
  feedbackMode.value = "idle";
  feedbackTitle.value = "新的任务卡";
  feedbackText.value = "选一个你觉得对的答案吧，答对就能拿到小齿轮。";
};

const upgradePart = (key: UpgradeKey) => {
  if (!canUpgrade(key)) {
    return;
  }

  const cost = getUpgradeCost(key);
  gears.value -= cost;
  upgradeState[key] += 1;
  feedbackMode.value = "success";
  feedbackTitle.value = "升级成功";
  feedbackText.value = `“${
    upgradeParts.find((part) => part.key === key)?.name
  }”已经升级，汽车变得更厉害了。`;
};

const getOptionClass = (option: string) => {
  if (!selectedOption.value) {
    return "border-violet-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50";
  }

  if (option === currentQuestion.value.answer) {
    return "border-emerald-400 bg-emerald-100 text-emerald-700";
  }

  if (option === selectedOption.value) {
    return "border-orange-400 bg-orange-100 text-orange-700";
  }

  return "border-slate-200 bg-slate-100 text-slate-400";
};

const partCardClass = (key: UpgradeKey) => {
  return recommendedPart.value === key && !completed.value
    ? "border-emerald-300 bg-emerald-50"
    : "border-slate-200 bg-white";
};

const upgradeButtonClass = (key: UpgradeKey) => {
  if (upgradeState[key] >= maxPartLevel) {
    return "cursor-default bg-slate-300";
  }
  if (canUpgrade(key)) {
    return "bg-emerald-500 hover:bg-emerald-600";
  }
  return "bg-slate-300";
};

const resetGame = () => {
  gears.value = 0;
  stars.value = 0;
  streak.value = 0;
  selectedOption.value = "";
  feedbackMode.value = "idle";
  feedbackTitle.value = "重新开始";
  feedbackText.value = "新的汽车已经进厂，继续完成任务吧。";
  currentQuestion.value = createQuestion();

  upgradeParts.forEach((part) => {
    upgradeState[part.key] = 0;
  });
};
</script>
