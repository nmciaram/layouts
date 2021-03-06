<link rel="icon" type="image/png" href="//www.lordandtaylor.com/favicon.ico" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="description" content="Visit Lord & Taylor for the latest trends from top fashion brands at competitive prices. Shop designer clothing, fall dresses, shoes and handbags for everyday style and special occasion dressing."/>
<meta name="keyword" content="department store, dept store, department stores, lord and taylor store, clothing, apparel, clothing store, accessories, lord and taylor department store, lord and taylor department stores, lord and taylor apparel"/>
<meta property="og:title" content="Lord and Taylor: Designer Clothing, Shoes, Handbags, Accessories &amp; More" /> 
<meta property="og:image" content="//www.lordandtaylor.com/wcsstore/HBCStorefrontAssetStore/images/logo.gif" />
<meta property="og:type" content="website"/>
<meta property="fb:app_id" name="fb_app_id" content="356103371122077"/>

<script>
  // Mobile Nav
  $(document).on("click", "#nav-toggle", function() {
    $(".lt-header").removeClass("active-search");
    $(".lt-header").toggleClass("active-nav");
  });

  $(document).on("click", "#search-toggle", function() {
    $(".lt-header").removeClass("active-nav");
    $(".lt-header").toggleClass("active-search");
  });

  $(function() {
    $('#search-form').submit(function(){
      var value = $('#search-form :input').val();
      console.log(value)
      if (value) {
        window.location = 'http://www.lordandtaylor.com/webapp/wcs/stores/servlet/en/SearchDisplay?storeId=10151&catalogId=10102&langId=-1&pageSize=12&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&searchSource=Q&searchTerm=' + value + '&x=12&y=10';     
      }
      return false;
    });
  });

  $(function() {
    $('#desktop-search-form').submit(function(){
      var value = $('#desktop-search-form :input').val();
      console.log(value)
      if (value) {
        window.location = 'http://www.lordandtaylor.com/webapp/wcs/stores/servlet/en/SearchDisplay?storeId=10151&catalogId=10102&langId=-1&pageSize=12&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&searchSource=Q&searchTerm=' + value + '&x=12&y=10';     
      }
      return false;
    });
  });

  var form = document.getElementById("form-input");

  document.getElementById("form-submit").addEventListener("click", function () {
    form.submit();
  });
</script>

<link type="text/css" rel="stylesheet" href="//s3.amazonaws.com/assets.brickworksoftware.com/lord_and_taylor/production_header_assets/static/build/css/global2.css" media="all" />
    <link type="text/css" rel="stylesheet" href="//s3.amazonaws.com/assets.brickworksoftware.com/lord_and_taylor/production_header_assets/static/build/css/header-lat.css" media="all" />
    <link rel="icon" type="image/png" href="//s3.amazonaws.com/assets.brickworksoftware.com/lord_and_taylor/production_header_assets/static/images/icon/favicon.png">

