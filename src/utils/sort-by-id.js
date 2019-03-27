const sortById = (current, next, type) => {
  const currentItmId = current.id;
  const nextItmId = next.id;
  return type === 'ascending' ? currentItmId - nextItmId : nextItmId - currentItmId;
}

export default sortById;