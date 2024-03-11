export const toNumber = (index?: string, defaultValue: number = 1) => {
  const page = Number(index);
  const handleIndexPage = page && !isNaN(page) && typeof page === 'number' ? page : defaultValue;

  return handleIndexPage;
}