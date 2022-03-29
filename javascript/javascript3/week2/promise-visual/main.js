const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redBoxX = 20 - parseInt(redBox.style.left);
const redBoxY = 300 - parseInt(redBox.style.top);

const blueBoxX = 400 - parseInt(blueBox.style.left);
const blueBoxY = 300 - parseInt(blueBox.style.top);

const greenBoxX = 400 - parseInt(greenBox.style.left);
const greenBoxY = 20 - parseInt(greenBox.style.top);

function oneOne() {
  moveElement(greenBox, {
    x: greenBoxX,
    y: greenBoxY,
  })
    .then(() =>
      moveElement(blueBox, {
        x: blueBoxX,
        y: blueBoxY,
      })
    )
    .then(() =>
      moveElement(redBox, {
        x: redBoxX,
        y: redBoxY,
      })
    )
    .then(() => {
      console.log(`Done`);
    });
}

oneOne();

// function All() {
//   Promise.all([
//     moveElement(greenBox, {
//       x: greenBoxX,
//       y: greenBoxY,
//     }),
//     moveElement(blueBox, {
//       x: blueBoxX,
//       y: blueBoxY,
//     }),
//     moveElement(redBox, {
//       x: redBoxX,
//       y: redBoxY,
//     }),
//   ]).then(() => {
//     console.log(`Done`);
//   });
// }
// All();
