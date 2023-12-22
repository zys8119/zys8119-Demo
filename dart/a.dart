import 'dart:async';

class EventStreamController {
  StreamController _controller = StreamController.broadcast();

  Stream get stream => _controller.stream;

  sendMessage(dynamic msg) {
    _controller.sink.add(msg);
  }

  closeStream() {
    _controller.close();
  }
}

void main() async{
  final  a= new EventStreamController();
  a.stream.listen((event) {
    print(event!+(111).toString());
  });
  a.sendMessage('asdas');
  a.sendMessage('asdas');
  a.sendMessage('asdas');
  a.sendMessage('asdas');
}
