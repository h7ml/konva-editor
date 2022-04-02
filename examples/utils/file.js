/**
 * @docs-api https://konvajs.org/docs/data_and_serialization/High-Quality-Export.html
 * @function from https://stackoverflow.com/a/15832662/512042
 * @param uri
 * @param name
 */
async function downloadURI(uri, name) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
module.exports = { downloadURI };