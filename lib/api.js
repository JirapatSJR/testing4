
export function getStrapiURL(path) {
    return `${
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
    }/api${path}`;
  }

export async function fetcher(url, options = {}) {
    let response;
    if(!options) {
        response = await(fetch(getStrapiURL(url), {cache: 'no-store'}))
    } else{
        response = await(fetch(getStrapiURL(url), options))
    }
    const data = await response.json();
    return data.data
}


export async function metafetcher(url, options = {}) {
    let response;
    if(!options) {
        response = await(fetch(getStrapiURL(url), {cache: 'no-store'}))
    } else{
        response = await(fetch(getStrapiURL(url), options))
    }
    const data = await response.json();
    return data
}


export async function postfetcher(url,body) {
    console.log(body)
    const response = await(fetch(getStrapiURL(url), {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}}))
    const data = await response.json();
    return data.data
}
