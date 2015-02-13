
// var firstAlbum = new AlbumClass({
//     title: 'album title goes here...',
//     duration: 10 * 85
// });

// var firstTrack = new TrackClass({
//     title: 'this is track one',
//     duration: 84,
//     artists: ['foo', 'bar']
// });
// firstAlbum.addTrack(firstTrack);

// var secondTrack = new TrackClass({
//     title: 'this is track two',
//     duration: 90,
//     artists: ['abc', 'xyz']
// });
// firstAlbum.addTrack(secondTrack);


// console.log('Album: ', firstAlbum);
// console.log('Artists: ', firstAlbum.getArtists());


// $('.js-show_track').on('click', function() {
	
// });

// $('.js-search').on('click', function() {
// 	var name = $('input.search').val();
// 	// $('.track_results').html('<p>HI</p>')
// 	$('.track_results').css( "display", "block" );
	
// 	var txt = "I'm inserting text using JS.";
// 	$('form.search').append("<p>" +testing()+ "</p>");
// });

// function testing() {
// 	return 5+5
// }




/////////////////////////////////////////////////////////////////////////////////////////////////






/* jshint node: true */
"use strict";

var AlbumClass = require('album.js');
var TrackClass = require('./track.js');






var firstAlbum = new AlbumClass({
    title: 'album title goes here...',
    duration: 10 * 85,
    price: 10
});


var firstTrack = new TrackClass({
    title: 'this is track one',
    duration: 84,
    price: 0.99
});

firstTrack.addArtist('foo');
firstTrack.addArtist('abc');

firstAlbum.addTrack(firstTrack);

var secondTrack = new TrackClass({
    title: 'this is track two',
    duration: 90,
    price: 1.10
});
secondTrack.addArtist('abc');
secondTrack.addArtist('xyz');
firstAlbum.addTrack(secondTrack);

console.log('Album: ', firstAlbum);
console.log('Artists: ', firstAlbum.getArtists());






