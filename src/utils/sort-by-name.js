const sortByName = (current, next, type) => {
  const currentSortCode = current.name.toLowerCase().charCodeAt(0);
  const nextSortCode = next.name.toLowerCase().charCodeAt(0);
  return type === 'alphabet' ? currentSortCode - nextSortCode : nextSortCode - currentSortCode;
}

export default sortByName;