/*!
 * reveal.js Choice View plugin
 * 
 * A plugin that scans for elements with the 'choice-view' class
 * and logs them to the console.
 */

const Plugin = {

	id: 'choice-view',

	init: function( reveal ) {

		// Store reference to reveal instance
		const deck = reveal;

		/**
		 * Check if the given event is from the same origin as the
		 * current window.
		 */
		function isSameOriginEvent( event ) {
			try {
				return window.location.origin === event.source.location.origin;
			}
			catch ( error ) {
				return false;
			}
		}

		/**
		 * Message handler for postMessage communication with the reveal-choice-view namespace
		 */
		function onPostMessage( event ) {
			// Only allow same-origin messages
			// (added as a XSS safeguard)
			if( isSameOriginEvent( event ) ) {
				try {
					let data = JSON.parse( event.data );
					if( data && data.namespace === 'reveal-choice-view' ) {
						
						// Handle different message types
						switch( data.type ) {
							case 'select-choice':
                                console.log('Choice View Plugin: select-choice message received', data);
								selectChoice( data.choiceIndex );
								break;
							default:
								console.warn('Choice View Plugin: Unknown message type', data.type);
						}
					}
				} catch (e) {
					console.error('Choice View Plugin: Error parsing message', e);
				}
			}
		}


        let choiceElements;
		/**
		 * Select a choice element by ID
		 */
		function selectChoice( choiceIdx ) {
            if (!choiceElements || choiceElements.length === 0) {
                console.warn('Choice View Plugin: No choice elements available to select from');
                return;
            }

            const idx = parseInt(choiceIdx, 10);
            if (isNaN(idx) || idx < 0 || idx >= choiceElements.length) {
                console.warn('Choice View Plugin: Invalid choice index', choiceIdx);
                return;
            }

            const choiceElement = choiceElements[idx];
            // add classname selected
            choiceElement.classList.add('selected');

            console.log('Choice View Plugin: Choice selected', {
                index: idx,
                element: choiceElement
            });

		}

		/**
		 * Scans the presentation for elements with 'choice-view' class
		 * and logs them to the console
		 */
		function scanChoiceViews() {
			// Find element with .choice-view class and get its children if it exists, otherwise set to null;
            const choiceViewContainer = deck.getCurrentSlide().querySelector('.choice-view');
            choiceElements = choiceViewContainer ? Array.from(choiceViewContainer.children) : null;
            if (choiceElements) {
			    console.info('Choice View Plugin: Found', choiceElements.length, 'choice-view elements');
            }
		}

		// Scan for choice-view elements when the presentation is ready
		deck.on('ready', function() {
			scanChoiceViews();
		});

		// Re-scan when slides change (in case choice-view elements are added dynamically)
		deck.on('slidechanged', function(event) {
			scanChoiceViews();
		});

		// Set up message listener for postMessage communication
		window.addEventListener( 'message', onPostMessage );
	},

	destroy: function() {
		// Clean up message listener
		window.removeEventListener( 'message', onPostMessage );
	}

};

export default () => Plugin;
