 <?php
    $item_al = explode('-', $_GET['itemalias']);
    $itemidd = $item_al[0];

    $sql = "
SELECT 
*
FROM arts 
INNER JOIN categories ON catid = category
INNER JOIN images ON img_art_id = id
WHERE published > 0
AND
img_order = 1
AND
id = '$itemidd'

";
    $result = $pdo->prepare($sql);
    $result->setFetchMode(PDO::FETCH_ASSOC);
    $result->execute();
    $rows = $result->fetchAll();
    if (empty($rows)) {
        echo 'Ups!' . $itemidd;
    } else {
        $itemid = $rows[0]['id'];
    ?>


     <div class="container">
         <div class="section-title">
             <h2><i class="icofont-cat-alt-1"></i> <?php echo $rows[0]['title']; ?> </h2>
             <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
         </div>
         <div class="row">

             <div class="col-lg-5  align-items-stretch  pr-5">
                 <?php include('functions/gallery.php'); ?>
             </div>

             <div class="col-lg-7 align-items-stretch">
                 <?php echo $rows[0]['text']; ?>
             </div>

         </div>
     </div>

 <?php
    }
    ?>