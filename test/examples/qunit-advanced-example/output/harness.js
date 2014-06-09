<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>QUnit Test Harness</title>
	<style>/*!
 * QUnit 1.14.0
 * http://qunitjs.com/
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-31T16:40Z
 */

/** Font Family and Sizes */

#qunit-tests, #qunit-header, #qunit-banner, #qunit-testrunner-toolbar, #qunit-userAgent, #qunit-testresult {
	font-family: &quot;Helvetica Neue Light&quot;, &quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue&quot;, Calibri, Helvetica, Arial, sans-serif;
}

#qunit-testrunner-toolbar, #qunit-userAgent, #qunit-testresult, #qunit-tests li { font-size: small; }
#qunit-tests { font-size: smaller; }


/** Resets */

#qunit-tests, #qunit-header, #qunit-banner, #qunit-userAgent, #qunit-testresult, #qunit-modulefilter {
	margin: 0;
	padding: 0;
}


/** Header */

#qunit-header {
	padding: 0.5em 0 0.5em 1em;

	color: #8699A4;
	background-color: #0D3349;

	font-size: 1.5em;
	line-height: 1em;
	font-weight: 400;

	border-radius: 5px 5px 0 0;
}

#qunit-header a {
	text-decoration: none;
	color: #C2CCD1;
}

#qunit-header a:hover,
#qunit-header a:focus {
	color: #FFF;
}

#qunit-testrunner-toolbar label {
	display: inline-block;
	padding: 0 0.5em 0 0.1em;
}

#qunit-banner {
	height: 5px;
}

#qunit-testrunner-toolbar {
	padding: 0.5em 0 0.5em 2em;
	color: #5E740B;
	background-color: #EEE;
	overflow: hidden;
}

#qunit-userAgent {
	padding: 0.5em 0 0.5em 2.5em;
	background-color: #2B81AF;
	color: #FFF;
	text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 1px;
}

#qunit-modulefilter-container {
	float: right;
}

/** Tests: Pass/Fail */

#qunit-tests {
	list-style-position: inside;
}

#qunit-tests li {
	padding: 0.4em 0.5em 0.4em 2.5em;
	border-bottom: 1px solid #FFF;
	list-style-position: inside;
}

#qunit-tests.hidepass li.pass, #qunit-tests.hidepass li.running  {
	display: none;
}

#qunit-tests li strong {
	cursor: pointer;
}

#qunit-tests li a {
	padding: 0.5em;
	color: #C2CCD1;
	text-decoration: none;
}
#qunit-tests li a:hover,
#qunit-tests li a:focus {
	color: #000;
}

#qunit-tests li .runtime {
	float: right;
	font-size: smaller;
}

.qunit-assert-list {
	margin-top: 0.5em;
	padding: 0.5em;

	background-color: #FFF;

	border-radius: 5px;
}

.qunit-collapsed {
	display: none;
}

#qunit-tests table {
	border-collapse: collapse;
	margin-top: 0.2em;
}

#qunit-tests th {
	text-align: right;
	vertical-align: top;
	padding: 0 0.5em 0 0;
}

#qunit-tests td {
	vertical-align: top;
}

#qunit-tests pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
}

#qunit-tests del {
	background-color: #E0F2BE;
	color: #374E0C;
	text-decoration: none;
}

#qunit-tests ins {
	background-color: #FFCACA;
	color: #500;
	text-decoration: none;
}

/*** Test Counts */

#qunit-tests b.counts                       { color: #000; }
#qunit-tests b.passed                       { color: #5E740B; }
#qunit-tests b.failed                       { color: #710909; }

#qunit-tests li li {
	padding: 5px;
	background-color: #FFF;
	border-bottom: none;
	list-style-position: inside;
}

/*** Passing Styles */

#qunit-tests li li.pass {
	color: #3C510C;
	background-color: #FFF;
	border-left: 10px solid #C6E746;
}

#qunit-tests .pass                          { color: #528CE0; background-color: #D2E0E6; }
#qunit-tests .pass .test-name               { color: #366097; }

#qunit-tests .pass .test-actual,
#qunit-tests .pass .test-expected           { color: #999; }

#qunit-banner.qunit-pass                    { background-color: #C6E746; }

/*** Failing Styles */

#qunit-tests li li.fail {
	color: #710909;
	background-color: #FFF;
	border-left: 10px solid #EE5757;
	white-space: pre;
}

#qunit-tests &gt; li:last-child {
	border-radius: 0 0 5px 5px;
}

#qunit-tests .fail                          { color: #000; background-color: #EE5757; }
#qunit-tests .fail .test-name,
#qunit-tests .fail .module-name             { color: #000; }

#qunit-tests .fail .test-actual             { color: #EE5757; }
#qunit-tests .fail .test-expected           { color: #008000; }

#qunit-banner.qunit-fail                    { background-color: #EE5757; }


/** Result */

#qunit-testresult {
	padding: 0.5em 0.5em 0.5em 2.5em;

	color: #2B81AF;
	background-color: #D2E0E6;

	border-bottom: 1px solid #FFF;
}
#qunit-testresult .module-name {
	font-weight: 700;
}

/** Fixture */

#qunit-fixture {
	position: absolute;
	top: -10000px;
	left: -10000px;
	width: 1000px;
	height: 1000px;
}
</style>
</head>
<body>
	<div id="qunit"></div>
	<div id="qunit-fixture"></div>
	<script>&lt;!--/*!
 * QUnit 1.14.0
 * http://qunitjs.com/
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-31T16:40Z
 */

