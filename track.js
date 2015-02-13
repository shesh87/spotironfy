/*
title <string>
duration <number>
lyrics <string>
bpm <number>
artist(s) <array>[string]
featuring artist(s) <array>[string]
song writer(s) <array>[string]
producer <array>[string]
genre <string>
price <number>
release day <date>

album <album>
*/


function TrackClass(data) {
    this.title = data.title;
    this.duration = data.duration;
    this.artists = data.artists;
    // and you keep going...
}
