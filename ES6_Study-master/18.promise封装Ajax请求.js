function myNewAjax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          // console.log(xhr.response);
          resolve(xhr.response);
        } else {
          // console.error(xhr.status);
          reject(xhr.status);
        }
      }
    };
  });
}
const p = myNewAjax("https://api.apiopen.top/getJoke");
p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
