function getdata() {
    var subreddit = $('#subreddit').val();
    var count = $('#count').val();
    if(subreddit) {
        if(count) {
            window.location.replace(`/${subreddit}/${count}`);
        } else {
            window.location.replace(`/${subreddit}`);
        }
    } else {
        console.log("error")
    }
}