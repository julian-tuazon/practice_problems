// Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

//   Examples
// subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

// subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

// subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"

function subReddit(link) {
  return link.slice(link.indexOf('/r/') + 3, link.length - 1);
}