(function( window ) {

var QUnit,
	assert,
	config,
	onErrorFnPrev,
	testId = 0,
	fileName = (sourceFromStacktrace( 0 ) || &quot;&quot; ).replace(/(:\d+)+\)?/, &quot;&quot;).replace(/.+\//, &quot;&quot;),
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	// Keep a local reference to Date (GH-283)
	Date = window.Date,
	setTimeout = window.setTimeout,
	clearTimeout = window.clearTimeout,
	defined = {
		document: typeof window.document !== &quot;undefined&quot;,
		setTimeout: typeof window.setTimeout !== &quot;undefined&quot;,
		sessionStorage: (function() {
			var x = &quot;qunit-test-string&quot;;
			try {
				sessionStorage.setItem( x, x );
				sessionStorage.removeItem( x );
				return true;
			} catch( e ) {
				return false;
			}
		}())
	},
	/**
	 * Provides a normalized error string, correcting an issue
	 * with IE 7 (and prior) where Error.prototype.toString is
	 * not properly implemented
	 *
	 * Based on http://es5.github.com/#x15.11.4.4
	 *
	 * @param {String|Error} error
	 * @return {String} error message
	 */
	errorString = function( error ) {
		var name, message,
			errorString = error.toString();
		if ( errorString.substring( 0, 7 ) === &quot;[object&quot; ) {
			name = error.name ? error.name.toString() : &quot;Error&quot;;
			message = error.message ? error.message.toString() : &quot;&quot;;
			if ( name &amp;&amp; message ) {
				return name + &quot;: &quot; + message;
			} else if ( name ) {
				return name;
			} else if ( message ) {
				return message;
			} else {
				return &quot;Error&quot;;
			}
		} else {
			return errorString;
		}
	},
	/**
	 * Makes a clone of an object using only Array or Object as base,
	 * and copies over the own enumerable properties.
	 *
	 * @param {Object} obj
	 * @return {Object} New object with only the own properties (recursively).
	 */
	objectValues = function( obj ) {
		// Grunt 0.3.x uses an older version of jshint that still has jshint/jshint#392.
		/*jshint newcap: false */
		var key, val,
			vals = QUnit.is( &quot;array&quot;, obj ) ? [] : {};
		for ( key in obj ) {
			if ( hasOwn.call( obj, key ) ) {
				val = obj[key];
				vals[key] = val === Object(val) ? objectValues(val) : val;
			}
		}
		return vals;
	};


// Root QUnit object.
// `QUnit` initialized at top of scope
QUnit = {

	// call on start of module test to prepend name to all tests
	module: function( name, testEnvironment ) {
		config.currentModule = name;
		config.currentModuleTestEnvironment = testEnvironment;
		config.modules[name] = true;
	},

	asyncTest: function( testName, expected, callback ) {
		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		}

		QUnit.test( testName, expected, callback, true );
	},

	test: function( testName, expected, callback, async ) {
		var test,
			nameHtml = &quot;&lt;span class=&apos;test-name&apos;&gt;&quot; + escapeText( testName ) + &quot;&lt;/span&gt;&quot;;

		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		}

		if ( config.currentModule ) {
			nameHtml = &quot;&lt;span class=&apos;module-name&apos;&gt;&quot; + escapeText( config.currentModule ) + &quot;&lt;/span&gt;: &quot; + nameHtml;
		}

		test = new Test({
			nameHtml: nameHtml,
			testName: testName,
			expected: expected,
			async: async,
			callback: callback,
			module: config.currentModule,
			moduleTestEnvironment: config.currentModuleTestEnvironment,
			stack: sourceFromStacktrace( 2 )
		});

		if ( !validTest( test ) ) {
			return;
		}

		test.queue();
	},

	// Specify the number of expected assertions to guarantee that failed test (no assertions are run at all) don&apos;t slip through.
	expect: function( asserts ) {
		if (arguments.length === 1) {
			config.current.expected = asserts;
		} else {
			return config.current.expected;
		}
	},

	start: function( count ) {
		// QUnit hasn&apos;t been initialized yet.
		// Note: RequireJS (et al) may delay onLoad
		if ( config.semaphore === undefined ) {
			QUnit.begin(function() {
				// This is triggered at the top of QUnit.load, push start() to the event loop, to allow QUnit.load to finish first
				setTimeout(function() {
					QUnit.start( count );
				});
			});
			return;
		}

		config.semaphore -= count || 1;
		// don&apos;t start until equal number of stop-calls
		if ( config.semaphore &gt; 0 ) {
			return;
		}
		// ignore if start is called more often then stop
		if ( config.semaphore &lt; 0 ) {
			config.semaphore = 0;
			QUnit.pushFailure( &quot;Called start() while already started (QUnit.config.semaphore was 0 already)&quot;, null, sourceFromStacktrace(2) );
			return;
		}
		// A slight delay, to avoid any current callbacks
		if ( defined.setTimeout ) {
			setTimeout(function() {
				if ( config.semaphore &gt; 0 ) {
					return;
				}
				if ( config.timeout ) {
					clearTimeout( config.timeout );
				}

				config.blocking = false;
				process( true );
			}, 13);
		} else {
			config.blocking = false;
			process( true );
		}
	},

	stop: function( count ) {
		config.semaphore += count || 1;
		config.blocking = true;

		if ( config.testTimeout &amp;&amp; defined.setTimeout ) {
			clearTimeout( config.timeout );
			config.timeout = setTimeout(function() {
				QUnit.ok( false, &quot;Test timed out&quot; );
				config.semaphore = 1;
				QUnit.start();
			}, config.testTimeout );
		}
	}
};

// We use the prototype to distinguish between properties that should
// be exposed as globals (and in exports) and those that shouldn&apos;t
(function() {
	function F() {}
	F.prototype = QUnit;
	QUnit = new F();
	// Make F QUnit&apos;s constructor so that we can add to the prototype later
	QUnit.constructor = F;
}());

/**
 * Config object: Maintain internal state
 * Later exposed as QUnit.config
 * `config` initialized at top of scope
 */
config = {
	// The queue of tests to run
	queue: [],

	// block until document ready
	blocking: true,

	// when enabled, show only failing tests
	// gets persisted through sessionStorage and can be changed in UI via checkbox
	hidepassed: false,

	// by default, run previously failed tests first
	// very useful in combination with &quot;Hide passed tests&quot; checked
	reorder: true,

	// by default, modify document.title when suite is done
	altertitle: true,

	// by default, scroll to top of the page when suite is done
	scrolltop: true,

	// when enabled, all tests must call expect()
	requireExpects: false,

	// add checkboxes that are persisted in the query-string
	// when enabled, the id is set to `true` as a `QUnit.config` property
	urlConfig: [
		{
			id: &quot;noglobals&quot;,
			label: &quot;Check for Globals&quot;,
			tooltip: &quot;Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings.&quot;
		},
		{
			id: &quot;notrycatch&quot;,
			label: &quot;No try-catch&quot;,
			tooltip: &quot;Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings.&quot;
		}
	],

	// Set of all modules.
	modules: {},

	// logging callback queues
	begin: [],
	done: [],
	log: [],
	testStart: [],
	testDone: [],
	moduleStart: [],
	moduleDone: []
};

// Initialize more QUnit.config and QUnit.urlParams
(function() {
	var i, current,
		location = window.location || { search: &quot;&quot;, protocol: &quot;file:&quot; },
		params = location.search.slice( 1 ).split( &quot;&amp;&quot; ),
		length = params.length,
		urlParams = {};

	if ( params[ 0 ] ) {
		for ( i = 0; i &lt; length; i++ ) {
			current = params[ i ].split( &quot;=&quot; );
			current[ 0 ] = decodeURIComponent( current[ 0 ] );

			// allow just a key to turn on a flag, e.g., test.html?noglobals
			current[ 1 ] = current[ 1 ] ? decodeURIComponent( current[ 1 ] ) : true;
			if ( urlParams[ current[ 0 ] ] ) {
				urlParams[ current[ 0 ] ] = [].concat( urlParams[ current[ 0 ] ], current[ 1 ] );
			} else {
				urlParams[ current[ 0 ] ] = current[ 1 ];
			}
		}
	}

	QUnit.urlParams = urlParams;

	// String search anywhere in moduleName+testName
	config.filter = urlParams.filter;

	// Exact match of the module name
	config.module = urlParams.module;

	config.testNumber = [];
	if ( urlParams.testNumber ) {

		// Ensure that urlParams.testNumber is an array
		urlParams.testNumber = [].concat( urlParams.testNumber );
		for ( i = 0; i &lt; urlParams.testNumber.length; i++ ) {
			current = urlParams.testNumber[ i ];
			config.testNumber.push( parseInt( current, 10 ) );
		}
	}

	// Figure out if we&apos;re running the tests from a server or not
	QUnit.isLocal = location.protocol === &quot;file:&quot;;
}());

extend( QUnit, {

	config: config,

	// Initialize the configuration options
	init: function() {
		extend( config, {
			stats: { all: 0, bad: 0 },
			moduleStats: { all: 0, bad: 0 },
			started: +new Date(),
			updateRate: 1000,
			blocking: false,
			autostart: true,
			autorun: false,
			filter: &quot;&quot;,
			queue: [],
			semaphore: 1
		});

		var tests, banner, result,
			qunit = id( &quot;qunit&quot; );

		if ( qunit ) {
			qunit.innerHTML =
				&quot;&lt;h1 id=&apos;qunit-header&apos;&gt;&quot; + escapeText( document.title ) + &quot;&lt;/h1&gt;&quot; +
				&quot;&lt;h2 id=&apos;qunit-banner&apos;&gt;&lt;/h2&gt;&quot; +
				&quot;&lt;div id=&apos;qunit-testrunner-toolbar&apos;&gt;&lt;/div&gt;&quot; +
				&quot;&lt;h2 id=&apos;qunit-userAgent&apos;&gt;&lt;/h2&gt;&quot; +
				&quot;&lt;ol id=&apos;qunit-tests&apos;&gt;&lt;/ol&gt;&quot;;
		}

		tests = id( &quot;qunit-tests&quot; );
		banner = id( &quot;qunit-banner&quot; );
		result = id( &quot;qunit-testresult&quot; );

		if ( tests ) {
			tests.innerHTML = &quot;&quot;;
		}

		if ( banner ) {
			banner.className = &quot;&quot;;
		}

		if ( result ) {
			result.parentNode.removeChild( result );
		}

		if ( tests ) {
			result = document.createElement( &quot;p&quot; );
			result.id = &quot;qunit-testresult&quot;;
			result.className = &quot;result&quot;;
			tests.parentNode.insertBefore( result, tests );
			result.innerHTML = &quot;Running...&lt;br/&gt;&amp;nbsp;&quot;;
		}
	},

	// Resets the test setup. Useful for tests that modify the DOM.
	/*
	DEPRECATED: Use multiple tests instead of resetting inside a test.
	Use testStart or testDone for custom cleanup.
	This method will throw an error in 2.0, and will be removed in 2.1
	*/
	reset: function() {
		var fixture = id( &quot;qunit-fixture&quot; );
		if ( fixture ) {
			fixture.innerHTML = config.fixture;
		}
	},

	// Safe object type checking
	is: function( type, obj ) {
		return QUnit.objectType( obj ) === type;
	},

	objectType: function( obj ) {
		if ( typeof obj === &quot;undefined&quot; ) {
			return &quot;undefined&quot;;
		}

		// Consider: typeof null === object
		if ( obj === null ) {
			return &quot;null&quot;;
		}

		var match = toString.call( obj ).match(/^\[object\s(.*)\]$/),
			type = match &amp;&amp; match[1] || &quot;&quot;;

		switch ( type ) {
			case &quot;Number&quot;:
				if ( isNaN(obj) ) {
					return &quot;nan&quot;;
				}
				return &quot;number&quot;;
			case &quot;String&quot;:
			case &quot;Boolean&quot;:
			case &quot;Array&quot;:
			case &quot;Date&quot;:
			case &quot;RegExp&quot;:
			case &quot;Function&quot;:
				return type.toLowerCase();
		}
		if ( typeof obj === &quot;object&quot; ) {
			return &quot;object&quot;;
		}
		return undefined;
	},

	push: function( result, actual, expected, message ) {
		if ( !config.current ) {
			throw new Error( &quot;assertion outside test context, was &quot; + sourceFromStacktrace() );
		}

		var output, source,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: result,
				message: message,
				actual: actual,
				expected: expected
			};

		message = escapeText( message ) || ( result ? &quot;okay&quot; : &quot;failed&quot; );
		message = &quot;&lt;span class=&apos;test-message&apos;&gt;&quot; + message + &quot;&lt;/span&gt;&quot;;
		output = message;

		if ( !result ) {
			expected = escapeText( QUnit.jsDump.parse(expected) );
			actual = escapeText( QUnit.jsDump.parse(actual) );
			output += &quot;&lt;table&gt;&lt;tr class=&apos;test-expected&apos;&gt;&lt;th&gt;Expected: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + expected + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;

			if ( actual !== expected ) {
				output += &quot;&lt;tr class=&apos;test-actual&apos;&gt;&lt;th&gt;Result: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + actual + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;
				output += &quot;&lt;tr class=&apos;test-diff&apos;&gt;&lt;th&gt;Diff: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + QUnit.diff( expected, actual ) + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;
			}

			source = sourceFromStacktrace();

			if ( source ) {
				details.source = source;
				output += &quot;&lt;tr class=&apos;test-source&apos;&gt;&lt;th&gt;Source: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + escapeText( source ) + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;
			}

			output += &quot;&lt;/table&gt;&quot;;
		}

		runLoggingCallbacks( &quot;log&quot;, QUnit, details );

		config.current.assertions.push({
			result: !!result,
			message: output
		});
	},

	pushFailure: function( message, source, actual ) {
		if ( !config.current ) {
			throw new Error( &quot;pushFailure() assertion outside test context, was &quot; + sourceFromStacktrace(2) );
		}

		var output,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: false,
				message: message
			};

		message = escapeText( message ) || &quot;error&quot;;
		message = &quot;&lt;span class=&apos;test-message&apos;&gt;&quot; + message + &quot;&lt;/span&gt;&quot;;
		output = message;

		output += &quot;&lt;table&gt;&quot;;

		if ( actual ) {
			output += &quot;&lt;tr class=&apos;test-actual&apos;&gt;&lt;th&gt;Result: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + escapeText( actual ) + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;
		}

		if ( source ) {
			details.source = source;
			output += &quot;&lt;tr class=&apos;test-source&apos;&gt;&lt;th&gt;Source: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; + escapeText( source ) + &quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&quot;;
		}

		output += &quot;&lt;/table&gt;&quot;;

		runLoggingCallbacks( &quot;log&quot;, QUnit, details );

		config.current.assertions.push({
			result: false,
			message: output
		});
	},

	url: function( params ) {
		params = extend( extend( {}, QUnit.urlParams ), params );
		var key,
			querystring = &quot;?&quot;;

		for ( key in params ) {
			if ( hasOwn.call( params, key ) ) {
				querystring += encodeURIComponent( key ) + &quot;=&quot; +
					encodeURIComponent( params[ key ] ) + &quot;&amp;&quot;;
			}
		}
		return window.location.protocol + &quot;//&quot; + window.location.host +
			window.location.pathname + querystring.slice( 0, -1 );
	},

	extend: extend,
	id: id,
	addEvent: addEvent,
	addClass: addClass,
	hasClass: hasClass,
	removeClass: removeClass
	// load, equiv, jsDump, diff: Attached later
});

