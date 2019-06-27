const example = document.getElementById("example");
const code = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>example</title>
    <link href="path/to/style.css" rel="stylesheet">
    <script src="path/to/signal.js"></script>
  </head>
  <body>
    <script>
     document.body.appendChild(
       new Signal(
         [
           ["SG1",, "SY2",, "SR3"],
           ["AG4",, "WG5",, "DG6"]
         ],
         [
           [[3, 4, 5], 6],
           [[2], 3],
           [[3, 6], 3],
           [[2], 3],
           [[3], 6]
         ],
         // color指定は省略すると"#eee"になります
         {
           color: "#642"
         }
       )
     );
    </script>
  </body>
</html>
`;
example.innerHTML = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

document.getElementById("code").appendChild(
  new Signal(
    [
      ["SG1",, "SY2",, "SR3"],
      ["AG4",, "WG5",, "DG6"]
    ],
    [
      [[3, 4, 5], 6],
      [[2], 3],
      [[3, 6], 3],
      [[2], 3],
      [[3], 6]
    ],
    {
      color: "#642"
    }
  )
);
