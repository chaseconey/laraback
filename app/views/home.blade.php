<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laraback</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div>
        <h1>Laraback</h1>
        <ul id="tweets">

        </ul>
    </div>

    <script>
        var tweets = {{ $tweets }}
    </script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/vendor/underscore.min.js"></script>
    <script src="js/vendor/backbone.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
