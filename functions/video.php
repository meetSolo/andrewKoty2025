      <div class="container-fluid">
        <div class="row no-gutters">

		 <?php
$sqlg="
SELECT * FROM arts WHERE id = 17 ORDER BY id ASC
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
{	?><div class="container">
<?php
		foreach($rows1g as $row1g)
							{	
		?>
		
		
		
		
	
          <div class="col-lg-12 col-md-12" >
            <div class="">
			<?php $vid = explode ('v=', $row1g['youtube']);
					$video = explode ('&', $vid[1]);
					?>
				<iframe width="100%" height="375" loading="lazy" src="https://www.youtube.com/embed/<?php echo $video['0'];?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				

            </div>
          </div>
		 </div> 
		  <?php
		  }
		 ?> </div>
		 <?php
	}	  
		  ?>



    

        </div>

      </div>