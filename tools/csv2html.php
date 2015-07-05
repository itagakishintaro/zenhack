<?php
$genres = [];


$fileName = isset($argv[1])? $argv[1]: null;

if(empty($argv[1]) === true){
  echo "USAGE: csv2html.php FILE\n";
  exit;
}

$fp = fopen($fileName, 'r');

$lineCount = 0;
while(($cols = fgetcsv($fp)) != false){
  if($lineCount === 0){
    $lineCount++;
    continue;
  }
  $genre = trim($cols[2]);
  if(empty($genre) === true){
    error_log("empty genre: $lineCount");
    continue;
  }

  if(is_array($genres[$genre]) === false){
    $genres[$genre] = [];
  }
  $genres[$genre][] = trim($cols[0]);
  $lineCount++;
}

$htmls = "";

$genreCount = 0;
foreach($genres as $genre => $commands){
  $html = <<<EOT
<div data-role="page" id="genre$genreCount">
    <div data-role="header">
      <a href="#" data-rel="back">back</a>
      <h1>{$genre}</h1>
    </div><!-- /header -->
    <div data-role="content" id="content">
EOT;
  foreach($commands as $command){
    $html .= "<div class=\"command column\">$command</div>\n";
  }

  $footer =<<<EOT
    </div><!-- /content -->
  </div><!-- /page -->
EOT;
  $html .= $footer;

  print $html;
  $genreCount++;
}


/*
      </ul>
    </div><!-- /content -->
  </div><!-- /page -->

 */
