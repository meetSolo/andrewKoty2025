 <?php
$sql="
SELECT * FROM images WHERE img_art_id='$itemid' ORDER BY img_order ASC
";

$result1 = $pdo->prepare($sql);
$result1->setFetchMode(PDO::FETCH_ASSOC);
$result1->execute();
$rows1 = $result1->fetchAll();
if(empty($rows1))
{
echo 'Ups';
}	
else
{
  ?>   



  

<?php
	foreach($rows1 as $row1)
							{	
?>


<div>
		

              <a data-fancybox="gallery" data-caption="<?php echo $row1['img_text'];?>" href="/img/content-img/<?php echo $itemid;?>/m_<?php echo $row1['img_title'];?>">
			  
			  <img src="/img/content-img/<?php echo $itemid;?>/l_<?php echo $row1['img_title'];?>" alt="<?php echo $row1['img_title'];?>"  class="mb-4 w-100 fit-cover item-img" /></a>

</div>
        

          

<?php
  

	 }

}
?>