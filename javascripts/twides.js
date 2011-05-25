// (C) Copyright 2011 Jacob Foshee jacobf@gmail.com
// You are free to use this code if you cite the author
// Thanks to John Resig, et al. for JQuery: http://jquery.com
// Thanks to SeaOfClounds, et al. for the tweet plugin: http://tweet.seaofclouds.com/

twides_timer = -1;
twides_seconds = 5;

function update_tweet() {
    $(".tweet").text("");

    query = $("#query").val();
    if (query == "")
        return;
    $(".tweet").tweet({
        avatar_size: 48,
        count: 1,
        query: query
    });    
}

function twides_stop() {
    clearInterval(twides_timer);
}

function twides_go() {
    twides_stop();
    update_tweet();
    twides_timer = setInterval(update_tweet, twides_seconds * 1000);
}

$(document).ready(twides_go)
