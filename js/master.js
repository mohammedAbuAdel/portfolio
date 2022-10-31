// start select skill selector
let ourSkills = document.querySelector(".skills")
window.onscroll = function () {
  // offsetParent تُرجع مسافة العنصر الحالي بالنسبة إلى الجزء العلوي من عنصر الخاص به في offsetTop
  let skillsOffSetTop = ourSkills.offsetTop
  // offsetTop (height)ارجاع ارتفاع العنصر
  let skillsOffSetheight = ourSkills.offsetHeight;
  // offsetTop (height)ارجاع ارتفاع النافذة الشاشة
  let windowheight = this.innerHeight
  // offsetTop (height)ارجاع ارتفاع النافذة الشاشة
  let windowScrollTop = this.pageYOffset


  if (windowScrollTop >= (skillsOffSetTop + skillsOffSetheight - windowheight)) {
    let allskills = document.querySelectorAll(".skill-box .skill-progress span")
    allskills.forEach(function (el) {
      el.style.width = el.dataset.progress
    })
  }
}
// end select skill selector