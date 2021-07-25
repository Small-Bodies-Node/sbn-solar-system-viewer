const xxx = 'This is xxx ';

//actual function (must be a named function declaration for use w/ toString here)
function addOne(x: number) {
  // return x + 1;
  return xxx;
}

console.log('xxx.toString()', xxx.toString(), addOne.toString());

//the actual worker code can be written as a string
//template literals make that convienient because they support multiline
//note that the addOne function above can be used in this worker code, since we'll be importing it
const workerScript = `
self.addEventListener('message', function(e) {
  var data = e.data;
  console.log('worker recieved: ',data);
  self.postMessage('worker added! :'+ addOne(data.value));
}, false);
`;

//main function for creating an inline worker:
//inlineWorker:: Array -> String -> a -> Promise b
const inlineWorker = (
  constDependencies: any[] = [],
  functionDependencies: any[] = [],
  scriptString: string,
  msg: any
) => {
  scriptString = constDependencies.reduce((acc, item) => {
    return acc + getVarString(item);
  }, '');
  functionDependencies.reduce((acc, item) => acc + item.toString(), '') +
    scriptString;

  //promisify the response/error for make things easier to consume
  const promise = new Promise((resolve, reject) => {
    var blob = new Blob([scriptString], { type: 'text/javascript' });
    var bloblurl = window.URL.createObjectURL(blob);
    var worker = new Worker(bloblurl);

    worker.onmessage = e => {
      resolve(e.data);
      window.URL.revokeObjectURL(bloblurl); //remember to free up the blob url as well
      worker.terminate();
    };
    worker.onerror = e => {
      reject(e);
      worker.terminate();
    };

    worker.postMessage(msg);
  });

  return promise;
};

inlineWorker([xxx], [addOne], workerScript, { msg: 'hi', value: 6 }).then(x =>
  console.log('msg returned: ', x)
);

function getVarString(variable: any) {
  const variableName = Object.keys({ variable }).pop();
  return `const ${variableName} = ${variable};`;
}
