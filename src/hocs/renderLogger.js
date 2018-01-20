const renderLogger = WrappedComponent => {
  return class RenderLogger extends WrappedComponent {
    static sourceComponentName = WrappedComponent.sourceComponentName || WrappedComponent.name;

    render() {
      console.log('render', RenderLogger.sourceComponentName);
      return super.render();
    }
  }
};

export default renderLogger;