/**
 * @deprecated: Created for backwards compatibility with test runner that set the hook function
 * into QUnit.{hook}, instead of invoking it and passing the hook function.
 * QUnit.constructor is set to the empty F() above so that we can add to it&apos;s prototype here.
 * Doing this allows us to tell if the following methods have been overwritten on the actual
 * QUnit object.
 */
extend( QUnit.constructor.prototype, {

	// Logging callbacks; all receive a single argument with the listed properties
	// run test/logs.html for any related changes
	begin: registerLoggingCallback( &quot;begin&quot; ),

	// done: { failed, passed, total, runtime }
	done: registerLoggingCallback( &quot;done&quot; ),

	// log: { result, actual, expected, message }
	log: registerLoggingCallback( &quot;log&quot; ),

	// testStart: { name }
	testStart: registerLoggingCallback( &quot;testStart&quot; ),

	// testDone: { name, failed, passed, total, runtime }
	testDone: registerLoggingCallback( &quot;testDone&quot; ),

	// moduleStart: { name }
	moduleStart: registerLoggingCallback( &quot;moduleStart&quot; ),

	// moduleDone: { name, failed, passed, total }
	moduleDone: registerLoggingCallback( &quot;moduleDone&quot; )
});

if ( !defined.document || document.readyState === &quot;complete&quot; ) {
	config.autorun = true;
}

QUnit.load = function() {
	runLoggingCallbacks( &quot;begin&quot;, QUnit, {} );

	// Initialize the config, saving the execution queue
	var banner, filter, i, j, label, len, main, ol, toolbar, val, selection,
		urlConfigContainer, moduleFilter, userAgent,
		numModules = 0,
		moduleNames = [],
		moduleFilterHtml = &quot;&quot;,
		urlConfigHtml = &quot;&quot;,
		oldconfig = extend( {}, config );

	QUnit.init();
	extend(config, oldconfig);

	config.blocking = false;

	len = config.urlConfig.length;

	for ( i = 0; i &lt; len; i++ ) {
		val = config.urlConfig[i];
		if ( typeof val === &quot;string&quot; ) {
			val = {
				id: val,
				label: val
			};
		}
		config[ val.id ] = QUnit.urlParams[ val.id ];
		if ( !val.value || typeof val.value === &quot;string&quot; ) {
			urlConfigHtml += &quot;&lt;input id=&apos;qunit-urlconfig-&quot; + escapeText( val.id ) +
				&quot;&apos; name=&apos;&quot; + escapeText( val.id ) +
				&quot;&apos; type=&apos;checkbox&apos;&quot; +
				( val.value ? &quot; value=&apos;&quot; + escapeText( val.value ) + &quot;&apos;&quot; : &quot;&quot; ) +
				( config[ val.id ] ? &quot; checked=&apos;checked&apos;&quot; : &quot;&quot; ) +
				&quot; title=&apos;&quot; + escapeText( val.tooltip ) +
				&quot;&apos;&gt;&lt;label for=&apos;qunit-urlconfig-&quot; + escapeText( val.id ) +
				&quot;&apos; title=&apos;&quot; + escapeText( val.tooltip ) + &quot;&apos;&gt;&quot; + val.label + &quot;&lt;/label&gt;&quot;;
		} else {
			urlConfigHtml += &quot;&lt;label for=&apos;qunit-urlconfig-&quot; + escapeText( val.id ) +
				&quot;&apos; title=&apos;&quot; + escapeText( val.tooltip ) +
				&quot;&apos;&gt;&quot; + val.label +
				&quot;: &lt;/label&gt;&lt;select id=&apos;qunit-urlconfig-&quot; + escapeText( val.id ) +
				&quot;&apos; name=&apos;&quot; + escapeText( val.id ) +
				&quot;&apos; title=&apos;&quot; + escapeText( val.tooltip ) +
				&quot;&apos;&gt;&lt;option&gt;&lt;/option&gt;&quot;;
			selection = false;
			if ( QUnit.is( &quot;array&quot;, val.value ) ) {
				for ( j = 0; j &lt; val.value.length; j++ ) {
					urlConfigHtml += &quot;&lt;option value=&apos;&quot; + escapeText( val.value[j] ) + &quot;&apos;&quot; +
						( config[ val.id ] === val.value[j] ?
							(selection = true) &amp;&amp; &quot; selected=&apos;selected&apos;&quot; :
							&quot;&quot; ) +
						&quot;&gt;&quot; + escapeText( val.value[j] ) + &quot;&lt;/option&gt;&quot;;
				}
			} else {
				for ( j in val.value ) {
					if ( hasOwn.call( val.value, j ) ) {
						urlConfigHtml += &quot;&lt;option value=&apos;&quot; + escapeText( j ) + &quot;&apos;&quot; +
							( config[ val.id ] === j ?
								(selection = true) &amp;&amp; &quot; selected=&apos;selected&apos;&quot; :
								&quot;&quot; ) +
							&quot;&gt;&quot; + escapeText( val.value[j] ) + &quot;&lt;/option&gt;&quot;;
					}
				}
			}
			if ( config[ val.id ] &amp;&amp; !selection ) {
				urlConfigHtml += &quot;&lt;option value=&apos;&quot; + escapeText( config[ val.id ] ) +
					&quot;&apos; selected=&apos;selected&apos; disabled=&apos;disabled&apos;&gt;&quot; +
					escapeText( config[ val.id ] ) +
					&quot;&lt;/option&gt;&quot;;
			}
			urlConfigHtml += &quot;&lt;/select&gt;&quot;;
		}
	}
	for ( i in config.modules ) {
		if ( config.modules.hasOwnProperty( i ) ) {
			moduleNames.push(i);
		}
	}
	numModules = moduleNames.length;
	moduleNames.sort( function( a, b ) {
		return a.localeCompare( b );
	});
	moduleFilterHtml += &quot;&lt;label for=&apos;qunit-modulefilter&apos;&gt;Module: &lt;/label&gt;&lt;select id=&apos;qunit-modulefilter&apos; name=&apos;modulefilter&apos;&gt;&lt;option value=&apos;&apos; &quot; +
		( config.module === undefined  ? &quot;selected=&apos;selected&apos;&quot; : &quot;&quot; ) +
		&quot;&gt;&lt; All Modules &gt;&lt;/option&gt;&quot;;


	for ( i = 0; i &lt; numModules; i++) {
			moduleFilterHtml += &quot;&lt;option value=&apos;&quot; + escapeText( encodeURIComponent(moduleNames[i]) ) + &quot;&apos; &quot; +
				( config.module === moduleNames[i] ? &quot;selected=&apos;selected&apos;&quot; : &quot;&quot; ) +
				&quot;&gt;&quot; + escapeText(moduleNames[i]) + &quot;&lt;/option&gt;&quot;;
	}
	moduleFilterHtml += &quot;&lt;/select&gt;&quot;;

	// `userAgent` initialized at top of scope
	userAgent = id( &quot;qunit-userAgent&quot; );
	if ( userAgent ) {
		userAgent.innerHTML = navigator.userAgent;
	}

	// `banner` initialized at top of scope
	banner = id( &quot;qunit-header&quot; );
	if ( banner ) {
		banner.innerHTML = &quot;&lt;a href=&apos;&quot; + QUnit.url({ filter: undefined, module: undefined, testNumber: undefined }) + &quot;&apos;&gt;&quot; + banner.innerHTML + &quot;&lt;/a&gt; &quot;;
	}

	// `toolbar` initialized at top of scope
	toolbar = id( &quot;qunit-testrunner-toolbar&quot; );
	if ( toolbar ) {
		// `filter` initialized at top of scope
		filter = document.createElement( &quot;input&quot; );
		filter.type = &quot;checkbox&quot;;
		filter.id = &quot;qunit-filter-pass&quot;;

		addEvent( filter, &quot;click&quot;, function() {
			var tmp,
				ol = id( &quot;qunit-tests&quot; );

			if ( filter.checked ) {
				ol.className = ol.className + &quot; hidepass&quot;;
			} else {
				tmp = &quot; &quot; + ol.className.replace( /[\n\t\r]/g, &quot; &quot; ) + &quot; &quot;;
				ol.className = tmp.replace( / hidepass /, &quot; &quot; );
			}
			if ( defined.sessionStorage ) {
				if (filter.checked) {
					sessionStorage.setItem( &quot;qunit-filter-passed-tests&quot;, &quot;true&quot; );
				} else {
					sessionStorage.removeItem( &quot;qunit-filter-passed-tests&quot; );
				}
			}
		});

		if ( config.hidepassed || defined.sessionStorage &amp;&amp; sessionStorage.getItem( &quot;qunit-filter-passed-tests&quot; ) ) {
			filter.checked = true;
			// `ol` initialized at top of scope
			ol = id( &quot;qunit-tests&quot; );
			ol.className = ol.className + &quot; hidepass&quot;;
		}
		toolbar.appendChild( filter );

		// `label` initialized at top of scope
		label = document.createElement( &quot;label&quot; );
		label.setAttribute( &quot;for&quot;, &quot;qunit-filter-pass&quot; );
		label.setAttribute( &quot;title&quot;, &quot;Only show tests and assertions that fail. Stored in sessionStorage.&quot; );
		label.innerHTML = &quot;Hide passed tests&quot;;
		toolbar.appendChild( label );

		urlConfigContainer = document.createElement(&quot;span&quot;);
		urlConfigContainer.innerHTML = urlConfigHtml;
		// For oldIE support:
		// * Add handlers to the individual elements instead of the container
		// * Use &quot;click&quot; instead of &quot;change&quot; for checkboxes
		// * Fallback from event.target to event.srcElement
		addEvents( urlConfigContainer.getElementsByTagName(&quot;input&quot;), &quot;click&quot;, function( event ) {
			var params = {},
				target = event.target || event.srcElement;
			params[ target.name ] = target.checked ?
				target.defaultValue || true :
				undefined;
			window.location = QUnit.url( params );
		});
		addEvents( urlConfigContainer.getElementsByTagName(&quot;select&quot;), &quot;change&quot;, function( event ) {
			var params = {},
				target = event.target || event.srcElement;
			params[ target.name ] = target.options[ target.selectedIndex ].value || undefined;
			window.location = QUnit.url( params );
		});
		toolbar.appendChild( urlConfigContainer );

		if (numModules &gt; 1) {
			moduleFilter = document.createElement( &quot;span&quot; );
			moduleFilter.setAttribute( &quot;id&quot;, &quot;qunit-modulefilter-container&quot; );
			moduleFilter.innerHTML = moduleFilterHtml;
			addEvent( moduleFilter.lastChild, &quot;change&quot;, function() {
				var selectBox = moduleFilter.getElementsByTagName(&quot;select&quot;)[0],
					selectedModule = decodeURIComponent(selectBox.options[selectBox.selectedIndex].value);

				window.location = QUnit.url({
					module: ( selectedModule === &quot;&quot; ) ? undefined : selectedModule,
					// Remove any existing filters
					filter: undefined,
					testNumber: undefined
				});
			});
			toolbar.appendChild(moduleFilter);
		}
	}

	// `main` initialized at top of scope
	main = id( &quot;qunit-fixture&quot; );
	if ( main ) {
		config.fixture = main.innerHTML;
	}

	if ( config.autostart ) {
		QUnit.start();
	}
};

