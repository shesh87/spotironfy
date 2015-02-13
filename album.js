/*
title <string>
duration <number>
producers <array>[string]
genre <string>
label <string>
cover <url:string>
price <number>
release day <date>
tracks <array>[track]
*/


function AlbumClass(data) {
    this.title = data.title;
    this.duration = data.duration;
    // and you keep going...
    this.tracks = [];
    this.addTrack = function (track) {
        this.tracks.push(track);
    };
    this.getArtists = function () {
        var artists = [];
        this.tracks.forEach(function (track) {
            // TODO: dedupe
            artists = artists.concat(track.artists);
        });
        return artists;
    };
}
