import 'dart:async';
import 'dart:collection';
import 'dart:math';

void main() async {
  // 并发任务数限制
  final int maxConcurrent = 3;

  // 模拟的任务列表
  final List<Future<void>> tasks = List.generate(10, (index) => _fetchData(index));

  // 使用自定义队列管理并发
  await _executeWithConcurrencyControl(tasks, maxConcurrent);

  print('所有任务已完成！');
}

// 自定义并发控制执行函数
Future<void> _executeWithConcurrencyControl(
    List<Future<void>> tasks,
    int maxConcurrent,
    ) async {
  // 使用双端队列来管理任务，方便添加和移除
  final Queue<Future<void>> queue = Queue.from(tasks);

  // 当前线程执行的任务计数
  int runningCount = 0;

  // 任务执行循环
  while (queue.isNotEmpty || runningCount > 0) {
    // 尝试从队列中取出任务执行，直到达到并发限制
    while (runningCount < maxConcurrent && queue.isNotEmpty) {
      final task = queue.removeFirst();
      runningCount++;
      task.then((_) {
        print('一个任务完成');
        runningCount--;
      });
    }

    // 如果队列为空且没有正在运行的任务，则跳出循环
    if (queue.isEmpty && runningCount == 0) break;

    // 稍作等待，避免忙等待
    await Future.delayed(const Duration(milliseconds: 100));
  }
}

// 模拟的异步任务
Future<void> _fetchData(int taskId) async {
  final delay = Duration(milliseconds: Random().nextInt(2000) + 1000);
  print('任务 $taskId 开始，预计耗时 ${delay.inMilliseconds}ms');
  await Future.delayed(delay);
  print('任务 $taskId 完成');
}
