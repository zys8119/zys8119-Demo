"""批量把幼儿答题固定话术生成为 mp3，输出到 public/tts/。

用法：
  python3 -m venv /tmp/ttsenv && /tmp/ttsenv/bin/pip install edge-tts
  /tmp/ttsenv/bin/python tool/gen-tts.py

音色：zh-CN-XiaoyiNeural（活泼可爱的女声，适合小朋友）
"""
import asyncio
import hashlib
import os

import edge_tts

# 固定话术，文件名用短 hash 避免中文路径问题
LINES = [
    # 夸奖
    "太棒了，答对啦！",
    "真厉害，你数得真准！",
    "好样的，完全正确！",
    "你真是小棋手！",
    "漂亮，一下就数对了！",
    "真聪明，继续保持！",
    # 引导
    "再数一数，棋子旁边的空交叉点都算气哦",
    "别着急，看看棋子四周还有哪些空点",
    "慢慢数，一个一个来",
    "再仔细看看，气就在棋子旁边",
    # 通关
    "全部答对啦，你太棒了！",
    # 开关
    "声音打开啦",
]

VOICE = "zh-CN-XiaoyiNeural"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "tts")


def key_of(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest()[:10]


async def gen(text: str, path: str) -> None:
    # 语速略快、音调略高，更活泼
    comm = edge_tts.Communicate(text, VOICE, rate="+10%", pitch="+20Hz")
    await comm.save(path)


async def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for text in LINES:
        path = os.path.join(OUT_DIR, key_of(text) + ".mp3")
        if os.path.exists(path) and os.path.getsize(path) > 1024:
            print("skip", text)
            continue
        await gen(text, path)
        print("ok", os.path.getsize(path), text)


if __name__ == "__main__":
    asyncio.run(main())
