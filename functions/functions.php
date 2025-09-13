		<?php require_once('/home/dauylhpeco/domains/customer-sunacare.ml/config.php');?>
			<?php $config = new JConfig();?>
			<?php $options = [
									\PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
									\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
									\PDO::ATTR_EMULATE_PREPARES   => false,
								];?>
			<?php $dsn = "mysql:host=$config->dbhost;dbname=$config->dbdb;charset=$config->charset";
				try {
						$pdo = new \PDO($dsn, $config->dbuser, $config->dbpassword, $options);
					} 
					catch 
					(\PDOException $e) 
					{
						throw new \PDOException($e->getMessage(), (int)$e->getCode());
					}
		
 
 
 function pagination($categoryalias, $limit0, $limitation, $pdo)
	{
try {
$total = "
SELECT
COUNT(*)
FROM
arts
INNER JOIN categories ON catid = category
WHERE published > 0
AND 
cat_alias = '$categoryalias'
    ";
$result = $pdo->prepare($total); 
$result->execute(); 
$number_of_rows = $result->fetchColumn(); 

$total = $number_of_rows;

    // How many items to list per page
    

    // How many pages will there be
    $pages = ceil($total / $limitation);

    // What page are we currently on?
    $page = min($pages, filter_input(INPUT_GET, 'index', FILTER_VALIDATE_INT, array(
        'options' => array( 
            'default'   => 1,
            'min_range' => 1,
        ),
    )));

    // Calculate the offset for the query
    $offset = ($page - 1)  * $limitation;

    // Some information to display to the user
    $start = $offset + 1;
    $end = min(($offset + $limitation), $total);
	$prevlink0 = ($page === 2) ? '<a href="/'.$categoryalias.'" class="pagin" title="Poprzednia">Poprzednia.</a>':'<a href="/'.$categoryalias.'/page/'. ($page - 1) . '" class="pagin" title="Previous page">Poprzednia</a>';
    // The "back" link
    $prevlink = ($page > 1) ? '<a href="/'.$categoryalias.'" class="pagin" title="First page">Pier.</a>'.$prevlink0 : '<span class="disabled"></span> <span class="disabled"></span>';

    // The "forward" link
    $nextlink = ($page < $pages) ? '<a href="/'.$categoryalias.'/page/' . ($page + 1) . '" class="pagin" title="Next page">Następna</i></a> <a href="/'.$categoryalias.'/page/' . $pages . '" class="pagin" title="Last page">Ost</i></a>' : '<span class="disabled"></span> <span class="disabled"></span>';

    // Display the paging information
    echo '<div id="paging">', $prevlink, ' <div><b>Strona ', $page, ' z ', $pages, '</b><br /><small>wyświetlono ', $start, '-', $end, ' z ', $total, ' artykulow </small></div>', $nextlink, ' </div>';
}
catch (Exception $e)
{
echo 'error'.$e->getMessage();
}




	}
	  function getFirstPara($string){
        $string = substr($string,0, strpos($string, "</p>")+4);
        return $string;
    }
    
    // If you wanted to remove the paragraph tags from the HTML
    function getFirstPara2($string){
        $string = substr($string,0, strpos($string, "</p>")+4);
        $string = str_replace("<p>", "", str_replace("<p/>", "", $string));
        return $string;
    }
	function dateV($format,$timestamp=null){
	$to_convert = array(
		'l'=>array('dat'=>'N','str'=>array('Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela')),
		'F'=>array('dat'=>'n','str'=>array('styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień')),
		'f'=>array('dat'=>'n','str'=>array('stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'))
	);
	if ($pieces = preg_split('#[:/.\-, ]#', $format)){	
		if ($timestamp === null) { $timestamp = time(); }
		foreach ($pieces as $datepart){
			if (array_key_exists($datepart,$to_convert)){
				$replace[] = $to_convert[$datepart]['str'][(date($to_convert[$datepart]['dat'],$timestamp)-1)].'';
			}else{
				$replace[] = date($datepart,$timestamp).'';
			}
		}
		$result = strtr($format,array_combine($pieces,$replace));
		return $result;
	}
}