const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

export default findByTestAttribute;
