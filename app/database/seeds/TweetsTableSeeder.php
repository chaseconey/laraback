<?php

class TweetsTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('tweets')->truncate();

		$tweets = array(
            array('text' => 'A test tweet about awesome stuff!'),
            array('text' => 'Another test tweet!'),
            array('text' => 'Rawstin and Houstone babyyyy')
		);

		// Uncomment the below to run the seeder
		DB::table('tweets')->insert($tweets);
	}

}
