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
      foreach ([self::MENS_TENNIS, self::WOMENS_TENNIS] as $results) {
        self::collect($results);
      }
    }

    public static function collect ($url)
    {
      error_log('Collecting data for: ' . $url);
      libxml_use_internal_errors(true);
      $html = file_get_contents($url);
      $dom = new DOMDocument();
      $dom->loadHTML($html);

      $table = $dom->getElementsByTagName('table')->item(0);
      $results = $table->getElementsByTagName('tr');
      $results = iterator_to_array($results);
      // Remove table headers
      array_shift($results);
      array_shift($results);

      $data = [];

      foreach ($results as $result) {
        $rowData = [];
        $cells = $result->getElementsByTagName('td');

        $grandslam = $cells->item(0)->textContent;
        $year = $cells->item(1)->textContent;

        error_log('Processing data for ' . $grandslam . ' ' . $year);
        foreach ($cells as $cell) {
          $rowData[] = $cell->nodeValue;
        }

        $data[] = $rowData;
      }
    }

  }