if ( defined.document ) {
	addEvent( window, &quot;load&quot;, QUnit.load );
}

// `onErrorFnPrev` initialized at top of scope
// Preserve other handlers
onErrorFnPrev = window.onerror;

// Cover uncaught exceptions
// Returning true will suppress the default browser handler,
// returning false will let it run.
window.onerror = function ( error, filePath, linerNr ) {
	var ret = false;
	if ( onErrorFnPrev ) {
		ret = onErrorFnPrev( error, filePath, linerNr );
	}

	// Treat return value as window.onerror itself does,
	// Only do our handling if not suppressed.
	if ( ret !== true ) {
		if ( QUnit.config.current ) {
			if ( QUnit.config.current.ignoreGlobalErrors ) {
				return true;
			}
			QUnit.pushFailure( error, filePath + &quot;:&quot; + linerNr );
		} else {
			QUnit.test( &quot;global failure&quot;, extend( function() {
				QUnit.pushFailure( error, filePath + &quot;:&quot; + linerNr );
			}, { validTest: validTest } ) );
		}
		return false;
	}

	return ret;
};

function done() {
	config.autorun = true;

	// Log the last module results
	if ( config.previousModule ) {
		runLoggingCallbacks( &quot;moduleDone&quot;, QUnit, {
			name: config.previousModule,
			failed: config.moduleStats.bad,
			passed: config.moduleStats.all - config.moduleStats.bad,
			total: config.moduleStats.all
		});
	}
	delete config.previousModule;

	var i, key,
		banner = id( &quot;qunit-banner&quot; ),
		tests = id( &quot;qunit-tests&quot; ),
		runtime = +new Date() - config.started,
		passed = config.stats.all - config.stats.bad,
		html = [
			&quot;Tests completed in &quot;,
			runtime,
			&quot; milliseconds.&lt;br/&gt;&quot;,
			&quot;&lt;span class=&apos;passed&apos;&gt;&quot;,
			passed,
			&quot;&lt;/span&gt; assertions of &lt;span class=&apos;total&apos;&gt;&quot;,
			config.stats.all,
			&quot;&lt;/span&gt; passed, &lt;span class=&apos;failed&apos;&gt;&quot;,
			config.stats.bad,
			&quot;&lt;/span&gt; failed.&quot;
		].join( &quot;&quot; );

	if ( banner ) {
		banner.className = ( config.stats.bad ? &quot;qunit-fail&quot; : &quot;qunit-pass&quot; );
	}

	if ( tests ) {
		id( &quot;qunit-testresult&quot; ).innerHTML = html;
	}

	if ( config.altertitle &amp;&amp; defined.document &amp;&amp; document.title ) {
		// show &#x2716; for good, &#x2714; for bad suite result in title
		// use escape sequences in case file gets loaded with non-utf-8-charset
		document.title = [
			( config.stats.bad ? &quot;\u2716&quot; : &quot;\u2714&quot; ),
			document.title.replace( /^[\u2714\u2716] /i, &quot;&quot; )
		].join( &quot; &quot; );
	}

	// clear own sessionStorage items if all tests passed
	if ( config.reorder &amp;&amp; defined.sessionStorage &amp;&amp; config.stats.bad === 0 ) {
		// `key` &amp; `i` initialized at top of scope
		for ( i = 0; i &lt; sessionStorage.length; i++ ) {
			key = sessionStorage.key( i++ );
			if ( key.indexOf( &quot;qunit-test-&quot; ) === 0 ) {
				sessionStorage.removeItem( key );
			}
		}
	}

	// scroll back to top to show results
	if ( config.scrolltop &amp;&amp; window.scrollTo ) {
		window.scrollTo(0, 0);
	}

	runLoggingCallbacks( &quot;done&quot;, QUnit, {
		failed: config.stats.bad,
		passed: passed,
		total: config.stats.all,
		runtime: runtime
	});
}

/** @return Boolean: true if this test should be ran */
function validTest( test ) {
	var include,
		filter = config.filter &amp;&amp; config.filter.toLowerCase(),
		module = config.module &amp;&amp; config.module.toLowerCase(),
		fullName = ( test.module + &quot;: &quot; + test.testName ).toLowerCase();

	// Internally-generated tests are always valid
	if ( test.callback &amp;&amp; test.callback.validTest === validTest ) {
		delete test.callback.validTest;
		return true;
	}

	if ( config.testNumber.length &gt; 0 ) {
		if ( inArray( test.testNumber, config.testNumber ) &lt; 0 ) {
			return false;
		}
	}

	if ( module &amp;&amp; ( !test.module || test.module.toLowerCase() !== module ) ) {
		return false;
	}

	if ( !filter ) {
		return true;
	}

	include = filter.charAt( 0 ) !== &quot;!&quot;;
	if ( !include ) {
		filter = filter.slice( 1 );
	}

	// If the filter matches, we need to honour include
	if ( fullName.indexOf( filter ) !== -1 ) {
		return include;
	}

	// Otherwise, do the opposite
	return !include;
}

// so far supports only Firefox, Chrome and Opera (buggy), Safari (for real exceptions)
// Later Safari and IE10 are supposed to support error.stack as well
// See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
function extractStacktrace( e, offset ) {
	offset = offset === undefined ? 3 : offset;

	var stack, include, i;

	if ( e.stacktrace ) {
		// Opera
		return e.stacktrace.split( &quot;\n&quot; )[ offset + 3 ];
	} else if ( e.stack ) {
		// Firefox, Chrome
		stack = e.stack.split( &quot;\n&quot; );
		if (/^error$/i.test( stack[0] ) ) {
			stack.shift();
		}
		if ( fileName ) {
			include = [];
			for ( i = offset; i &lt; stack.length; i++ ) {
				if ( stack[ i ].indexOf( fileName ) !== -1 ) {
					break;
				}
				include.push( stack[ i ] );
			}
			if ( include.length ) {
				return include.join( &quot;\n&quot; );
			}
		}
		return stack[ offset ];
	} else if ( e.sourceURL ) {
		// Safari, PhantomJS
		// hopefully one day Safari provides actual stacktraces
		// exclude useless self-reference for generated Error objects
		if ( /qunit.js$/.test( e.sourceURL ) ) {
			return;
		}
		// for actual exceptions, this is useful
		return e.sourceURL + &quot;:&quot; + e.line;
	}
}
function sourceFromStacktrace( offset ) {
	try {
		throw new Error();
	} catch ( e ) {
		return extractStacktrace( e, offset );
	}
}

/**
 * Escape text for attribute or text content.
 */
function escapeText( s ) {
	if ( !s ) {
		return &quot;&quot;;
	}
	s = s + &quot;&quot;;
	// Both single quotes and double quotes (for attributes)
	return s.replace( /[&apos;&quot;&lt;&gt;&amp;]/g, function( s ) {
		switch( s ) {
			case &quot;&apos;&quot;:
				return &quot;&amp;#039;&quot;;
			case &quot;\&quot;&quot;:
				return &quot;&amp;quot;&quot;;
			case &quot;&lt;&quot;:
				return &quot;&amp;lt;&quot;;
			case &quot;&gt;&quot;:
				return &quot;&amp;gt;&quot;;
			case &quot;&amp;&quot;:
				return &quot;&amp;amp;&quot;;
		}
	});
}

function synchronize( callback, last ) {
	config.queue.push( callback );

	if ( config.autorun &amp;&amp; !config.blocking ) {
		process( last );
	}
}

function process( last ) {
	function next() {
		process( last );
	}
	var start = new Date().getTime();
	config.depth = config.depth ? config.depth + 1 : 1;

	while ( config.queue.length &amp;&amp; !config.blocking ) {
		if ( !defined.setTimeout || config.updateRate &lt;= 0 || ( ( new Date().getTime() - start ) &lt; config.updateRate ) ) {
			config.queue.shift()();
		} else {
			setTimeout( next, 13 );
			break;
		}
	}
	config.depth--;
	if ( last &amp;&amp; !config.blocking &amp;&amp; !config.queue.length &amp;&amp; config.depth === 0 ) {
		done();
	}
}

