import cuid from 'cuid';

const renderPerformance = WrappedComponent => {
  const id = cuid();

  return class RenderPerformance extends WrappedComponent {
    static sourceComponentName = WrappedComponent.sourceComponentName || WrappedComponent.name;

    componentWillUpdate() {
      console.time(`${RenderPerformance.sourceComponentName} ${id} render time`);
      if (super.componentWillUpdate) super.componentWillUpdate();
    }

    componentDidUpdate() {
      console.timeEnd(`${RenderPerformance.sourceComponentName} ${id} render time`);
      if (super.componentDidUpdate) super.componentDidUpdate();
    }

    render() {
      return super.render();
    }
  }
};

export default renderPerformance;
