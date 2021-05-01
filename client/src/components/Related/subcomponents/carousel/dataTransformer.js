const deserialize = (data, outfitData) => {
  const { features } = data.product;
  const {
    relatedIds, relatedInformation, relatedStyles, relatedReviews,
  } = data.related;
  const { outfitInformation, outfitStyles, outfitReviews } = outfitData;
  const newSort = [];
  const newOutfitSort = [];
  for (let i = 0; i < relatedIds.length; i += 1) {
    for (let ii = 0; ii < relatedStyles[i].results.length; ii += 1) {
      if (relatedStyles[i].results[ii]['default?'] === true) {
        newSort.push({
          relatedInformation: relatedInformation[i],
          relatedStyles: relatedStyles[i],
          defaultStyle: relatedStyles[i].results[ii],
          reviews: relatedReviews[i],
        });
        break;
      } else if (ii === relatedStyles[i].results.length - 1 && newSort[i] === undefined) {
        newSort.push({
          relatedInformation: relatedInformation[i],
          relatedStyles: relatedStyles[i],
          defaultStyle: relatedStyles[i].results[0],
          reviews: relatedReviews[i],
        });
      }
    }
  }
  if (outfitInformation) {
    for (let i = 0; i < outfitInformation.length; i += 1) {
      newOutfitSort.push({
        outfitInformation: outfitInformation[i],
        outfitStyles: outfitStyles[i],
        reviews: outfitReviews[i],
      });
    }
  }
  const configuredFeatures = {};
  features.forEach((item) => {
    configuredFeatures[item.feature] = item.value;
  });
  if (outfitInformation === undefined) {
    return {
      sortedData: newSort,
      sortedOutfitData: newOutfitSort,
      overviewFeatures: configuredFeatures,
      nextVisible: relatedInformation.length > 4,
      nextOutfitVisible: false,
    };
  }
  return {
    sortedData: newSort,
    sortedOutfitData: newOutfitSort,
    overviewFeatures: configuredFeatures,
    nextVisible: relatedInformation.length > 4,
    nextOutfitVisible: outfitInformation.length > 3,
  };
};

export default deserialize;
