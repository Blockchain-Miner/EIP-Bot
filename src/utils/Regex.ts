/** matches correctly formatted filenames */
export const FILE_RE = /^EIPS\/eip-(\d+)\.md$/gm;
/** matches authors names formated like (...) */
export const AUTHOR_RE = /[(<]([^>)]+)[>)]/gm;
/** to find the EIP number in a file name */
export const EIP_NUM_RE = /eip-(\d+)\.md/;

/**
 * This functionality is supported in es2020, but for the purposes
 * of compatibility (and because it's quite simple) it's built explicitly
 */
export const matchAll = (
  rawString: string,
  regex: RegExp,
  group: number
): string[] => {
  let match = regex.exec(rawString);
  let matches: string[] = [];
  while (match != null) {
    const matchedGroup = match[group]
    if (matchedGroup === undefined) continue;
    matches.push(matchedGroup);
    match = regex.exec(rawString);
  }
  return matches;
};
