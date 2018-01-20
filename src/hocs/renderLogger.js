const renderLogger = WrappedComponent => {
  return class RenderLogger extends WrappedComponent {
    render() {
      console.log('render', super.constructor.name);
      return super.render();
    }
  }
};

export default renderLogger;
