function Sort(dataToSort, firstSortCriterion, secondSortCriterion) {
  return dataToSort.sort((a, b) =>
    a[firstSortCriterion][secondSortCriterion] >
    b[firstSortCriterion][secondSortCriterion]
      ? 1
      : -1
  );
}

export default Sort;
