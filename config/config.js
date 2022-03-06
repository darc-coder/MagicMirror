/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device
	electronOptions: {
		webPreferences: {
			webviewTag: true,
		},
	},
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Indian Holidays",
			position: "top_left",
			config: {
				maximumEntries: 20,
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://www.calendarlabs.com/ical-calendar/ics/33/India_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Jharsuguda, Odisha",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c72e1225edf75f965fbcd415e78b2b76",
				showHumidity: true
			}
		},
		{
			module: "MMM-HTMLSnippet",
			position: "top_right",
			config: {
				html: `<a class="weatherwidget-io" href="https://forecast7.com/en/21d8684d01/jharsuguda/" data-label_1="JHARSUGUDA" data-label_2="INDIA" data-icons="Climacons Animated" data-theme="weather_one" >JHARSUGUDA INDIA</a>
			<script>
				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
			</script>`,
			width: "400px",
			height: "400px",
			backgroundColor: "#000",
			updateInterval: 3600000, // in milli seconds - hourly
		  }
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "India Today Big Story",
						url: "https://www.indiatoday.in/rss/1206614"
					},
					{
						title: "India Today Home",
						url: "https://www.indiatoday.in/rss/home"
					},
					{
						title: "Times of India Headlines",
						url: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms"
					},
					{
						title: "India Today Nation",
						url: "https://www.indiatoday.in/rss/1206514"
					},
					{
						title: "India Today World",
						url: "https://www.indiatoday.in/rss/1206577"
					},
					{
						title: "Amar Ujala -Editor's Pick",
						url: "https://www.amarujala.com/rss/editors-pick.xml"
					},
					{
						title: "Amar Ujala -Editor's Pick",
						url: "https://www.amarujala.com/rss/breaking-news.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-network-signal",
			position: "top_center",
			config: {
				// Configuration of the module goes here
				showMessage: true,
				initialLoadDelay: 1000,
				flexDirection: "column-reverse"
			}
		},
		{
			module: 'MMM-Cursor',
			config: {
				// See 'Configuration options' for more information.
			}
		},
		{
		  module: 'MMM-WebView',
		  position: 'top_right',
		  config: {
			url: 'https://music.youtube.com/',
			width: '400px',
			height: '640px',
		  },
		},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
