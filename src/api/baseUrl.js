/* eslint-disable no-console */

export default function getBaseUrl(){
  console.log("called get base url");
  const isDevelopment = window.location.hostname == "localhost";
  return isDevelopment ? "http://localhost:3004/" : "/";
}