function saveGlobal() {
	config.pollution = [];

	if ( config.noglobals ) {
		for ( var key in window ) {
			if ( hasOwn.call( window, key ) ) {
				// in Opera sometimes DOM element ids show up here, ignore them
				if ( /^qunit-test-output/.test( key ) ) {
					continue;
				}
				config.pollution.push( key );
			}
		}
	}
}

function checkPollution() {
	var newGlobals,
		deletedGlobals,
		old = config.pollution;

	saveGlobal();

	newGlobals = diff( config.pollution, old );
	if ( newGlobals.length &gt; 0 ) {
		QUnit.pushFailure( &quot;Introduced global variable(s): &quot; + newGlobals.join(&quot;, &quot;) );
	}

	deletedGlobals = diff( old, config.pollution );
	if ( deletedGlobals.length &gt; 0 ) {
		QUnit.pushFailure( &quot;Deleted global variable(s): &quot; + deletedGlobals.join(&quot;, &quot;) );
	}
}

// returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
	var i, j,
		result = a.slice();

	for ( i = 0; i &lt; result.length; i++ ) {
		for ( j = 0; j &lt; b.length; j++ ) {
			if ( result[i] === b[j] ) {
				result.splice( i, 1 );
				i--;
				break;
			}
		}
	}
	return result;
}

function extend( a, b ) {
	for ( var prop in b ) {
		if ( hasOwn.call( b, prop ) ) {
			// Avoid &quot;Member not found&quot; error in IE8 caused by messing with window.constructor
			if ( !( prop === &quot;constructor&quot; &amp;&amp; a === window ) ) {
				if ( b[ prop ] === undefined ) {
					delete a[ prop ];
				} else {
					a[ prop ] = b[ prop ];
				}
			}
		}
	}

	return a;
}

/**
 * @param {HTMLElement} elem
 * @param {string} type
 * @param {Function} fn
 */
function addEvent( elem, type, fn ) {
	if ( elem.addEventListener ) {

		// Standards-based browsers
		elem.addEventListener( type, fn, false );
	} else if ( elem.attachEvent ) {

		// support: IE &lt;9
		elem.attachEvent( &quot;on&quot; + type, fn );
	} else {

		// Caller must ensure support for event listeners is present
		throw new Error( &quot;addEvent() was called in a context without event listener support&quot; );
	}
}

/**
 * @param {Array|NodeList} elems
 * @param {string} type
 * @param {Function} fn
 */
function addEvents( elems, type, fn ) {
	var i = elems.length;
	while ( i-- ) {
		addEvent( elems[i], type, fn );
	}
}

function hasClass( elem, name ) {
	return (&quot; &quot; + elem.className + &quot; &quot;).indexOf(&quot; &quot; + name + &quot; &quot;) &gt; -1;
}

function addClass( elem, name ) {
	if ( !hasClass( elem, name ) ) {
		elem.className += (elem.className ? &quot; &quot; : &quot;&quot;) + name;
	}
}

function removeClass( elem, name ) {
	var set = &quot; &quot; + elem.className + &quot; &quot;;
	// Class name may appear multiple times
	while ( set.indexOf(&quot; &quot; + name + &quot; &quot;) &gt; -1 ) {
		set = set.replace(&quot; &quot; + name + &quot; &quot; , &quot; &quot;);
	}
	// If possible, trim it for prettiness, but not necessarily
	elem.className = typeof set.trim === &quot;function&quot; ? set.trim() : set.replace(/^\s+|\s+$/g, &quot;&quot;);
}

function id( name ) {
	return defined.document &amp;&amp; document.getElementById &amp;&amp; document.getElementById( name );
}

function registerLoggingCallback( key ) {
	return function( callback ) {
		config[key].push( callback );
	};
}

// Supports deprecated method of completely overwriting logging callbacks
function runLoggingCallbacks( key, scope, args ) {
	var i, callbacks;
	if ( QUnit.hasOwnProperty( key ) ) {
		QUnit[ key ].call(scope, args );
	} else {
		callbacks = config[ key ];
		for ( i = 0; i &lt; callbacks.length; i++ ) {
			callbacks[ i ].call( scope, args );
		}
	}
}

// from jquery.js
function inArray( elem, array ) {
	if ( array.indexOf ) {
		return array.indexOf( elem );
	}

	for ( var i = 0, length = array.length; i &lt; length; i++ ) {
		if ( array[ i ] === elem ) {
			return i;
		}
	}

	return -1;
}

function Test( settings ) {
	extend( this, settings );
	this.assertions = [];
	this.testNumber = ++Test.count;
}

Test.count = 0;

