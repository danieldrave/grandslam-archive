<?php
  class Collector {

    const MENS_TENNIS = 'https://www.espn.com/tennis/history';
    const WOMENS_TENNIS = 'https://www.espn.com/tennis/history/_/type/women';

    /**
     * Initialises data collection for the latest ESPN grandslam results
     * - An initial run collected all the data
     * - Subsequent runs will be run via "php serve.php" after each grand slam in order to update local JSON database
     * @returns {void}
     */
    public static function init ()
    {
      error_log('Collecting data for: '. self::MENS_TENNIS);
      error_log('Collecting data for: '. self::WOMENS_TENNIS);
    }

  }