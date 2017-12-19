console.log = (() => {
  const debugNode = document.createElement('div');
  const debugHeaderText = 'debug log:';
  const debugRecords = [];

  debugNode.classList.add('debug-node');
  debugNode.appendChild(document.createTextNode(debugHeaderText));

  Object.assign(debugNode.style, {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '10px',
    fontSize: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999
  });

  document.body.appendChild(debugNode);

  return (...args) => {
    const bottomPosition = debugNode.lastChild.offsetTop + 2 * debugNode.lastChild.offsetHeight;

    const message = args.reduce((msg, arg) => msg.concat(arg, ' '), '').slice(0, -1);
    const previousRecord = debugRecords[debugRecords.length - 1] || {};

    if (previousRecord.message === message) previousRecord.count++;
    else {
      if (bottomPosition > window.innerHeight) debugRecords.shift();
      debugRecords.push({ message, count: 1 });
    }

    debugNode.innerHTML = debugRecords.reduce((html, rec) => html.concat(
      `<div ${rec.message.indexOf('Error:') !== -1 ? 'style="color: red"' : ''}>`,
      rec.message,
      rec.count > 1 ? ' x' + rec.count : '',
      '</div>'
    ), debugHeaderText);
  };
})();

console.error = (...args) => console.log(
  ...args.map(arg => arg instanceof Error ? arg.toString() : arg)
);

window.addEventListener('error', ({ error }) => console.error(error));
