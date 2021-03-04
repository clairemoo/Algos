function validateBst(tree) {
    return helperFunc(tree, -Infinity, Infinity)
  }
  
  function helperFunc(tree, minValue, maxValue) {
      if (tree === null) return true;
      if (tree.value < minValue || tree.value >= maxValue) return false;
      let leftIsValid = helperFunc(tree.left, minValue, tree.value);
      return leftIsValid && helperFunc(tree.right, tree.value, maxValue);
  }