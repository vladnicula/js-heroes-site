<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="keywords" content="">
<meta name="description" content="">
<title>BeEvent - Conference & Event HTML Template</title>
<!--Bootstrap -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css">
<!--Custome Style -->
<link rel="stylesheet" href="assets/css/style.css" type="text/css">
<!--FontAwesome Font Style -->
<link href="assets/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
<div class="subscribe-newsletter">
  <div class="subscribe-form">
    <h2>Subscribe Newsletter</h2>
    <form id="signup" action="<?=$_SERVER['PHP_SELF']; ?>" method="post">
      <div class="form-group newsletter-input">
        <input type="text" name="email" id="email" class="form-control" placeholder="Email Address" />
        <span id="response">
        <? require_once('inc/store-address.php'); if($_GET['submit']){ echo storeAddress(); } ?>
        </span> </div>
        <button type="submit" name="submit" class="newsletter-btn"><i class="fa fa-send"></i></button>
      <div id="no-spam"></div>
    </form>
  </div>
</div>
<script type="text/javascript" src="assets/js/prototype.js"></script> 
<script type="text/javascript" src="assets/js/mailing-list.js"></script>
</body>
</html>
