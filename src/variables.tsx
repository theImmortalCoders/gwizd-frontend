const state = 2;

const apiDomains = {
  1: "https://api.gwizd.online",
  2: "http://localhost:8080",
};

const apiDomain = apiDomains[state];
const domain = "http://localhost:3000";

export { apiDomain, domain };
