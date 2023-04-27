function handleCollapseToggle(index, collapseStates, setCollapseStates) {
  setCollapseStates((prevState) =>
    prevState.map((state, i) => {
      if (i === index && state) {
        return { ...state, isOpen: !state.isOpen };
      }
      return state;
    })
  );
}

export default handleCollapseToggle;