Test.prototype = {
	init: function() {
		var a, b, li,
			tests = id( &quot;qunit-tests&quot; );

		if ( tests ) {
			b = document.createElement( &quot;strong&quot; );
			b.innerHTML = this.nameHtml;

			// `a` initialized at top of scope
			a = document.createElement( &quot;a&quot; );
			a.innerHTML = &quot;Rerun&quot;;
			a.href = QUnit.url({ testNumber: this.testNumber });

			li = document.createElement( &quot;li&quot; );
			li.appendChild( b );
			li.appendChild( a );
			li.className = &quot;running&quot;;
			li.id = this.id = &quot;qunit-test-output&quot; + testId++;

			tests.appendChild( li );
		}
	},
	setup: function() {
		if (
			// Emit moduleStart when we&apos;re switching from one module to another
			this.module !== config.previousModule ||
				// They could be equal (both undefined) but if the previousModule property doesn&apos;t
				// yet exist it means this is the first test in a suite that isn&apos;t wrapped in a
				// module, in which case we&apos;ll just emit a moduleStart event for &apos;undefined&apos;.
				// Without this, reporters can get testStart before moduleStart  which is a problem.
				!hasOwn.call( config, &quot;previousModule&quot; )
		) {
			if ( hasOwn.call( config, &quot;previousModule&quot; ) ) {
				runLoggingCallbacks( &quot;moduleDone&quot;, QUnit, {
					name: config.previousModule,
					failed: config.moduleStats.bad,
					passed: config.moduleStats.all - config.moduleStats.bad,
					total: config.moduleStats.all
				});
			}
			config.previousModule = this.module;
			config.moduleStats = { all: 0, bad: 0 };
			runLoggingCallbacks( &quot;moduleStart&quot;, QUnit, {
				name: this.module
			});
		}

		config.current = this;

		this.testEnvironment = extend({
			setup: function() {},
			teardown: function() {}
		}, this.moduleTestEnvironment );

		this.started = +new Date();
		runLoggingCallbacks( &quot;testStart&quot;, QUnit, {
			name: this.testName,
			module: this.module
		});

		/*jshint camelcase:false */


		/**
		 * Expose the current test environment.
		 *
		 * @deprecated since 1.12.0: Use QUnit.config.current.testEnvironment instead.
		 */
		QUnit.current_testEnvironment = this.testEnvironment;

		/*jshint camelcase:true */

		if ( !config.pollution ) {
			saveGlobal();
		}
		if ( config.notrycatch ) {
			this.testEnvironment.setup.call( this.testEnvironment, QUnit.assert );
			return;
		}
		try {
			this.testEnvironment.setup.call( this.testEnvironment, QUnit.assert );
		} catch( e ) {
			QUnit.pushFailure( &quot;Setup failed on &quot; + this.testName + &quot;: &quot; + ( e.message || e ), extractStacktrace( e, 1 ) );
		}
	},
	run: function() {
		config.current = this;

		var running = id( &quot;qunit-testresult&quot; );

		if ( running ) {
			running.innerHTML = &quot;Running: &lt;br/&gt;&quot; + this.nameHtml;
		}

		if ( this.async ) {
			QUnit.stop();
		}

		this.callbackStarted = +new Date();

		if ( config.notrycatch ) {
			this.callback.call( this.testEnvironment, QUnit.assert );
			this.callbackRuntime = +new Date() - this.callbackStarted;
			return;
		}

		try {
			this.callback.call( this.testEnvironment, QUnit.assert );
			this.callbackRuntime = +new Date() - this.callbackStarted;
		} catch( e ) {
			this.callbackRuntime = +new Date() - this.callbackStarted;

			QUnit.pushFailure( &quot;Died on test #&quot; + (this.assertions.length + 1) + &quot; &quot; + this.stack + &quot;: &quot; + ( e.message || e ), extractStacktrace( e, 0 ) );
			// else next test will carry the responsibility
			saveGlobal();

			// Restart the tests if they&apos;re blocking
			if ( config.blocking ) {
				QUnit.start();
			}
		}
	},
	teardown: function() {
		config.current = this;
		if ( config.notrycatch ) {
			if ( typeof this.callbackRuntime === &quot;undefined&quot; ) {
				this.callbackRuntime = +new Date() - this.callbackStarted;
			}
			this.testEnvironment.teardown.call( this.testEnvironment, QUnit.assert );
			return;
		} else {
			try {
				this.testEnvironment.teardown.call( this.testEnvironment, QUnit.assert );
			} catch( e ) {
				QUnit.pushFailure( &quot;Teardown failed on &quot; + this.testName + &quot;: &quot; + ( e.message || e ), extractStacktrace( e, 1 ) );
			}
		}
		checkPollution();
	},
	finish: function() {
		config.current = this;
		if ( config.requireExpects &amp;&amp; this.expected === null ) {
			QUnit.pushFailure( &quot;Expected number of assertions to be defined, but expect() was not called.&quot;, this.stack );
		} else if ( this.expected !== null &amp;&amp; this.expected !== this.assertions.length ) {
			QUnit.pushFailure( &quot;Expected &quot; + this.expected + &quot; assertions, but &quot; + this.assertions.length + &quot; were run&quot;, this.stack );
		} else if ( this.expected === null &amp;&amp; !this.assertions.length ) {
			QUnit.pushFailure( &quot;Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.&quot;, this.stack );
		}

		var i, assertion, a, b, time, li, ol,
			test = this,
			good = 0,
			bad = 0,
			tests = id( &quot;qunit-tests&quot; );

		this.runtime = +new Date() - this.started;
		config.stats.all += this.assertions.length;
		config.moduleStats.all += this.assertions.length;

		if ( tests ) {
			ol = document.createElement( &quot;ol&quot; );
			ol.className = &quot;qunit-assert-list&quot;;

			for ( i = 0; i &lt; this.assertions.length; i++ ) {
				assertion = this.assertions[i];

				li = document.createElement( &quot;li&quot; );
				li.className = assertion.result ? &quot;pass&quot; : &quot;fail&quot;;
				li.innerHTML = assertion.message || ( assertion.result ? &quot;okay&quot; : &quot;failed&quot; );
				ol.appendChild( li );

				if ( assertion.result ) {
					good++;
				} else {
					bad++;
					config.stats.bad++;
					config.moduleStats.bad++;
				}
			}

			// store result when possible
			if ( QUnit.config.reorder &amp;&amp; defined.sessionStorage ) {
				if ( bad ) {
					sessionStorage.setItem( &quot;qunit-test-&quot; + this.module + &quot;-&quot; + this.testName, bad );
				} else {
					sessionStorage.removeItem( &quot;qunit-test-&quot; + this.module + &quot;-&quot; + this.testName );
				}
			}

			if ( bad === 0 ) {
				addClass( ol, &quot;qunit-collapsed&quot; );
			}

			// `b` initialized at top of scope
			b = document.createElement( &quot;strong&quot; );
			b.innerHTML = this.nameHtml + &quot; &lt;b class=&apos;counts&apos;&gt;(&lt;b class=&apos;failed&apos;&gt;&quot; + bad + &quot;&lt;/b&gt;, &lt;b class=&apos;passed&apos;&gt;&quot; + good + &quot;&lt;/b&gt;, &quot; + this.assertions.length + &quot;)&lt;/b&gt;&quot;;

			addEvent(b, &quot;click&quot;, function() {
				var next = b.parentNode.lastChild,
					collapsed = hasClass( next, &quot;qunit-collapsed&quot; );
				( collapsed ? removeClass : addClass )( next, &quot;qunit-collapsed&quot; );
			});

			addEvent(b, &quot;dblclick&quot;, function( e ) {
				var target = e &amp;&amp; e.target ? e.target : window.event.srcElement;
				if ( target.nodeName.toLowerCase() === &quot;span&quot; || target.nodeName.toLowerCase() === &quot;b&quot; ) {
					target = target.parentNode;
				}
				if ( window.location &amp;&amp; target.nodeName.toLowerCase() === &quot;strong&quot; ) {
					window.location = QUnit.url({ testNumber: test.testNumber });
				}
			});

			// `time` initialized at top of scope
			time = document.createElement( &quot;span&quot; );
			time.className = &quot;runtime&quot;;
			time.innerHTML = this.runtime + &quot; ms&quot;;

			// `li` initialized at top of scope
			li = id( this.id );
			li.className = bad ? &quot;fail&quot; : &quot;pass&quot;;
			li.removeChild( li.firstChild );
			a = li.firstChild;
			li.appendChild( b );
			li.appendChild( a );
			li.appendChild( time );
			li.appendChild( ol );

		} else {
			for ( i = 0; i &lt; this.assertions.length; i++ ) {
				if ( !this.assertions[i].result ) {
					bad++;
					config.stats.bad++;
					config.moduleStats.bad++;
				}
			}
		}

		runLoggingCallbacks( &quot;testDone&quot;, QUnit, {
			name: this.testName,
			module: this.module,
			failed: bad,
			passed: this.assertions.length - bad,
			total: this.assertions.length,
			runtime: this.runtime,
			// DEPRECATED: this property will be removed in 2.0.0, use runtime instead
			duration: this.runtime
		});

		QUnit.reset();

		config.current = undefined;
	},

	queue: function() {
		var bad,
			test = this;

		synchronize(function() {
			test.init();
		});
		function run() {
			// each of these can by async
			synchronize(function() {
				test.setup();
			});
			synchronize(function() {
				test.run();
			});
			synchronize(function() {
				test.teardown();
			});
			synchronize(function() {
				test.finish();
			});
		}

		// `bad` initialized at top of scope
		// defer when previous test run passed, if storage is available
		bad = QUnit.config.reorder &amp;&amp; defined.sessionStorage &amp;&amp;
						+sessionStorage.getItem( &quot;qunit-test-&quot; + this.module + &quot;-&quot; + this.testName );

		if ( bad ) {
			run();
		} else {
			synchronize( run, true );
		}
	}
};

// `assert` initialized at top of scope
// Assert helpers
// All of these must either call QUnit.push() or manually do:
// - runLoggingCallbacks( &quot;log&quot;, .. );
// - config.current.assertions.push({ .. });
assert = QUnit.assert = {
	/**
	 * Asserts rough true-ish result.
	 * @name ok
	 * @function
	 * @example ok( &quot;asdfasdf&quot;.length &gt; 5, &quot;There must be at least 5 chars&quot; );
	 */
	ok: function( result, msg ) {
		if ( !config.current ) {
			throw new Error( &quot;ok() assertion outside test context, was &quot; + sourceFromStacktrace(2) );
		}
		result = !!result;
		msg = msg || ( result ? &quot;okay&quot; : &quot;failed&quot; );

		var source,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: result,
				message: msg
			};

		msg = &quot;&lt;span class=&apos;test-message&apos;&gt;&quot; + escapeText( msg ) + &quot;&lt;/span&gt;&quot;;

		if ( !result ) {
			source = sourceFromStacktrace( 2 );
			if ( source ) {
				details.source = source;
				msg += &quot;&lt;table&gt;&lt;tr class=&apos;test-source&apos;&gt;&lt;th&gt;Source: &lt;/th&gt;&lt;td&gt;&lt;pre&gt;&quot; +
					escapeText( source ) +
					&quot;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;
			}
		}
		runLoggingCallbacks( &quot;log&quot;, QUnit, details );
		config.current.assertions.push({
			result: result,
			message: msg
		});
	},

	/**
	 * Assert that the first two arguments are equal, with an optional message.
	 * Prints out both actual and expected values.
	 * @name equal
	 * @function
	 * @example equal( format( &quot;Received {0} bytes.&quot;, 2), &quot;Received 2 bytes.&quot;, &quot;format() replaces {0} with next argument&quot; );
	 */
	equal: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		QUnit.push( expected == actual, actual, expected, message );
	},

	/**
	 * @name notEqual
	 * @function
	 */
	notEqual: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		QUnit.push( expected != actual, actual, expected, message );
	},

	/**
	 * @name propEqual
	 * @function
	 */
	propEqual: function( actual, expected, message ) {
		actual = objectValues(actual);
		expected = objectValues(expected);
		QUnit.push( QUnit.equiv(actual, expected), actual, expected, message );
	},

	/**
	 * @name notPropEqual
	 * @function
	 */
	notPropEqual: function( actual, expected, message ) {
		actual = objectValues(actual);
		expected = objectValues(expected);
		QUnit.push( !QUnit.equiv(actual, expected), actual, expected, message );
	},

	/**
	 * @name deepEqual
	 * @function
	 */
	deepEqual: function( actual, expected, message ) {
		QUnit.push( QUnit.equiv(actual, expected), actual, expected, message );
	},

	/**
	 * @name notDeepEqual
	 * @function
	 */
	notDeepEqual: function( actual, expected, message ) {
		QUnit.push( !QUnit.equiv(actual, expected), actual, expected, message );
	},

	/**
	 * @name strictEqual
	 * @function
	 */
	strictEqual: function( actual, expected, message ) {
		QUnit.push( expected === actual, actual, expected, message );
	},

	/**
	 * @name notStrictEqual
	 * @function
	 */
	notStrictEqual: function( actual, expected, message ) {
		QUnit.push( expected !== actual, actual, expected, message );
	},

	&quot;throws&quot;: function( block, expected, message ) {
		var actual,
			expectedOutput = expected,
			ok = false;

		// &apos;expected&apos; is optional
		if ( !message &amp;&amp; typeof expected === &quot;string&quot; ) {
			message = expected;
			expected = null;
		}

		config.current.ignoreGlobalErrors = true;
		try {
			block.call( config.current.testEnvironment );
		} catch (e) {
			actual = e;
		}
		config.current.ignoreGlobalErrors = false;

		if ( actual ) {

			// we don&apos;t want to validate thrown error
			if ( !expected ) {
				ok = true;
				expectedOutput = null;

			// expected is an Error object
			} else if ( expected instanceof Error ) {
				ok = actual instanceof Error &amp;&amp;
					 actual.name === expected.name &amp;&amp;
					 actual.message === expected.message;

			// expected is a regexp
			} else if ( QUnit.objectType( expected ) === &quot;regexp&quot; ) {
				ok = expected.test( errorString( actual ) );

			// expected is a string
			} else if ( QUnit.objectType( expected ) === &quot;string&quot; ) {
				ok = expected === errorString( actual );

			// expected is a constructor
			} else if ( actual instanceof expected ) {
				ok = true;

			// expected is a validation function which returns true is validation passed
			} else if ( expected.call( {}, actual ) === true ) {
				expectedOutput = null;
				ok = true;
			}

			QUnit.push( ok, actual, expectedOutput, message );
		} else {
			QUnit.pushFailure( message, null, &quot;No exception was thrown.&quot; );
		}
	}
};

/**
 * @deprecated since 1.8.0
 * Kept assertion helpers in root for backwards compatibility.
 */
extend( QUnit.constructor.prototype, assert );

/**
 * @deprecated since 1.9.0
 * Kept to avoid TypeErrors for undefined methods.
 */
QUnit.constructor.prototype.raises = function() {
	QUnit.push( false, false, false, &quot;QUnit.raises has been deprecated since 2012 (fad3c1ea), use QUnit.throws instead&quot; );
};

