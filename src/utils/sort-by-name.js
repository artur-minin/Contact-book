const sortByName = (a, b, type) => {
  const aSortCode = a.name.toLowerCase().charCodeAt(0);
  const bSortCode = b.name.toLowerCase().charCodeAt(0);
  return type === 'alphabet' ? aSortCode - bSortCode : bSortCode - aSortCode;
}

export default sortByName;