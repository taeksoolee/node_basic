// Readline을 사용한 간단한 명령어 기반 사용자 인터페이스
var readline = require('readline');

var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">> What is the meaning of life? ", function(answer){
  console.log("About the meaning of life, you said " + answer);
  interface.setPrompt('>>');
  interface.prompt();
})

function closeInterface(){
  console.log('Leaving interface...');
  process.exit();
}

// .leave 수신대기
interface.on('line', function(cmd){
  if(cmd.trim() == '.leave'){
    closeInterface();
    return;
  }else {
    console.log('repeating command: ' + cmd);
  }

  interface.setPrompt('>>');
  interface.prompt();
});

interface.on('close', function(){
  closeInterface();
})