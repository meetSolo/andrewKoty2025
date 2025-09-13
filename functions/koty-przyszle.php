<?php


	
	
$limit=0;
$limitation=15;

		if(isset($_GET['pagination']) && is_numeric($_GET['index']))
			{
				$limit = ($_GET['index'] * $limitation) - $limitation;
			} 

$sql="
SELECT 
*
FROM arts 
INNER JOIN categories ON catid = category
WHERE published > 0
AND
cat_alias = 'mioty-planowane'
ORDER BY arts.date DESC
LIMIT $limit, $limitation
";
$result = $pdo->prepare($sql);
$result->setFetchMode(PDO::FETCH_ASSOC);
$result->execute();
$rows = $result->fetchAll();
if(empty($rows))
{
echo '<div class="w-100 text-center"><h4>Brak informacji. Zajrzyj ponownie za jakiś czas...</h4></div>';
}	
else
{
$ii=0;
							foreach($rows as $row)
							{	
								// losowa wysokosc z 3
								$brick_height =  rand(1,3);
								// link do artykulu
								$link_item = '/'.$row['cat_alias'].'/'.$row['alias'];
								// link do autora
			
								// link do kategorii
								$link_category = '/'.$row['cat_alias'];
								// alt i title
								$alt_title = str_replace('"','\'',$row['title']);	
$sql_img="
SELECT 
*
FROM images
WHERE img_art_id = '$row[id]'
ORDER BY img_order ASC
LIMIT 1;
";
$result_img = $pdo->prepare($sql_img);
$result_img->setFetchMode(PDO::FETCH_ASSOC);
$result_img->execute();
$rows_img = $result_img->fetchAll();
?>

<div class="col-lg-6">

    <div class="member d-flex align-items-start">
        <div class="pic"><img src="/img/content-img/<?php echo $row['id'].'/m_'.$rows_img['0']['img_title'];?>"
                class="img-fluid" alt=""></div>
        <div class="member-info">
            <h4><?php echo $row['title'];?></h4>
            <span></span>



            <?php
$limit = 24;
$text = strip_tags($row['text']);

    if (str_word_count($text, 0) > $limit) {
       $words = str_word_count($text, 2);
        $pos   = array_keys($words);
        $text  = substr($text, 0, $pos[$limit]) . '...';
		echo '<p>'.$text.'</p>';
    }
	?>

            <a href="/<?php echo $row['id'];?>-<?php echo $row['alias'];?>" class="appointment-btn ml-0 mt-4 more-btn">
                Czytaj więcej <i class="bx bx-chevron-right"></i>
            </a>


        </div>
    </div>
</div>




<?php
	$ii++;
	}
	}
	?>
<div class="container" data-aos="zoom-in">
    <?php
	//pagination($_GET['categoryalias'], 0, $limitation, $pdo);
	?>
</div>