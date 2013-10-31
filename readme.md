## Laraback

Simple Laravel + Backbone example that shows how data flows from database to front end. This project has the schema, test data, and build process all included.

### How to build

* `git clone` the repo
* Navigate to the local repo
* `composer install` to install PHP dependencies
* Go to app/config/database.php and make sure your database connection settings are correct (create a new db if need be)
* `php artisan migrate` to install the schema
* `php artisan db:seed` to install the test data
* `php artisan serve` if you have PHP 5.4 or greater
* Otherwise, create a vhost and hosts entry and navigate to the given url

### Technologies Used

* Laravel
* Composer
* Backbone
* Underscore
* jQuery
