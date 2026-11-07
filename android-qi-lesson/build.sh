#!/usr/bin/env bash
# 一键构建「围棋第二课·气」安卓安装包
# 只打包该页面相关的资源：页面 JS/CSS + 12 个本地语音 mp3 + 原生 WebView 壳
#
# 用法：
#   ./build.sh          # 构建 release（自签名，可直接安装）
#   ./build.sh debug    # 构建 debug

set -euo pipefail
cd "$(dirname "$0")"

ROOT_DIR="$(pwd)"
WEB_DIR="$ROOT_DIR/web"
ANDROID_DIR="$ROOT_DIR/android"
SDK_DIR="${ANDROID_SDK_ROOT:-/opt/homebrew/share/android-commandlinetools}"
BUILD_TYPE="${1:-release}"

if [[ "$BUILD_TYPE" == "debug" ]]; then
  TASK="assembleDebug"
  OUT_NAME="qi-lesson-debug.apk"
  SRC="$ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
else
  TASK="assembleRelease"
  OUT_NAME="qi-lesson-release.apk"
  SRC="$ANDROID_DIR/app/build/outputs/apk/release/app-release.apk"
fi

echo "==> 1/4 同步页面源码（仅本页依赖）"
mkdir -p "$WEB_DIR/src" "$WEB_DIR/public/tts"
cp "$ROOT_DIR/../src/views/a.vue" "$WEB_DIR/src/App.vue"
cp "$ROOT_DIR/../src/components/GoBoard.vue" "$WEB_DIR/src/GoBoard.vue"
cp "$ROOT_DIR/../src/utils/kidFeedback.ts" "$WEB_DIR/src/kidFeedback.ts"
cp "$ROOT_DIR/../src/utils/celebrate.ts" "$WEB_DIR/src/celebrate.ts"
sed -i '' "s#'../components/GoBoard.vue'#'./GoBoard.vue'#; s#'../utils/kidFeedback'#'./kidFeedback'#; s#'../utils/celebrate'#'./celebrate'#" "$WEB_DIR/src/App.vue"
cp -R "$ROOT_DIR/../public/tts/." "$WEB_DIR/public/tts/"

echo "==> 2/4 构建 Web 产物"
(cd "$WEB_DIR" && npx vite build > /dev/null)

echo "==> 3/4 拷贝到 Android assets"
rm -rf "$ANDROID_DIR/app/src/main/assets/www"
mkdir -p "$ANDROID_DIR/app/src/main/assets"
cp -R "$WEB_DIR/dist" "$ANDROID_DIR/app/src/main/assets/www"

echo "==> 4/4 打包 APK (${BUILD_TYPE})"
echo "sdk.dir=$SDK_DIR" > "$ANDROID_DIR/local.properties"
if ! (cd "$ANDROID_DIR" && ./gradlew "$TASK" --offline --no-daemon --console=plain > /tmp/qi-build.log 2>&1); then
  echo "构建失败，日志：/tmp/qi-build.log"
  tail -20 /tmp/qi-build.log
  exit 1
fi

mkdir -p "$ROOT_DIR/dist"
cp "$SRC" "$ROOT_DIR/dist/$OUT_NAME"
echo "完成：$ROOT_DIR/dist/$OUT_NAME"
ls -lh "$ROOT_DIR/dist/$OUT_NAME"
