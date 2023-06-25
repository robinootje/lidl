<?php

// PHP array met enkel korte vragen. Deze vragen bevatten geen antwoorden
$korte_vragen = [
    // "Vraag",
    "Wat is jou vaforiete kleur?",
    "Van wie krijg jij het meeste inspiratie om verder te gaan?"
];

// multidimentiale PHP array met meerkeuze vragen en hun bijbehordende antwoorden en welk antwoord goed is
$meerkeuzevragen = [
    "Wat is geen primaire kleur?" => [
        "Rood" => false,
        "Geel" => false,
        "Groen" => true,
        "Blauw" => false
    ],
    "Wat is geen klinker?" => [
        "A" => false,
        "E" => false,
        "Y" => true,
        "O" => false
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
    foreach ($korte_vragen as $question) {
?>
        <h3><?=$question?></h3>
<?php
    }
?>

        <h2>De meerkeuzevragen zijn</h2>

<?php
    foreach ($meerkeuzevragen as $vraag => $antwoorden) {
?>
        <h3><?=$vraag?></h3>
<?php
        foreach ($antwoorden as $antwoord => $correct) {
?>
        <button><?=$antwoord?><?= $correct == true ? ' - 1' : ' - 0'; ?></button>
        
<?php
        }
    }
?>

</body>
</html>