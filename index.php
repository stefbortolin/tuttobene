<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

include('./db.php');

$user = json_decode(file_get_contents('php://input'),true);

if(isset($user['action'])) {
    switch($user['action']) {



        case "agregarproducto": {
            echo "HOla";


            break;
        }

        case "editarproducto": {

            $producto = $user['idproducto'];
            $nombre = $user['nommbre'];

            break;
        }

        case "eliminarproducto": {

            
            break;
        }

        case "getcategorias": {


            $query = $mysql->prepare("SELECT C.*, S.nombre AS subNombre, S.id AS subId, S.subcat AS subSubcat  FROM `categorias` C LEFT JOIN `categorias` S ON S.subcat = C.id  WHERE C.subcat = 0");
            $query->execute();
            //echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));

            $result = Array();




            while($row = $query->fetch()) {

                if(!isset($result[ $row['id'] ])) {
                    $result[ $row['id'] ] = array("nombre" => $row['nombre'], "id" => $row['id'], "subcategorias" => Array());
                }

                if($row['subSubcat'] != 0) {
                    $result[ $row['id'] ]['subcategorias'][] = array("nombre" => $row['subNombre'], "id" => $row['subId']);
                }
            }

            $result2 = [];

            foreach($result  as $i) {
                array_push($result2, $i);
            }
            echo json_encode($result2);

            break;
        }

        case "agregarcategoria": {

            $query = $mysql->prepare("INSERT INTO categorias (nombre, subcat) VALUES (:nombre, :subcat)");
            $query->bindParam(":nombre", $user['nombre'], PDO::PARAM_STR);
            $query->bindParam(":subcat", $user['subcat'], PDO::PARAM_INT);
            $query->execute();
            echo 1;
            break;
        }








    }
}

?>