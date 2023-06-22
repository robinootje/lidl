<?php

$korte_vragen = [
    // "Vraag" => "Antwoord",
    "Wie heeft deze website gemaakt?" => "Jurgen Visser",
    "Van wie is de opdracht?" => "Robin Stevens"
];

$meerkeuzevragen = [
    "Wat is geen primaire kleur?" => [
        "Rood",
        "Geel",
        "Groen",]
        "Blauw"
    ],
    "Wat is geen klinker?" => [
        "A",
        "E",
        "Y",
        "O"
    ]
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactieve wachtrij</title>
</head>
<body>

    <h1>Interactieve wachtrij</h1>
    <h2>De korte vragen zijn</h2>
    
<?php
    foreach ($korte_vragen as $question => $answer) {
?>
        <h3><?=$question?></h3>
        <button><?=$answer?></button>
<?php
    }
?>

        <h2>De meerkeuzevragen zijn</h2>

<?php
    foreach ($meerkeuzevragen as $vraag => $antwoorden) {
?>
        <h3><?=$vraag?></h3>
<?php
        foreach ($antwoorden as $antwoord) {
?>
        <button><?=$antwoord?></button>
<?php
        }
    }
?>

</body>
</html>