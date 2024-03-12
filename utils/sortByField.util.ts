export const sortByField = <T,>(array: T[], field?: keyof T) => {
  if (field) {
    return { ...array }.sort((a, b) => {
      if (a[field] && b[field] && typeof a[field] === 'number' && typeof b[field] === 'number') {
        return Number(a[field]) - Number(b[field]);
      }
      throw new Error(`Field ${JSON.stringify(field || '')} is not a number.`);
    });
  }

  return array;
}

sortByField([1, 2, 3])