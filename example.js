
function fn1 (data) {
  const something = data.something;

  return Promise.resolve(something);
}

async function fn2 (data) {
  const something = data.something;

  return Promise.resolve(something);
}

fn1().catch(() => console.log('error in fn1'));
fn2().catch(() => console.log('error in fn2'));