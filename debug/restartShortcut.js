(() => {
  const reloadCombination = [38, 38, 40, 40, 37, 39];
  const sliceAmount = reloadCombination.length - 1;
  let currentCombination = [];

  const notify = () => {
    const messageNode = document.createElement('div');
    const messageText = 'Reloading...';
    messageNode.appendChild(document.createTextNode(messageText));

    Object.assign(messageNode.style, {
      position: 'fixed',
      top: '45%',
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      fontSize: '16px',
      background: 'rgba(220, 220, 220, 0.5)',
      zIndex: 999
    });

    document.body.appendChild(messageNode);
  };

  addEventListener('keydown', ({ keyCode }) => {
    currentCombination = currentCombination.slice(-1 * sliceAmount).concat(keyCode);

    const shouldReload = currentCombination.length === reloadCombination.length
      && currentCombination.every(
        (code, index) => code === reloadCombination[index]
      );

    if (shouldReload) {
      notify();
      location.reload();
    }
  });
})();
