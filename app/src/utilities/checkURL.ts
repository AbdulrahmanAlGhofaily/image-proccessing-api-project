function checkURL(queryObj: object): object {
  // Check if needed parameters exist (Could be solved using custom type)
  if (
    !queryObj.hasOwnProperty('imageName') ||
    !queryObj.hasOwnProperty('height') ||
    !queryObj.hasOwnProperty('width')
  )
    throw new Error(
      'To resize an image, you need to pass imageName, height and width.'
    );
  return queryObj;
}

export default checkURL;
