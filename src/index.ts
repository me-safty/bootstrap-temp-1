// const li = document.querySelectorAll(".gallary ul li") as NodeListOf<HTMLLIElement>
// const imagesBox = document.querySelectorAll(".gallary .box") as NodeListOf<HTMLImageElement>

// li.forEach(e => {
//   e.addEventListener("click", () => {
//     // imagesBox.forEach(e => e.style.opacity = "0")
//     let category = e.dataset.cat as unknown as string; 
//     const imgs = document.querySelectorAll(`[data-name="${category}"]`) as NodeListOf<HTMLImageElement>
//     console.log(imgs[0].dataset.name);
//     imgs.forEach(e => {
//       const box = e.parentElement as HTMLDivElement
//       // box.style.opacity = `1`
//       for (let i = 0; i < imgs.length; i++) {
//         e.style.order = `${i}`
//       }
//     })
//   })
// })
