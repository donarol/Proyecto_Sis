<?php
return [
  "driver" => "smtp",
  "host" => "smtp.mailtrap.io",
  "port" => 2525,
  "from" => array(
      "address" => "from@example.com",
      "name" => "Example"
  ),
  "username" => "7360b79166e8fb", // your username,
  "password" => "e41c59c9e8acab",// your password,
  "sendmail" => "/usr/sbin/sendmail -bs"
];