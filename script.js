// 获取所有轮播图和推荐文章标题的元素

var slides = document.querySelectorAll(".mySlides");

var titles = document.querySelectorAll(".text");

// 定义当前展示的轮播图和推荐文章标题的索引

var slideIndex = 0;

// 显示第一张轮播图和推荐文章标题

showSlides(slideIndex);

// 设置定时器，每隔5秒切换一张轮播图和推荐文章标题

setInterval(function() {

  slideIndex++;

  if (slideIndex >= slides.length) {

    slideIndex = 0;

  }

  showSlides(slideIndex);

}, 5000);

// 显示指定索引的轮播图和推荐文章标题

function showSlides(index) {

  // 隐藏所有轮播图和推荐文章标题

  for (var i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

    titles[i].style.display = "none";

  }

  // 显示指定索引的轮播图和推荐文章标题

  slides[index].style.display = "block";

  titles[index].style.display = "block";

}

// 下一张轮播图和推荐文章标题

function plusSlides(n) {

  slideIndex += n;

  if (slideIndex < 0) {

    slideIndex = slides.length - 1;

  } else if (slideIndex >= slides.length) {

    slideIndex = 0;

  }

  showSlides(slideIndex);

}

