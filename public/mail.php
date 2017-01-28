<!--Register Form Code-->
<?php
$to="contact@exampleurl.com,".$_REQUEST['email']; // Change with your email address
$subject = "Reserve Your Seat";
if($_REQUEST['name'])
 $name = $_REQUEST['name'];
else
 $name = "Not Specified"; 
if($_REQUEST['email'])
 $email = $_REQUEST['email'];
else
 $email = "Not Specified"; 
if($_REQUEST['phone'])
 $phone = $_REQUEST['phone'];
else
 $phone = "Not Specified"; 
if($_REQUEST['Numberofseats'])
 $Numberofseats = $_REQUEST['Numberofseats'];
else
 $Numberofseats = "Not Specified"; 
if($_REQUEST['eventPlan'])
 $eventPlan = $_REQUEST['eventPlan'];
else
 $eventPlan = "Not Specified"; 

$msgg='<table width="100%" border="0" cellspacing="5" cellpadding="5">
			  <tr>
				<td width="50%" align="left" class="blacktext01">Full Name:</td>
				<td width="50%" align="left"><span class="blacktext01">'.$name.'</span></td>
			  </tr>
			  <tr>
				<td width="50%" align="left" class="blacktext01">Email Address: </td>
				<td width="50%" align="left"><span class="blacktext01">'.$email.'</span></td>
			  </tr>
			  <tr>
				<td width="50%" align="left" class="blacktext01">Phone Number: </td>
				<td width="50%" align="left"><span class="blacktext01">'.$phone.'</span></td>
			  </tr>
			  <tr>
				<td width="50%" align="left" class="blacktext01">Number Of Seats: </td>
				<td width="50%" align="left"><span class="blacktext01">'.$Numberofseats.'</span></td>
			  </tr>
			  <tr>
				<td width="50%" align="left" class="blacktext01">Event Plan: </td>
				<td width="50%" align="left"><span class="blacktext01">'.$eventPlan.'</span></td>
			  </tr>
	   </table>';

	   $message=$msgg;

        $headers  = "MIME-Version: 1.0\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\n";
		$headers .= "X-Priority: 3\n";
		$headers .= "X-MSMail-Priority: Normal\n";
		$headers .= "X-Mailer: php\n";
		$headers .="From:".$name."<".$email.">\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		mail($to, $subject, $message, $headers);	

?>