/**
 * @deprecated since 1.0.0, replaced with error pushes since 1.3.0
 * Kept to avoid TypeErrors for undefined methods.
 */
QUnit.constructor.prototype.equals = function() {
	QUnit.push( false, false, false, &quot;QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead&quot; );
};
QUnit.constructor.prototype.same = function() {
	QUnit.push( false, false, false, &quot;QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead&quot; );
};

// Test for equality any JavaScript type.
// Author: Philippe Rath&#xE9; &lt;prathe@gmail.com&gt;
QUnit.equiv = (function() {

	// Call the o related callback with the given arguments.
	function bindCallbacks( o, callbacks, args ) {
		var prop = QUnit.objectType( o );
		if ( prop ) {
			if ( QUnit.objectType( callbacks[ prop ] ) === &quot;function&quot; ) {
				return callbacks[ prop ].apply( callbacks, args );
			} else {
				return callbacks[ prop ]; // or undefined
			}
		}
	}

	// the real equiv function
	var innerEquiv,
		// stack to decide between skip/abort functions
		callers = [],
		// stack to avoiding loops from circular referencing
		parents = [],
		parentsB = [],

		getProto = Object.getPrototypeOf || function ( obj ) {
			/*jshint camelcase:false */
			return obj.__proto__;
		},
		callbacks = (function () {

			// for string, boolean, number and null
			function useStrictEquality( b, a ) {
				/*jshint eqeqeq:false */
				if ( b instanceof a.constructor || a instanceof b.constructor ) {
					// to catch short annotation VS &apos;new&apos; annotation of a
					// declaration
					// e.g. var i = 1;
					// var j = new Number(1);
					return a == b;
				} else {
					return a === b;
				}
			}

			return {
				&quot;string&quot;: useStrictEquality,
				&quot;boolean&quot;: useStrictEquality,
				&quot;number&quot;: useStrictEquality,
				&quot;null&quot;: useStrictEquality,
				&quot;undefined&quot;: useStrictEquality,

				&quot;nan&quot;: function( b ) {
					return isNaN( b );
				},

				&quot;date&quot;: function( b, a ) {
					return QUnit.objectType( b ) === &quot;date&quot; &amp;&amp; a.valueOf() === b.valueOf();
				},

				&quot;regexp&quot;: function( b, a ) {
					return QUnit.objectType( b ) === &quot;regexp&quot; &amp;&amp;
						// the regex itself
						a.source === b.source &amp;&amp;
						// and its modifiers
						a.global === b.global &amp;&amp;
						// (gmi) ...
						a.ignoreCase === b.ignoreCase &amp;&amp;
						a.multiline === b.multiline &amp;&amp;
						a.sticky === b.sticky;
				},

				// - skip when the property is a method of an instance (OOP)
				// - abort otherwise,
				// initial === would have catch identical references anyway
				&quot;function&quot;: function() {
					var caller = callers[callers.length - 1];
					return caller !== Object &amp;&amp; typeof caller !== &quot;undefined&quot;;
				},

				&quot;array&quot;: function( b, a ) {
					var i, j, len, loop, aCircular, bCircular;

					// b could be an object literal here
					if ( QUnit.objectType( b ) !== &quot;array&quot; ) {
						return false;
					}

					len = a.length;
					if ( len !== b.length ) {
						// safe and faster
						return false;
					}

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );
					for ( i = 0; i &lt; len; i++ ) {
						loop = false;
						for ( j = 0; j &lt; parents.length; j++ ) {
							aCircular = parents[j] === a[i];
							bCircular = parentsB[j] === b[i];
							if ( aCircular || bCircular ) {
								if ( a[i] === b[i] || aCircular &amp;&amp; bCircular ) {
									loop = true;
								} else {
									parents.pop();
									parentsB.pop();
									return false;
								}
							}
						}
						if ( !loop &amp;&amp; !innerEquiv(a[i], b[i]) ) {
							parents.pop();
							parentsB.pop();
							return false;
						}
					}
					parents.pop();
					parentsB.pop();
					return true;
				},

				&quot;object&quot;: function( b, a ) {
					/*jshint forin:false */
					var i, j, loop, aCircular, bCircular,
						// Default to true
						eq = true,
						aProperties = [],
						bProperties = [];

					// comparing constructors is more strict than using
					// instanceof
					if ( a.constructor !== b.constructor ) {
						// Allow objects with no prototype to be equivalent to
						// objects with Object as their constructor.
						if ( !(( getProto(a) === null &amp;&amp; getProto(b) === Object.prototype ) ||
							( getProto(b) === null &amp;&amp; getProto(a) === Object.prototype ) ) ) {
								return false;
						}
					}

					// stack constructor before traversing properties
					callers.push( a.constructor );

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );

					// be strict: don&apos;t ensure hasOwnProperty and go deep
					for ( i in a ) {
						loop = false;
						for ( j = 0; j &lt; parents.length; j++ ) {
							aCircular = parents[j] === a[i];
							bCircular = parentsB[j] === b[i];
							if ( aCircular || bCircular ) {
								if ( a[i] === b[i] || aCircular &amp;&amp; bCircular ) {
									loop = true;
								} else {
									eq = false;
									break;
								}
							}
						}
						aProperties.push(i);
						if ( !loop &amp;&amp; !innerEquiv(a[i], b[i]) ) {
							eq = false;
							break;
						}
					}

					parents.pop();
					parentsB.pop();
					callers.pop(); // unstack, we are done

					for ( i in b ) {
						bProperties.push( i ); // collect b&apos;s properties
					}

					// Ensures identical properties name
					return eq &amp;&amp; innerEquiv( aProperties.sort(), bProperties.sort() );
				}
			};
		}());

	innerEquiv = function() { // can take multiple arguments
		var args = [].slice.apply( arguments );
		if ( args.length &lt; 2 ) {
			return true; // end transition
		}

		return (function( a, b ) {
			if ( a === b ) {
				return true; // catch the most you can
			} else if ( a === null || b === null || typeof a === &quot;undefined&quot; ||
					typeof b === &quot;undefined&quot; ||
					QUnit.objectType(a) !== QUnit.objectType(b) ) {
				return false; // don&apos;t lose time with error prone cases
			} else {
				return bindCallbacks(a, callbacks, [ b, a ]);
			}

			// apply transition with (1..n) arguments
		}( args[0], args[1] ) &amp;&amp; innerEquiv.apply( this, args.splice(1, args.length - 1 )) );
	};

	return innerEquiv;
}());

