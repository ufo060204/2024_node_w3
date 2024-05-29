function handleSuccess(res, data) {
  // res.writeHead(200, headers);
  // res.write(
  //   JSON.stringify({
  //     status: "success",
  //     data: data,
  //   })
  // );
  // .status(200) 可以不用寫
  // res.status(200).send({

  // 寫 json
  // res.json({
  //   status: true,
  //   data,
  // })

  // 寫 send 優勢
  //  傳入的型別來決定回傳的格式
  // String => HTML <h1>Hello World</h1>
  // Array or Object => JSON
  // res.end(); 自動會戴上

  res.send({
    status: true,
    data,
  })
  res.end();
}
module.exports = handleSuccess;