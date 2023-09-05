<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vérification d'année bissextile</title>
    <!-- Inclure le fichier JavaScript externe -->
    <script src="script.js"></script>
</head>
<body>
    <?php
    // Vous pouvez tester la fonction ici en utilisant PHP
    $annee = 2024;
    $estBisextile = "<script>document.write(bisextile($annee));</script>";

    echo "L'année $annee est bissextile ? Réponse : $estBisextile";
    ?>
</body>
</html>
