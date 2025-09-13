      <div class="container-fluid">
        <div class="row no-gutters">

		 <?php
$sqlg="
SELECT * FROM images WHERE img_art_id = 17 ORDER BY img_order ASC
";

$result1g = $pdo->prepare($sqlg);
$result1g->setFetchMode(PDO::FETCH_ASSOC);
$result1g->execute();
$rows1g = $result1g->fetchAll();
if(empty($rows1g))
{
echo 'Ups';
}	
else
{
		foreach($rows1g as $row1g)
							{	
		?>
		
		
		
		
		
          <div class="col-lg-3 col-md-4" >
            <div class="gallery-item">
              <a href="/img/content-img/17/l_<?php echo $row1g['img_title'];?>" class="venobox" data-gall="gallery-item">
                <img src="/img/content-img/17/l_<?php echo $row1g['img_title'];?>" loading="lazy" alt="koty" class="img-fluid gallery-img cover">
              </a>
            </div>
          </div>
		  
		  <?php
		  }
	}	  
		  ?>



    

        </div>

      </div>