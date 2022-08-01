// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const SANITY_PREVIEW_SECRET = "mlrfhnjcRI";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `http://localhost:3000`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  switch (doc._type) {
    case "job":
      return `http://localhost:3000/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=job/${doc.slug.current}`;
  }
  switch (doc._type) {
    case "candidate":
      return `http://localhost:3000/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=candidate/${doc.slug.current}`;
  }
  switch (doc._type) {
    case "post":
      return `http://localhost:3000/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=post/${doc.slug.current}`;
  }
  switch (doc._type) {
    case "policy":
      return `http://localhost:3000/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=policy/${doc.slug.current}`;
  }
}

// `/post/${doc?.slug?.current}`;
// const baseUrl = remoteUrl;
// // window.location.hostname === "localhost" ? localUrl : remoteUrl;

// const previewUrl = new URL(baseUrl);

// previewUrl.pathname = `/api/preview`;
// previewUrl.searchParams.append(`secret`, SANITY_PREVIEW_SECRET);
// previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

// return previewUrl.toString();
