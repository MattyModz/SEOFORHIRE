//  Makes request to wordpress endpoint url inc any queys / variables and handles response

const WP_API = process.env.WP_URL;

async function fetcher(query, { variables } = {}) {
  const res = await fetch(WP_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json;
}

export default fetcher;
