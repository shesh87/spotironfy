
var firstAlbum = new AlbumClass({
    title: 'album title goes here...',
    duration: 10 * 85
});

var firstTrack = new TrackClass({
    title: 'this is track one',
    duration: 84,
    artists: ['foo', 'bar']
});
firstAlbum.addTrack(firstTrack);

var secondTrack = new TrackClass({
    title: 'this is track two',
    duration: 90,
    artists: ['abc', 'xyz']
});
firstAlbum.addTrack(secondTrack);


console.log('Album: ', firstAlbum);
console.log('Artists: ', firstAlbum.getArtists());
