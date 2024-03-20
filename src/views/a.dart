
class TaskProClass {

  List<Function> tasks = [];

  addTask(Function task) {
    tasks.add(task);
  }

  run() {
    var index = 0;

    void runNext() {
      if (index < tasks.length) {
        tasks[index++](() async{
        });
        runNext();
      }
    }

    runNext();
  }
}

TaskProClass TaskPro(){
  return new TaskProClass();
}

void main() async{
  final t = TaskPro();
  t.addTask((next) async{
    print(1);
    print('start');
    await next();
    print(1);
    print('end');
  });
  t.addTask((next) async{
    print(222);
  });
  t.addTask((next) async{
    print(3333);
  });
  t.run(); // 1 start, 2, 3, 1 end
}

