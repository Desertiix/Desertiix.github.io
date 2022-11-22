$(document).ready(function () {
  let rem = 16;  //字体大小 初始化


  // Top导航栏 - Logo部分
  let TopMenuLiIndex = 0;
  let Article_Section = $('article>section');

  ShowSection(Article_Section, TopMenuLiIndex);// 初始化

  // Top导航栏 - Logo 点击效果
  $('header>h1.logo>a').click(function () {
    TopMenuLiIndex = 0;

    CheckTopMenu($('header>h1.menu>ul>li'), TopMenuLiIndex)
    ShowSection(Article_Section, TopMenuLiIndex);
  });

  // Top导航栏 - Menu 选择
  $('header>h1.menu>ul>li').hover(
    function () {
      let Index = $(this).index();
      CheckTopMenu(this, Index);
    },
    function () {
      CheckTopMenu(this, TopMenuLiIndex);
    }
  );
  $('header>h1.menu>ul>li').click(function () {
    TopMenuLiIndex = $(this).index();

    Article_Section = $('article>section');
    ShowSection(Article_Section, TopMenuLiIndex);
  });


  function CheckTopMenu(thisSelf, thisIndex) {
    $(thisSelf).siblings('.checkbox').css({
      'margin-left': rem * 8 * thisIndex
    });
  }

  function ShowSection(thisSelf, thisIndex) {
    $(thisSelf).eq(thisIndex).stop().fadeIn().siblings().hide();
  }

  $('section.About>aside>section>ul>li>p').click(function () {
    let Flag = $(this).siblings("ul").css('display');
    if (Flag == 'none') {
      // $(this).siblings("ul").css({ 'display': 'block' });
      $(this).siblings("ul").stop().slideDown(200, function () {
        $(this).siblings("p").css({ "background-color": "#afc" });
      });
    } else if (Flag == 'block') {
      // $(this).siblings("ul").css({ 'display': 'none' });
      $(this).siblings("ul").stop().slideUp(200, function () {
        $(this).siblings("p").css({ 'background-color': '#ccc' });
      });
      $('section.About>aside>section>ul>li>ul>li>p').css({ "background-color": "#ccc" }).siblings("div").css({ 'display': 'none' });
    }
  })
  $('section.About>aside>section>ul>li>ul>li>p').click(function () {
    let Flag = $(this).siblings("div").css('display');
    if (Flag == 'none') {
      // $(this).siblings("div").css({ 'display': 'flex' });
      $(this).siblings("div").stop().slideDown(200, function () {
        $(this).siblings("p").css({ "background-color": "#eec" });
        $(this).css({ 'display': 'flex' });
      });
    } else if (Flag == 'flex') {
      // $(this).siblings("div").css({ 'display': 'none' });
      $(this).siblings("div").stop().slideUp(200, function () {
        $(this).siblings("p").css({ "background-color": "#ccc" });
      });
    }
  })


  $('article>section.About>aside>div:nth-of-type(4) a').hover(
    function () {
      let index = $(this).index()
      $(this).parent().find('p').eq(index).stop().fadeIn();
    }, function () {
      $(this).parent().find('p').hide();
    }
  )

});
