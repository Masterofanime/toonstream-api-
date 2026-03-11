const headers = {
  Referer: "https://megacloud.blog/"
};

const url =
  "https://crimsonstorm18.pro/_v7/c81e0320ba619de237ee247b52d3bdb125d2e6f8f49bde94765ddd259c441a7b92faaefc4917c4cbabf53cd36a63cfbec26505f439fcd2525310c275b3d7942932d3fcd5136d9a931f75ab667445d747e83a25d5a0d2dc0b98cb173c2015d2a62fe269a51444cf298e96fd54102abaf736138682fa5dbdfbd4ff5712f296e2a3/master.m3u8";

fetch(url, { method: "GET", headers })
  .then(async (res) => {
    console.log(res.status);
    return await res.text();
  })
  .then((text) => {
    console.log(text);
  });
