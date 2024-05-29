const handleError = (res, err) => {
  let message = "";
  if (err) {
    message = err.message;
  } else {
    message = "欄位未填寫正確，或無此 id";
  }
  // 寫 send 優勢
  //  傳入的型別來決定回傳的格式
  // String => HTML <h1>Hello World</h1>
  // Array or Object => JSON
  // res.end(); 自動會戴上
  res.status(400).send({
    status: true,
    message,
  });
  res.end();
}

module.exports = handleError;