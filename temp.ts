//
//
//

console.log('Hello world');

async function foo() {
  return new Promise<string>((resolve, reject) => {
    if (!true) {
      resolve('success');
    } else {
      reject(-1);
    }
  });
}

async function main() {
  const yyy = await foo().catch(_ => _);
  console.log('yyy: ', yyy);
}

main();
