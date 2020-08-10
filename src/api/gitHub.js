function createIssuesURL(query) {
  return `https://api.github.com/search/issues?q=$(query)`;
}

export async function getIssues(query) {
  const url = createIssuesURL(query);
  {
  }
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