/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */
QUnit.jsDump = (function() {
	function quote( str ) {
		return &quot;\&quot;&quot; + str.toString().replace( /&quot;/g, &quot;\\\&quot;&quot; ) + &quot;\&quot;&quot;;
	}
	function literal( o ) {
		return o + &quot;&quot;;
	}
	function join( pre, arr, post ) {
		var s = jsDump.separator(),
			base = jsDump.indent(),
			inner = jsDump.indent(1);
		if ( arr.join ) {
			arr = arr.join( &quot;,&quot; + s + inner );
		}
		if ( !arr ) {
			return pre + post;
		}
		return [ pre, inner + arr, base + post ].join(s);
	}
	function array( arr, stack ) {
		var i = arr.length, ret = new Array(i);
		this.up();
		while ( i-- ) {
			ret[i] = this.parse( arr[i] , undefined , stack);
		}
		this.down();
		return join( &quot;[&quot;, ret, &quot;]&quot; );
	}

	var reName = /^function (\w+)/,
		jsDump = {
			// type is used mostly internally, you can fix a (custom)type in advance
			parse: function( obj, type, stack ) {
				stack = stack || [ ];
				var inStack, res,
					parser = this.parsers[ type || this.typeOf(obj) ];

				type = typeof parser;
				inStack = inArray( obj, stack );

				if ( inStack !== -1 ) {
					return &quot;recursion(&quot; + (inStack - stack.length) + &quot;)&quot;;
				}
				if ( type === &quot;function&quot; )  {
					stack.push( obj );
					res = parser.call( this, obj, stack );
					stack.pop();
					return res;
				}
				return ( type === &quot;string&quot; ) ? parser : this.parsers.error;
			},
			typeOf: function( obj ) {
				var type;
				if ( obj === null ) {
					type = &quot;null&quot;;
				} else if ( typeof obj === &quot;undefined&quot; ) {
					type = &quot;undefined&quot;;
				} else if ( QUnit.is( &quot;regexp&quot;, obj) ) {
					type = &quot;regexp&quot;;
				} else if ( QUnit.is( &quot;date&quot;, obj) ) {
					type = &quot;date&quot;;
				} else if ( QUnit.is( &quot;function&quot;, obj) ) {
					type = &quot;function&quot;;
				} else if ( typeof obj.setInterval !== undefined &amp;&amp; typeof obj.document !== &quot;undefined&quot; &amp;&amp; typeof obj.nodeType === &quot;undefined&quot; ) {
					type = &quot;window&quot;;
				} else if ( obj.nodeType === 9 ) {
					type = &quot;document&quot;;
				} else if ( obj.nodeType ) {
					type = &quot;node&quot;;
				} else if (
					// native arrays
					toString.call( obj ) === &quot;[object Array]&quot; ||
					// NodeList objects
					( typeof obj.length === &quot;number&quot; &amp;&amp; typeof obj.item !== &quot;undefined&quot; &amp;&amp; ( obj.length ? obj.item(0) === obj[0] : ( obj.item( 0 ) === null &amp;&amp; typeof obj[0] === &quot;undefined&quot; ) ) )
				) {
					type = &quot;array&quot;;
				} else if ( obj.constructor === Error.prototype.constructor ) {
					type = &quot;error&quot;;
				} else {
					type = typeof obj;
				}
				return type;
			},
			separator: function() {
				return this.multiline ?	this.HTML ? &quot;&lt;br /&gt;&quot; : &quot;\n&quot; : this.HTML ? &quot;&amp;nbsp;&quot; : &quot; &quot;;
			},
			// extra can be a number, shortcut for increasing-calling-decreasing
			indent: function( extra ) {
				if ( !this.multiline ) {
					return &quot;&quot;;
				}
				var chr = this.indentChar;
				if ( this.HTML ) {
					chr = chr.replace( /\t/g, &quot;   &quot; ).replace( / /g, &quot;&amp;nbsp;&quot; );
				}
				return new Array( this.depth + ( extra || 0 ) ).join(chr);
			},
			up: function( a ) {
				this.depth += a || 1;
			},
			down: function( a ) {
				this.depth -= a || 1;
			},
			setParser: function( name, parser ) {
				this.parsers[name] = parser;
			},
			// The next 3 are exposed so you can use them
			quote: quote,
			literal: literal,
			join: join,
			//
			depth: 1,
			// This is the list of parsers, to modify them, use jsDump.setParser
			parsers: {
				window: &quot;[Window]&quot;,
				document: &quot;[Document]&quot;,
				error: function(error) {
					return &quot;Error(\&quot;&quot; + error.message + &quot;\&quot;)&quot;;
				},
				unknown: &quot;[Unknown]&quot;,
				&quot;null&quot;: &quot;null&quot;,
				&quot;undefined&quot;: &quot;undefined&quot;,
				&quot;function&quot;: function( fn ) {
					var ret = &quot;function&quot;,
						// functions never have name in IE
						name = &quot;name&quot; in fn ? fn.name : (reName.exec(fn) || [])[1];

					if ( name ) {
						ret += &quot; &quot; + name;
					}
					ret += &quot;( &quot;;

					ret = [ ret, QUnit.jsDump.parse( fn, &quot;functionArgs&quot; ), &quot;){&quot; ].join( &quot;&quot; );
					return join( ret, QUnit.jsDump.parse(fn,&quot;functionCode&quot; ), &quot;}&quot; );
				},
				array: array,
				nodelist: array,
				&quot;arguments&quot;: array,
				object: function( map, stack ) {
					/*jshint forin:false */
					var ret = [ ], keys, key, val, i;
					QUnit.jsDump.up();
					keys = [];
					for ( key in map ) {
						keys.push( key );
					}
					keys.sort();
					for ( i = 0; i &lt; keys.length; i++ ) {
						key = keys[ i ];
						val = map[ key ];
						ret.push( QUnit.jsDump.parse( key, &quot;key&quot; ) + &quot;: &quot; + QUnit.jsDump.parse( val, undefined, stack ) );
					}
					QUnit.jsDump.down();
					return join( &quot;{&quot;, ret, &quot;}&quot; );
				},
				node: function( node ) {
					var len, i, val,
						open = QUnit.jsDump.HTML ? &quot;&amp;lt;&quot; : &quot;&lt;&quot;,
						close = QUnit.jsDump.HTML ? &quot;&amp;gt;&quot; : &quot;&gt;&quot;,
						tag = node.nodeName.toLowerCase(),
						ret = open + tag,
						attrs = node.attributes;

					if ( attrs ) {
						for ( i = 0, len = attrs.length; i &lt; len; i++ ) {
							val = attrs[i].nodeValue;
							// IE6 includes all attributes in .attributes, even ones not explicitly set.
							// Those have values like undefined, null, 0, false, &quot;&quot; or &quot;inherit&quot;.
							if ( val &amp;&amp; val !== &quot;inherit&quot; ) {
								ret += &quot; &quot; + attrs[i].nodeName + &quot;=&quot; + QUnit.jsDump.parse( val, &quot;attribute&quot; );
							}
						}
					}
					ret += close;

					// Show content of TextNode or CDATASection
					if ( node.nodeType === 3 || node.nodeType === 4 ) {
						ret += node.nodeValue;
					}

					return ret + open + &quot;/&quot; + tag + close;
				},
				// function calls it internally, it&apos;s the arguments part of the function
				functionArgs: function( fn ) {
					var args,
						l = fn.length;

					if ( !l ) {
						return &quot;&quot;;
					}

					args = new Array(l);
					while ( l-- ) {
						// 97 is &apos;a&apos;
						args[l] = String.fromCharCode(97+l);
					}
					return &quot; &quot; + args.join( &quot;, &quot; ) + &quot; &quot;;
				},
				// object calls it internally, the key part of an item in a map
				key: quote,
				// function calls it internally, it&apos;s the content of the function
				functionCode: &quot;[code]&quot;,
				// node calls it internally, it&apos;s an html attribute value
				attribute: quote,
				string: quote,
				date: quote,
				regexp: literal,
				number: literal,
				&quot;boolean&quot;: literal
			},
			// if true, entities are escaped ( &lt;, &gt;, \t, space and \n )
			HTML: false,
			// indentation unit
			indentChar: &quot;  &quot;,
			// if true, items in a collection, are separated by a \n, else just a space.
			multiline: true
		};

	return jsDump;
}());

/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan &quot;sprite&quot;
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff( &quot;the quick brown fox jumped over&quot;, &quot;the quick fox jumps over&quot; ) == &quot;the  quick &lt;del&gt;brown &lt;/del&gt; fox &lt;del&gt;jumped &lt;/del&gt;&lt;ins&gt;jumps &lt;/ins&gt; over&quot;
 */
QUnit.diff = (function() {
	/*jshint eqeqeq:false, eqnull:true */
	function diff( o, n ) {
		var i,
			ns = {},
			os = {};

		for ( i = 0; i &lt; n.length; i++ ) {
			if ( !hasOwn.call( ns, n[i] ) ) {
				ns[ n[i] ] = {
					rows: [],
					o: null
				};
			}
			ns[ n[i] ].rows.push( i );
		}

		for ( i = 0; i &lt; o.length; i++ ) {
			if ( !hasOwn.call( os, o[i] ) ) {
				os[ o[i] ] = {
					rows: [],
					n: null
				};
			}
			os[ o[i] ].rows.push( i );
		}

		for ( i in ns ) {
			if ( hasOwn.call( ns, i ) ) {
				if ( ns[i].rows.length === 1 &amp;&amp; hasOwn.call( os, i ) &amp;&amp; os[i].rows.length === 1 ) {
					n[ ns[i].rows[0] ] = {
						text: n[ ns[i].rows[0] ],
						row: os[i].rows[0]
					};
					o[ os[i].rows[0] ] = {
						text: o[ os[i].rows[0] ],
						row: ns[i].rows[0]
					};
				}
			}
		}

		for ( i = 0; i &lt; n.length - 1; i++ ) {
			if ( n[i].text != null &amp;&amp; n[ i + 1 ].text == null &amp;&amp; n[i].row + 1 &lt; o.length &amp;&amp; o[ n[i].row + 1 ].text == null &amp;&amp;
						n[ i + 1 ] == o[ n[i].row + 1 ] ) {

				n[ i + 1 ] = {
					text: n[ i + 1 ],
					row: n[i].row + 1
				};
				o[ n[i].row + 1 ] = {
					text: o[ n[i].row + 1 ],
					row: i + 1
				};
			}
		}

		for ( i = n.length - 1; i &gt; 0; i-- ) {
			if ( n[i].text != null &amp;&amp; n[ i - 1 ].text == null &amp;&amp; n[i].row &gt; 0 &amp;&amp; o[ n[i].row - 1 ].text == null &amp;&amp;
						n[ i - 1 ] == o[ n[i].row - 1 ]) {

				n[ i - 1 ] = {
					text: n[ i - 1 ],
					row: n[i].row - 1
				};
				o[ n[i].row - 1 ] = {
					text: o[ n[i].row - 1 ],
					row: i - 1
				};
			}
		}

		return {
			o: o,
			n: n
		};
	}

	return function( o, n ) {
		o = o.replace( /\s+$/, &quot;&quot; );
		n = n.replace( /\s+$/, &quot;&quot; );

		var i, pre,
			str = &quot;&quot;,
			out = diff( o === &quot;&quot; ? [] : o.split(/\s+/), n === &quot;&quot; ? [] : n.split(/\s+/) ),
			oSpace = o.match(/\s+/g),
			nSpace = n.match(/\s+/g);

		if ( oSpace == null ) {
			oSpace = [ &quot; &quot; ];
		}
		else {
			oSpace.push( &quot; &quot; );
		}

		if ( nSpace == null ) {
			nSpace = [ &quot; &quot; ];
		}
		else {
			nSpace.push( &quot; &quot; );
		}

		if ( out.n.length === 0 ) {
			for ( i = 0; i &lt; out.o.length; i++ ) {
				str += &quot;&lt;del&gt;&quot; + out.o[i] + oSpace[i] + &quot;&lt;/del&gt;&quot;;
			}
		}
		else {
			if ( out.n[0].text == null ) {
				for ( n = 0; n &lt; out.o.length &amp;&amp; out.o[n].text == null; n++ ) {
					str += &quot;&lt;del&gt;&quot; + out.o[n] + oSpace[n] + &quot;&lt;/del&gt;&quot;;
				}
			}

			for ( i = 0; i &lt; out.n.length; i++ ) {
				if (out.n[i].text == null) {
					str += &quot;&lt;ins&gt;&quot; + out.n[i] + nSpace[i] + &quot;&lt;/ins&gt;&quot;;
				}
				else {
					// `pre` initialized at top of scope
					pre = &quot;&quot;;

					for ( n = out.n[i].row + 1; n &lt; out.o.length &amp;&amp; out.o[n].text == null; n++ ) {
						pre += &quot;&lt;del&gt;&quot; + out.o[n] + oSpace[n] + &quot;&lt;/del&gt;&quot;;
					}
					str += &quot; &quot; + out.n[i].text + nSpace[i] + pre;
				}
			}
		}

		return str;
	};
}());

// For browser, export only select globals
if ( typeof window !== &quot;undefined&quot; ) {
	extend( window, QUnit.constructor.prototype );
	window.QUnit = QUnit;
}

// For CommonJS environments, export everything
if ( typeof module !== &quot;undefined&quot; &amp;&amp; module.exports ) {
	module.exports = QUnit;
}


// Get a reference to the global object, like window in browsers
}( (function() {
	return this;
})() ));
--&gt;</script>
</body>
</html>